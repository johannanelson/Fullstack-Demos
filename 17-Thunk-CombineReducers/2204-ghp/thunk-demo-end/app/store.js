import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// ACTION TYPES
const GOT_PIES_FROM_SERVER = 'GOT_PIES_FROM_SERVER'

// ACTION CREATORS
export const gotPies = (pies) => ({
  type: GOT_PIES_FROM_SERVER,
  pies
})

// I need a way to fetch my pies from my backend routes
// THUNK CREATOR: this is a function that returns another function. The outside function is just a wrapper function that we'll give to our component . The inside function will 1) make an ajax request and 2) dispatch the gotPies action with the fetched data.
// *** Our thunk creator is synchronous (fetchPies()), but our thunk that's being returned by our thunk creator is async.
export const fetchPies = () => {
  return async (dispatch) => {
    console.log('in thunk')
    // 1. Axios call
    const {data} = await axios.get('/pies')
    // 2. Dispatch an action to update state given our data
    dispatch(gotPies(data))
  }
}
const initialState = {
  pies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PIES_FROM_SERVER:
      console.log('action pies', action.pies)
      return {...state, pies: action.pies}
    default:
      return state
  }
}

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware)
const store = createStore(reducer, middlewares)

export default store
