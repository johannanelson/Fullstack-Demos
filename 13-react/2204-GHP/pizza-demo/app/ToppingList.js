import React from 'react';
import Topping from './Topping.js'

// this is a class component
class ToppingList extends React.Component {
  constructor() {
    super();
    // STATE: only accessible in class components. Can be updated through setState(). Can be passed down to child components as props.
    this.state = {
      pizzaToppings: ['cheese', 'pepperoni', 'mushroom', 'pineapple', 'olives', 'chicken', 'sausage', 'pepper'],
      selectedTopping: 'cheese'
    }
    console.log('State', this.state)
    this.updateSelectedTopping = this.updateSelectedTopping.bind(this);
  }
  updateSelectedTopping(newTopping) {
    this.setState({
      selectedTopping: newTopping
    })
  }
  render() {
    return (
      <div>
        <h1>Your favorite pizza topping is {this.state.selectedTopping}</h1>
        {/* <Topping type='pepperoni' updateSelectedTopping = {this.updateSelectedTopping} />
        <Topping type='pineapple' updateSelectedTopping = {this.updateSelectedTopping}/>
        <Topping type='cheese' updateSelectedTopping = {this.updateSelectedTopping}/>
        <Topping type='pepper' updateSelectedTopping = {this.updateSelectedTopping}/> */}
       { this.state.pizzaToppings.map(topping => {
         return <Topping type={topping} updateSelectedTopping={this.updateSelectedTopping}/>
       })}
      </div>

    );
  }
}

export default ToppingList;
