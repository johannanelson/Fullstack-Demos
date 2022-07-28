import React from 'react'
import store, { addRow, AVAILABLE_COLORS, pickColor } from '../store'
import Table from './Table.js'
import ColorSelector from './ColorSelector.js'
// import {connect} from 'react-redux'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)

    this.handleAddRowClick = this.handleAddRowClick.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }
  

  handleAddRowClick() {
    this.props.addRow()
  }

  handleColorChange(evt) {
    this.props.pickColor(evt.target.value)
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={this.handleAddRowClick}>Add a row</button>
          <ColorSelector colors={AVAILABLE_COLORS}
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
  // creates props.grid and props.selectedColor
  return {
    grid: state.grid,
    selectedColor: state.selectedColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pickColor: (val) => dispatch(pickColor(val)),
    addRow: () => dispatch(addRow())
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(document.getElementById('app'),
<Provider store={store}>
  <ConnectedApp />
</Provider>)


