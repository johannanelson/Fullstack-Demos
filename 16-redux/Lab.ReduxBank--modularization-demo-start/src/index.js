/*
- createStore(): creates store with a reducer
- reducer function
- store.getState()
- store.subscribe()
- store.unsubscribe()
- action.dispatch()
*/

import { createStore } from "redux";

// ACTION TYPES: used to prevent typos; constants help to avoid these errors. Misspelling a string doesn't throw an error, but misspelling a variable does.
const DEPOSIT = "deposit"
const WITHDRAW = "withdraw"

// ACTION CREATORS: function that creates an action object
const deposit = (amount) => {
  return {
    type: DEPOSIT,
    amount
  }
}

const withdraw = (amount) => {
  return {
    type: WITHDRAW,
    amount
  }
}

const balance = document.getElementById("balance");
const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

deposit5.onclick = () => store.dispatch(deposit(5))
// return {type: "deposit", amount: 5 }
deposit25.onclick = () => store.dispatch(deposit(25))
withdraw5.onclick = () => store.dispatch(withdraw(5))
withdraw25.onclick = () => store.dispatch(withdraw(25))

const reducer = (state = { balance: 0 }, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.amount }
    case WITHDRAW:
      return { balance: state.balance - action.amount }
    default:
      return state;
  }
}

const store = createStore(reducer)

const balanceField = document.getElementById("balance");
// Subscribing to any changes to state; every time state is updated, the callback function inside subscribe() is called
store.subscribe(() => {
  console.log("The store state changed. Here is the new state:", store.getState());
  balanceField.innerText = `$ ${store.getState().balance}`
})

/*
// SETTING UP REDUX STORE
1. Import createStore
2. Define action types and action creators
3. Define reducer & cover all switch cases depending on action types
4. Call createStore() and pass in your reducer as an argument.

...

// USING REDUX STORE TO ACTUALLY MANAGE STATE
1. Dispatch an action
(State is updated through reducer)
2. Subscribe to your store and decide what should occur in the callback - will be evaluated each time state is updated.
*/