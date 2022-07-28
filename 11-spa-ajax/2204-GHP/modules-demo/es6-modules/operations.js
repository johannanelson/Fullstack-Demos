// ES6 MODULE EXPORTS

// Named export
export function add(num1, num2) {
  return num1 + num2;
}

// Named export
export function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Another way to write named exports
// export add;
// export subtract;

// Default export. KEEP IN MIND: you can only have ONE default export, but you can certainly
// set your default export to be an object of multiple functions if you want to
export default {
  multiply,
  divide
}
