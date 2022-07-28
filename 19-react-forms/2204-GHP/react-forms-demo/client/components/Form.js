import React from "react";
import { connect } from "react-redux";
import { addNewCat } from "../store/cats";

/* REACT FORMS

TWO TYPES OF FORM COMPONENTS:
1. Uncontrolled components: changes to your form will happen using onSubmit()
2. Controlled components: changes to your form happen with onSubmit(), but also have changes to your state update the form. The form is literally CONTROLLED from the React side, using onChange().

if it's an uncontrolled component: we only define handleSubmit(). We're not interested in updating the component state with form data - we only grab the form data at the end, once the user hits submit and send it straight into our thunk.
----> onSubmit()

If it's a controlled component: we define handleSubmit() and handleChange(). With handleChange(), we're updating our component state each time the form input is changed. Then, once our user hits submit, we can pass in our state to our thunk. We will have the ability to CONTROL what is rendered in our user's form input.
----> onSubmit()
----> onChange()

*/


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      catName: 'enter cat name here',
      ownerName: 'enter owner name here'
    };
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  // 1. handleChange: only used for controlled components. Updating state to reflect what is currently in our form input. We also have an opportunity to revise that form input before updating state (eg. toUpperCase())
  handleChange(event) {
    // We're using the same handleChange() for all inputs
    // GOAL: We want to make sure that our state reflects what we've inputted into the form
    // this.setState({
    //   catName: event.target.catName.value,
    //   ownerName: event.target.ownerName.value
    // })
    console.log('original user input', event.target.value)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
    console.log('handleChange', this.state)
  }

  // 2. handleSubmit: used for both controlled and uncontrolled components.
  // event argument holds my form input
  handleSubmit(event) {
    // Prevent default page refresh from happening
    event.preventDefault()
    // Scenario 1: uncontrolled component. Obtain input values from the form and send those via your thunk.
    // const catName = event.target.catName.value
    // const ownerName = event.target.ownerName.value
    // this.props.addCat({catName, ownerName})

    // Scenario 2: controlled component. Since we're updating state with handleChange(), we can add a new cat using state.
    this.props.addCat(this.state);
  }

  render() {
    return (
      <div>
        <span>Fill out form to add a cat - real or imaginary.</span>
        {/* handleSubmit() called when form is submitted */}
        <form onSubmit = {this.handleSubmit} >
          <div className="container-form-field">
            <label htmlFor="catName">Cat Name</label>
            <input type="text" name="catName" onChange={this.handleChange} value={this.state.catName}/>
          </div>
          <div className="container-form-field">
            <label htmlFor="ownerName">Owner Name</label>
            <input type="text" name="ownerName" onChange={this.handleChange} value={this.state.ownerName}/>
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
