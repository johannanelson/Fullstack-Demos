/*
Setting up Redux:
1. createStore(reducer): create our redux store
2. store.subscribe(): listen for any changes to our state
3. store.getState(): get current state
4. store.dispatch(): for sending out an action object to your reducer
5. Define a reducer (any name) which is passed to createStore()
*/

// Action types
// Action creators
import {createStore} from "redux";

const add5 = document.getElementById("add5");
const add25 = document.getElementById("add25");
const subtract5 = document.getElementById("subtract5");
const subtract25 = document.getElementById("subtract25");

// Dispatching actions
// Expects an action object as an argument
add5.onclick = () => store.dispatch({type: "add", amount: 5})
add25.onclick = () => store.dispatch({type: "add", amount: 25});
subtract5.onclick = () => console.log("Subtract 5");
subtract25.onclick = () => console.log("Subtract 25");

// Define reducer to return new state
// Takes two arguments: currentState, dispatchedAction
const reducerFunction = (currentState = {total: 0 }, action) => {
  switch (action.type) {
    case "add":
      return { total: currentState.total + action.amount }
  }
}

// Create my redux store
const store = createStore(reducerFunction);

store.subscribe(() => {
  console.log("Store state changed. New state: ", store.getState())
})
