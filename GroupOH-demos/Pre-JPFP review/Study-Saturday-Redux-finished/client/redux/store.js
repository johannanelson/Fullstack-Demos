import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

// ACTION TYPES go here:
const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT'


// ACTION CREATORS go here:
const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
});

const gotSingleStudent = (student) => ({
  type: GOT_SINGLE_STUDENT,
  student
});


// THUNK CREATORS go here:
export const fetchStudents = () => async (dispatch) => {
  const {data} = await axios.get('/api/students');
  dispatch(gotStudents(data));
}

export const fetchSingleStudent = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/students/${id}`);
  dispatch(gotSingleStudent(data));
}


const initialState = {
  students: [],
  singleStudent: {}
};

// Our reducer is called whenever there's an incoming action.
// And there's an incoming action whenever we invoke an action creator. 
// Reducers only accept objects and not functions.
// eg. dispatch(gotStudents(students))
// -------> Returns an action object that is sent to our reducer
// -------> Our reducer receives this: {
  //                                      type: GOT_STUDENTS,
  //                                      students
//                                      }
// Reducer's second argument is the action object (as I typed above)
// We run the case that matches the action.type of our action object
// In order to update state, we return an entirely new object. We never mutate our previous state object directly; we always spread out a copy of state (...state), and then update any keys relevant to our action object.

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_STUDENTS:
      return {
        ...state,
        students: action.students
      }
    case GOT_SINGLE_STUDENT:
      return {
        ...state,
        singleStudent: action.student
      }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
