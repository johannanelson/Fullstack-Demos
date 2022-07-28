import axios from 'axios'

// This file is ONLY going to be responsible for the pies piece of state.
// pies = []

// ACTION TYPE
const GOT_PIES_FROM_SERVER = 'GOT_PIES_FROM_SERVER'

// ACTION CREATOR
export const gotPies = (pies) => ({
  type: GOT_PIES_FROM_SERVER,
  pies
})

// THUNK CREATOR
export const fetchPies = () => {
  return async (dispatch) => {
    // 1. Make my ajax request (get my pies)
    const {data} = await axios.get('/pies')
    // 2. Dispatch my gotPies action
    dispatch(gotPies(data))
  }
}

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case GOT_PIES_FROM_SERVER:
      return action.pies
    default:
      return state
  }
}

export default reducer;
