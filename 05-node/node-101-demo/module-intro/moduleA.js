// 1. module.exports stores a single function

module.exports = () => "I am coming from the moduleA.js file."
// When I load module A to a different file, I'm making this function available to it. And all that happens when I run this function is return this string.

// 2. module exports store multiple things

module.exports = {
  demoFunction: () => {
    return "I am coming from the moduleA.js file."
  },
  month: "october",
}

// 3. Refactor to previously define functions and variable then export

const demoFunction = () => {
  return "I am coming from the moduleA.js file."
}

const month = "october";

module.exports = {
  demoFunction,
  month
};


