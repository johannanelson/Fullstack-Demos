// COMMON-JS MODULE IMPORTS
// Option 1: Require entire module.exports object
const operations = require('./operations');
console.log(operations.add(1, 2));

// Option 2: destructure module.exports and grab whatever I want
const { add, subtract } = require('./operations')
console.log(subtract(6, 3));
