// ES6 exporting

// Option 1: named export
// KEEP IN MIND: you have to import your named exports with the SAME NAME that you
// export it as.
export function add(num1, num2) {
  return num1 + num2;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Option 2: default export
// KEEP IN MIND: you can only have ONE default export; but you can certainly
// set your default export to be an object with multiple functions; or a single func!
export default {
  multiply,
  divide
};
