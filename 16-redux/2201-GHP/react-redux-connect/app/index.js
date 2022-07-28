import React from 'react';
import ReactDOM from 'react-dom';
import store, {increment} from './store'; // imported for you already
// REACT-REDUX CONNECT: take away the need for subscribe, unsubscribe, action dispatches
import {connect, Provider} from 'react-redux';

const Counter = (props) => {
    // props.count (variable accessible via mapStateToProps)
    // props.increment (function accessible via mapStateToProps)
    console.log('Props', props)
    return (
      <div id='container'>
        <div id='counter'>
          <h1>{props.count}</h1>
          <button onClick={props.increment}>Increment</button>
        </div>
      </div>
    );
  }

// Connect(): connect our store to our React components by mapping state and action dispatches held in our Redux store to the props of our React component.
// Provider: new component available through react-redux that will make our redux store available to our components through our connect() call.

// 1. mapStateToProps: telling connect which pieces of Redux state the component will have access to
const mapStateToProps = (state) => {
  return {
    count: state.count,
    cat: state.cat,
    componentDog: state.dog
  }
}

// 2. mapDispatchToProps: telling connect which action dispatches the component should be able to make
// think of this dispatch parameter as store.dispatch()
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment())
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />,
  </Provider>,
  document.getElementById('app')
);

/*
In order to use connect(), you have to:
1. Define mapStateToProps
2. Define mapDispatchToProps
3. Wrap your CONNECTED component in a Provider component, and pass in your store as a prop.
*/



/*
// store.subscribe() starts the process of listening for any updates to our redux state
    // -----> Whenever redux state is updated, we call the function inside subscribe()
    // ------> In this case, we're updating our React component state to match our Redux store state whenever the Redux store state is updated.
    // -------> It ALSO returns an unsubscribe function, which you can call when you are done listening for state changes (this usually is the case when you're about to unmount your component)

    this.functionToCallWhenWeWantToUnsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    */
