import React from 'react'
import store, { addRow, AVAILABLE_COLORS, pickColor } from '../store'
import Table from './Table.js'
import ColorSelector from './ColorSelector.js'

/*
Redux methods (BEFORE React-Redux Connect)
---> 1. store.getState(): getting the entire state object from our store object
---> 2. store.subscribe(): officially listening for any changes made to the state held in your store, then reacting to those changes (given whatever callback function you pass in)
*/
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    this.handleAddRowClick = this.handleAddRowClick.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  // componentDidMount() {
  //   // Setting the state of our REACT COMPONENT (this.setState()) to whatever the new state of our store is (store.getState())
  //   // When we call subscribe(), we receive another function in return. This function RETURNS a matching unsubscribe function.
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  //   /*
  //     const subscribe = () => {
  //       // does some stuff to subscribe to store
  //       return function () {
  //         // ability to unsubscribe
  //       }
  //     }

  //   */
  // }

  // componentWillUnmount() {
  //   // When our component unmounts from the DOM, we STOP listening for changes to the store state.
  //   this.unsubscribe()
  // }

  handleAddRowClick() {
    // store.dispatch(addRow())
  }

  handleColorChange(evt) {
    // store.dispatch(pickColor(evt.target.value))
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={this.handleAddRowClick}>Add a row</button>
          <ColorSelector colors={AVAILABLE_COLORS}
                         selectedColor={this.state.selectedColor}
                         onChange={this.handleColorChange}
          />
        </div>
        <Table grid={this.state.grid} />
      </div>
    )
  }
}

// This state is only possible to use because of our Provider element.
const mapStateToProps = (state) => {
  // defines props.grid and props.selectedColor, using values from my redux store
  return {
    grid: state.grid,
    selectedColor: state.selectedColor
  }
}

// dispatch is a function that takes an action creator as an argument and then is sent to the store (***that was connected via Provider)
const mapDispatchToProps = (dispatch) => {
  // defines props.PickColor(), props.addRow()
  return {
    pickColor: (val) => dispatch(pickColor(val)),
    addRow: () => dispatch(addRow())
  }
}

/* In our component, once we call connect(), our props will look like this:
this.props = {
  grid, --> state from redux store
  selectedColor, --> state from store
  pickColor, --> action dispatchable to store
  addRow --> action dispatchable to store
}
*/

// This returns our App component that includes all the state and dispatches that we wanted mapped to our components as props
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

/* REACT-REDUX CONNECT:
---> 1. connect(): hooking up our redux store to our component, so that we can choose what state and what actions we want to dispatch from our component to our store.
    ---> a. mapStateToProps
    ---> b. mapDispatchToProps
---> 2. Provider: must pass our component (which will be using connect()) into a Provider element so that we can pass in the store that we want to connect our component to.
*/
