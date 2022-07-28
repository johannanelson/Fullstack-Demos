import React from 'react';
import ReactDOM from 'react-dom';
import store, {increment} from './store';
import {Provider, connect} from 'react-redux'

const Counter = (props) => {
  console.log('rendering counter with these props: ', props)

  const count = props.count
  const increment = props.increment

  return (
    <div id='container'>
      <div id='counter'>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Mapping state to props: ', state)
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapping dispatch to props')
  return {
    increment: () => dispatch(increment())
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

// class Counter extends React.Component {
//   constructor () {
//     super();
//     this.state = store.getState();
//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   componentDidMount() {
//     this.functionToCallWhenWeWantToUnsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.functionToCallWhenWeWantToUnsubscribe();
//   }

//   clickHandler () {
//     const action = increment();
//     store.dispatch(action);
//   }

//   render () {
//     return (
//       <div id='container'>
//         <div id='counter'>
//           <h1>{this.state.count}</h1>
//           <button onClick={(this.clickHandler)}>Increment</button>
//         </div>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
);
