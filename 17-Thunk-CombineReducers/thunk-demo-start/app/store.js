import {createStore, applyMiddleware, combineReducers} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import piesReducer from './reducers/piesReducer'
import favoritePieReducer from './reducers/favoritePieReducer'

// Instead of having one mega reducer, let's break this up so that
// each sub reducer is responsible for ONE PIECE OF STATE.

// Constructing ONE BIG REDUCER from all the reducers indicated by our object. And this also means creating ONE MEGA STATE that's a combination of all the state being tracked by your mini reducers.
const reducer = combineReducers({
  // state: reducer
  pies: piesReducer,
  favoritePie: favoritePieReducer
})

/*
state = {
  pies: [],
  favoritePie: {}
}
*/

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware)
const store = createStore(reducer, middlewares)

export default store
