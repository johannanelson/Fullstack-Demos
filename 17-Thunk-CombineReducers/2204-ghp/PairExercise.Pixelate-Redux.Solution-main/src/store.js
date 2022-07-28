import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

const NUM_COLUMNS = 20
export const AVAILABLE_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
]

// -----> 1. Initial state of our state
const initialState = {
  grid: [],
  selectedColor: AVAILABLE_COLORS[0]
}

// -----> 2. ACTION TYPES: to avoid the hassle of annoying debugging and standardizing actions across your store file
const ADD_ROW    = 'ADD_ROW'
const PICK_COLOR = 'PICK_COLOR'
const COLORIZE   = 'COLORIZE'

// -----> 3. ACTION CREATORS: returns an action object to then be dispatched to your reducer
// -- When there is data that your reducer case needs to correctly update state (i.e. user's color choice), you add an extra payload argument to your action object being returned by your action creator.
export const addRow = () => ({ type: ADD_ROW })
export const pickColor = (color) => ({ type: PICK_COLOR, color })
export const colorize = (row, column) => ({ type: COLORIZE, row, column })

// ----> 4. REDUCER: receive an action object and updates and returns state accordingly
const reducer = (state=initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_ROW:
      const newRow = Array(NUM_COLUMNS).fill('')
      return { ...state, grid: [...state.grid, newRow] }
    case PICK_COLOR:
      return { ...state, selectedColor: action.color }
    case COLORIZE:
      const newGrid = [...state.grid]
      newGrid[action.row] = [...newGrid[action.row]]
      newGrid[action.row][action.column] = state.selectedColor
      return { ...state, grid: newGrid}
    default:
      return state
  }
}

// ---> 5. CREATESTORE(): creating a store object that includes our reducer and store state
export default createStore(reducer, applyMiddleware(loggerMiddleware))
