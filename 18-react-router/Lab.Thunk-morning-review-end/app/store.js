import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const GOT_PETS_FROM_SERVER = 'GOT_PETS_FROM_SERVER'

const gotPetsFromServer = (pets) => ({
  type: GOT_PETS_FROM_SERVER,
  pets
})

export const getPets = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/pets')
    dispatch(gotPetsFromServer(data))
  }
}

// ^^^ your code here ^^^

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
