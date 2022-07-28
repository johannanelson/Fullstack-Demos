import React from 'react';
import ReactDOM from 'react-dom';

// Stateless functional component; doesn't have a state, just takes a props argument
const Color = (props) => {
  console.log("Props", props)
  const color = props.color
  const selectColor = props.selectColor
  const selectedColor = props.selectedColor
  const className = color + (color === selectedColor ? " selected" : "")
  console.log("Rendering color component")
  return <div className={className} onClick = {() => selectColor(color)}/>;
};

// Class component; has state, and can pass props down to child components; also has the ability to define methods

// Values will be stored in state
// Methods will be defined in your class
// BUT both can be passed as props to your child components.
class Picker extends React.Component {
  // Where you initialize your state object; usually setting a lot of the pieces
  // of state to empty strings or arrays or default values
  constructor() {
    console.log('In the constructor')
    super()
    this.state = {
      selectedColor: "red",
      colors: []
    }
    console.log("State in the constructor", this.state);
    this.selectColor = this.selectColor.bind(this)
  }

  // A GREAT place to set up your initial data that might be fetched
  // asynchronously. This means updating state with that async fetched data
  componentDidMount() {
    this.setState({
      colors: ['red', 'blue', 'green']
    })
  }

  // Helper methods
  selectColor(colorName) {
    this.setState({
      selectedColor: colorName
    })
    console.log("State after calling selectColor", this.state)
  }
  // Main render call
  render() {
    console.log("Rendering Picker component")
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>{this.state.selectedColor}</div>
        </div>
        <div >
          <ul id="colors-list">
            {
              this.state.colors.map( (color) => {
                return <Color key={color} color = {color} selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/>
              })
            }
          </ul>
          {/* <Color color="red" selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/>
          <Color color="blue" selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/>
          <Color color="green" selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/> */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Picker />, document.getElementById('app'));
