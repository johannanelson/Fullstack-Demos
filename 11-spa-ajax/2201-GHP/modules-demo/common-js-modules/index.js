// COMMON JS IMPORTING
// Option 1: Require entire module.exports object
const operations = require('./operations')
operations.add(1, 2)

// Option 2: Destructure module.exports and grab whatever I want
const { add, subtract } = require('./operations')
subtract(6, 3)
