import React from 'react';
import ReactDOM from 'react-dom';

// Stateless functional component; doesn't have a state, just takes a props argument
const Color = (props) => {
  /*
  let className = props.color
  if (props.color === props.selectedColor) {
    className += " selected"
  }
  else {
    className += ""
  }
  */
 console.log("Props inside color", props)
  const className = props.color + (props.color === props.selectedColor ? " selected" : "")
  return (
    <div className={className} onClick = {() => props.selectColor(props.color)} />
  )
};

// Class component; contains state linked to this context
class Picker extends React.Component {
  constructor() {
    console.log("In the constructor")
    super()
    this.state = {
      selectedColor: "red",
      colors: []
    }
    this.selectColor = this.selectColor.bind(this)
  }

  selectColor(colorName) {
    this.setState({
      selectedColor: colorName
    })
  }

  componentDidMount() {
    console.log('Component did mount')
    this.setState({
      colors: [ 'red', 'blue', 'green']
    })
  }

  componentDidUpdate() {
    console.log('Component did update')
  }

  render() {
    console.log("rendering")
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>{this.state.selectedColor}</div>
        </div>
        <div>
          <ul id="colors-list">
            { this.state.colors.map( (color) => {
              return <Color key = {color} color={color} selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/>
            })}
          </ul>
          {/* <Color color = 'red' selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/>
          <Color color = 'blue' selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/>
          <Color color = 'green' selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/> */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Picker />, document.getElementById('app'));
