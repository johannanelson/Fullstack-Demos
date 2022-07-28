// This is where my component will go.
// 1. Import React!
// Using the ES6 module system (NOT common.js system)
import React from 'react';
import ReactDOM from 'react-dom';

// There are two kinds of React components: 1) class components and 2) functional components.
// 2. This is my React CLASS component:
class Magic8Ball extends React.Component {
  // 3. Constructor with initial state
  constructor() {
    // This is a Javascript inheritance thing; makes all the React.Component class methods accessible to my Magic8Ball class
    console.log('In the constructor');
    super();
    this.state = {
      messages: ['it is certain', 'yes definitely', 'as i see it, yes', 'try again', 'ask again later', 'most likely', 'you wish!', 'my sources say no', 'concentrate and ask again', 'my reply is no', 'outlook not so good'],
      currentMessage: 'Shake me!'
    }
    // We MUST bind any helper methods that we define!
    // Changing the THIS context of setMessage() from being in its own functional scope to class scope
    this.setMessage = this.setMessage.bind(this);
  }
  setMessage() {
    console.log('State BEFORE setState()', this.state);
    const randomIndex = Math.floor(Math.random() * this.state.messages.length)
    // Whenever I want to update state, I call setState()
    this.setState({
      currentMessage: this.state.messages[randomIndex]
    })
    console.log('State AFTER setState()', this.state);

  }
  // 4. Render method with some JSX to be rendered
  // Rendering JSX (very similar to HTML)
  render () {
    console.log('Inside render method');
    return (
      <div id='container'>
        <div id='circle'>
          <div>
            <h3>
            {this.state.currentMessage}
            </h3>
            </div>
        </div>
        <div>
        <button onClick={this.setMessage}>Shake</button>
        </div>
      </div>
    )
  }
}

// 5. Render my component on the DOM!
ReactDOM.render(<Magic8Ball />, document.getElementById('app'));
