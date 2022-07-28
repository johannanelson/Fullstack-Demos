/*
1. createStore: creates our redux store
2. dispatch: the dispatcher in the redux store - used to send signals to the redux store that we want to change state. accepts an object, so your action should be an object.
3. getState: retrieves our store's state.
4. subscribe: listens for state changes

when we click, our action is dispatched - it is sent to our reducer.
** Both actions and state are objects.**
*/

import { createStore } from "redux";

// ACTION TYPES: we use these to prevent silly typos; we define constants to avoid these errors. When you misspell a string, it won't throw an error. When you misspell a variable, you'll get a reference error. Remember that constants are capitalized.

const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW'

// ACTION CREATORS: function that returns an action object
const deposit = (amount) => {
  return {
    type: DEPOSIT,
    amount // FIRST
    // payload: amount // SECOND
  }
}

const withdraw = (amount) => {
  return {
    type: WITHDRAW,
    amount // FIRST
    // payload: amount // SECOND
  }
}

// We're remodularizing our code so that it's less vulnerable to bugs and so that we can reuse our functions!
const balance = document.getElementById("balance");
const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

deposit5.onclick = () => store.dispatch(deposit(5))
deposit25.onclick = () => store.dispatch(deposit(25))
withdraw5.onclick = () => store.dispatch(withdraw(5))
withdraw25.onclick = () => store.dispatch(withdraw(25))

const store = createStore((state = { balance: 0 }, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.amount }
    case WITHDRAW:
      return { balance: state.balance - action.amount }
    default:
      return state;
  }
})

const balanceField = document.getElementById("balance");
store.subscribe(() => {
  console.log("The store state changed. Here is the new state:", store.getState());
  balanceField.innerText = `$ ${store.getState().balance}`
})
