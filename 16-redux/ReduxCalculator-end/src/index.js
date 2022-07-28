/*
1. createStore(): create our redux store
2. store.subscribe(): listen for any changes to state
3. store.getState(): get current state
*/

import {createStore} from "redux";

const balance = document.getElementById("balance");
const add5 = document.getElementById("add5");
const add25 = document.getElementById("add25");
const subtract5 = document.getElementById("subtract5");
const subtract25 = document.getElementById("subtract25");

add5.onclick = () => store.dispatch({type: "add", amount: 5});
add25.onclick = () => console.log("Add 25");
subtract5.onclick = () => console.log("Subtract 5");
subtract25.onclick = () => console.log("Subtract 25");

const reducer = (state = { total: 0 }
  , action) => {
    switch (action.type) {
      case "add":
        return { total: state.total + action.amount }
      default:
        return state;
    }

  }

const store = createStore(reducer)

store.subscribe(() => {
  console.log("Store state changed. New state: ", store.getState());
})
