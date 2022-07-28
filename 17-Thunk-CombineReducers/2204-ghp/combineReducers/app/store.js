import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import allPiesReducer from './reducers/allPies'
import favoritePie from './reducers/favoritePie'

// Constructing ONE BIG REDUCER from all the reducers indicated by our object argument. And also creating ONE MEGA STATE that is a combination of all the state being tracked by your mini reducers.
// The keys here are PIECES OF STATE that each reducer is responsible for
const reducer = combineReducers({
  allPies: allPiesReducer,
  favoritePie: favoritePieReducer
})

/* By calling combineReducers(), our final state would look something like this:

state = {
  allPies: [], // in order to update this piece of state, store will look for the corresponding sub-reducer
  favoritePie: {}
}
*/


const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware)
const store = createStore(reducer, middlewares)

export default store



/* combineReducers
---1. Create new files for each piece of state inside a reducers directory.
---2. For each file, we include relevant action types, creators, and reducer to update that pieces of state.
---3. Import our reducer files into store.js
---4. Call combineReducers()
*/
