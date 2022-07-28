import React from 'react';

// functional component
const Topping = (props) => {
  // PROPS: cannot be updated through any specific method. Passed from parent components to child components. 
  console.log('Props', props)
  return (
    <li onClick = {() => props.updateSelectedTopping(props.type)} > {props.type}</li>
  )
}

export default Topping;
