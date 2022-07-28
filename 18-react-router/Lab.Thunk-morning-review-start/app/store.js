import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const GOT_PETS_FROM_SERVER = 'GOT_PETS_FROM_SERVER'

// ACTION CREATOR returns an ACTION object
const gotPets = (pets) => ({
  type: GOT_PETS_FROM_SERVER,
  pets
})

// THUNK CREATOR returns a THUNK (or a function)
export const getPets = () => {
  return async (dispatch) => {
    // I want to get my data, then dispatch my action
    const {data} = await axios.get('/pets')
    dispatch(gotPets(data))
  }
}

const initialState = {
  pets: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PETS_FROM_SERVER:
      return {...state, pets: action.pets}
    default:
      return state
  }
}

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware)
const store = createStore(reducer, middlewares)

export default store
