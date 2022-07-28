const moduleA = require('./moduleA')

console.log(moduleA)
module.exports = () => "I am coming from moduleB!"
