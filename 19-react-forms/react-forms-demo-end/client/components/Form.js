/* REACT FORMS

Two Ways of Getting Data from Forms:
1. onSubmit() (the submit event)
    ----> NO data held on state
2. onChange() (the change event)
    ----> place the data on state so that you can validate each change

Two types of form components:
1. Uncontrolled components: changes to the form update state
2. Controlled components: changes to the form update state, AND changes to state update the form. They are literally CONTROLLED from the React side.
*/


import React from 'react';
import { connect } from 'react-redux';
import { addNewCat } from '../store/cats';

class Form extends React.Component {
  // 2. Define state and constructor
  constructor() {
    super();
    this.state = {
      catName: '',
      ownerName: ''
    }
    // We only need to bind our methods in our class component if we
    // use the this context inside of our methods.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // IF AN UNCONTROLLED COMPONENT: no handleChange
  // IF A CONTROLLED COMPONENT: define a handleChange to control the inputs that we receive.

  handleChange(event) {
    // Here we are using the same handleChange for all inputs.
    // We want to make sure our state reflects what we've
    // input into the form!
    // The input value is received as event.target.value
    // less smooth way:
    // this.setState({
    //   catName: event.target.catName.value,
    //   ownerName: event.target.ownerName.value
    // })
    console.log(event.target)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  // 1. handleSubmit
  async handleSubmit(event) {
    // prevent the default refreshing behavior from happening
    event.preventDefault();
    /*METHOD #1: UNCONTROLLED COMPONENT */
    // obtain our input values from the form.
    // event's targets can obtain form values based on the name of the input
    const catName = event.target.catName.value
    const ownerName = event.target.ownerName.value
    // at this point, we could perform axios requests, etc
    this.props.addCat({catName, ownerName})
    /* METHOD #2: CONTROLLED COMPONENT
    // Since we're always updating the state with
    // "handleChange", we can add a new cat
    // based on the state.
    this.props.addCat(this.state);
    // Always remember to clear the state
    // so the form can be re-used easily
    this.setState(initState);
    */
  }

  render() {
    return (
      <div>
        <span>Fill out form to add a cat - real or imaginary.</span>
        <form onSubmit={this.handleSubmit}>
          <div className='container-form-field'>
            <label htmlFor='catName'>Cat Name</label>
            <input
              type='text'
              name='catName'
              value={this.state.catName}
              onChange={this.handleChange}
            />
          </div>
          <div className='container-form-field'>
            <label htmlFor='ownerName'>Owner Name</label>
            <input
              type='text'
              name='ownerName'
              value={this.state.ownerName}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Submit!</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCat: (cat) => dispatch(addNewCat(cat)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
