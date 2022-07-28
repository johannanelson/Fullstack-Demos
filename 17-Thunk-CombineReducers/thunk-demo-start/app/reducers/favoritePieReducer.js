import axios from 'axios'
// I want to fetch my favorite pie given a pie id
// In this file, we're ONLY dealing with the favoritePie piece of state.
// favoritePie = {}

// ACTION TYPE
const GOT_FAVORITE_PIE = 'GOT_FAVORITE_PIE'

// ACTION CREATOR
export const gotFavoritePie = (pie) => ({
  type: GOT_FAVORITE_PIE,
  pie
})

// THUNK CREATOR
export const fetchFavoritePie = (pieId) => {
  return async (dispatch) => {
    // 1. Making my axios call
    const {data} = await axios.get(`/pies/${pieId}`)
    // 2. Making dispatch using the data I just got
    dispatch(gotFavoritePie(data))
  }
}

// REDUCER
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_FAVORITE_PIE:
      return action.pie;
    default:
      return state
  }
}

export default reducer;
