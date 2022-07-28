import React from 'react'
import ReactDOM from 'react-dom';
import store, { addRow, AVAILABLE_COLORS, pickColor } from '../store'
import Table from './Table.js'
import ColorSelector from './ColorSelector.js'
import {Provider, connect} from 'react-redux'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = store.getState()
    console.log(this.props)

    this.handleAddRowClick = this.handleAddRowClick.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  // }

  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  handleAddRowClick() {
    //store.dispatch(addRow())
    this.props.addRow()
  }

  handleColorChange(evt) {
    this.props.pickColor(evt.target.value)
  //  store.dispatch(pickColor(evt.target.value))
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={this.handleAddRowClick}>Add a row</button>
          <ColorSelector colors={this.props.AVAILABLE_COLORS}
                         selectedColor={this.props.selectedColor}
                         onChange={this.handleColorChange}
          />
        </div>
        <Table grid={this.props.grid} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    AVAILABLE_COLORS: state.AVAILABLE_COLORS,
    selectedColor: state.selectedColor,
    grid: state.grid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRow: () => dispatch(addRow()),
    pickColor: (val) => dispatch(pickColor(val))
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);



