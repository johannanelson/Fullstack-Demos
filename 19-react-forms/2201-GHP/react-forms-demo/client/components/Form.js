/* REACT FORMS

TWO WAYS OF GETTING DATA FROM FORMS:
1. onSubmit() (the submit event)
    ---> NO data held on state in our form component
2. onChange() (the change event)
    ---> place the data on state so that you can validate each change

TWO TYPES OF FORM COMPONENTS:
1. Uncontrolled components: changes to your form will updated your state --> using onSubmit()
2. Controlled components: changes to the form update state, AND changes to state update the form. They are literally CONTROLLED from React side. --> using onSubmit() and onChange()


IF IT'S AN UNCONTROLLED COMPONENT:  we only define handleSubmit(). We're not interested in updating the component state with form data - we only grab the form data at the end, once the user hits submit, and send it straight into our thunk.
---> onSubmit()

 IF IT'S A CONTROLLED COMPONENT: we define handleSubmit() AND handleChange(). With handleChange(), we're updating our component state each time the form input is changed. Then, once our user hits submit, we can pass in our state to our thunk. We have the ability to CONTROL what is rendered in our user's form input.
 ---> onSubmit()
 ---> onChange()
 ---> value attribute

*/

import React from "react";
import { connect } from "react-redux";
import { addNewCat } from "../store/cats";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      catName: '',
      ownerName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  // 2. handleChange: ONLY used for controlled components.
  handleChange(event) {
  // We're using the same handleChange() for all inputs
  // We want to make sure our state reflect's what we've inputted into the form.
  /* Less smooth way of updating state:
    this.setState({
      catName: event.target.catName.value,
      ownerName: event.target.ownerName.value
    })
    */
   // Better way:
   this.setState({
     ...this.state,
     [event.target.name]: event.target.value.toUpperCase(),
   })
   console.log('State after handleChange(): ', this.state);
  }


  // 1. handleSubmit: used for controlled & uncontrolled components.
  async handleSubmit(event) {
    // Prevent the default refreshing behavior from happening (avoid page refresh)
    event.preventDefault();
    // SCENARIO 1: uncontrolled component. Obtain our input values from the form. Event's targets can obtain form values based on the name of the input.
    // const catName = event.target.catName.value;
    // const ownerName = event.target.ownerName.value;
    // console.log(event);
    // this.props.addCat({ catName, ownerName });
    // SCENARIO 2: controlled component. Since we're updating the state with handleChange(), we can add a new cat based on our state.
    console.log('State after handleSubmit', this.state);
    this.props.addCat(this.state);
  }
  render() {
    return (
      <div>
        <span>Fill out form to add a cat - real or imaginary.</span>
        {/* 1. handleSubmit() called when form is submitted*/}
        <form onSubmit={this.handleSubmit}>
          <div className="container-form-field">
            {/* htmlFor and name attributes must line up */}
            <label htmlFor="catName">Cat Name</label>
            <input type="text" name="catName" value ={this.state.catName} onChange={this.handleChange}/>
          </div>
          <div className="container-form-field">
            <label htmlFor="ownerName">Owner Name</label>
            <input type="text" name="ownerName" value={this.state.ownerName} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit!</button>
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
