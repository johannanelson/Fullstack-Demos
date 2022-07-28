// This file is responsible for the piece of state ~pies~

// ACTION TYPE
const GOT_PIES_FROM_SERVER = 'GOT_PIES_FROM_SERVER'

// ACTION CREATOR
export const gotPies = (pies) => ({
  type: GOT_PIES_FROM_SERVER,
  pies
})

// THUNK CREATOR
export const fetchPies = () => {
  return async (dispatch) =>
    console.log('in thunk')
    // 1. Axios call
    const {data} = await axios.get('/pies')
    // 2. Dispatch an action to update state given our data
    dispatch(gotPies(data))
  }

  /* originally,
    1. const initialState = {
      pies: [],
      favoritePie: {}
    }

    2. then:
    const initialState = {
      pies: []
    }

    3. const initialState = []

    4. why not just pass an empty array in as your reducer's first argument?
  */
  // REDUCER
  const reducer = (state = [], action) => {
    switch (action.type) {
      case GOT_PIES_FROM_SERVER:
        // returning state, but this time it's just an array
        return action.pies
      default:
        return state
    }
  }
