import React from 'react'

const ColorSelector = (props) => {
  console.log('color selector props', props)
  return (
    <select onChange={props.onChange} value={props.selectedColor}>
      { props.colors.map(color => (
        <option key={color} value={color}>{color}</option>
      ))}
    </select>
  )
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    colors: state.AVAILABLE_COLORS,
    selectedColor: state.selectedColor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRow: () => dispatch(addRow()),
    pickColor: (val) => dispatch(pickColor(val))
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
