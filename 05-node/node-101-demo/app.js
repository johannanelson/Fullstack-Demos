// 1. We're starting with an empty app.js. Let's start with console logging the module variables.

// a) __filename gives you the path including filename
// b) __dirname gives the path excluding filename
// c) Module Gives you metadata on the current file: path name, filename, but also gives "paths" or where it will look when you load another module into this module. Whenever you run the require command, those paths are the locations where node will look for the module you're trying to import.


console.log(__filename, __dirname, module);// Module variables
console.log(process, global, console) // Global variables
console.log(Object.keys(process))

// 2. Let's use the require keyword.
const moduleA = require("./module-intro/moduleA")
const moduleB = require("./module-intro/moduleB")

// 3. Also try out requiring a single property from object!

const moduleA = require("./module-intro/moduleA").month
const { month } = require("./module-intro/moduleA")

// Log entire modules, keys inside the module objects, typeof module, invoke moduleB
// console.log(moduleA)
// console.log(moduleB())
// console.log(moduleA.name)

/************ NPM INSTALL ************/
// 1. npm init: asks a bunch of questions to create a package that you'd eventually place in the node registry. Asks me for an entry point, which is the first file that's run that pulls things from other files. This creates a package.json file  - which is a file that represents a bunch of metadata about your package. We do this because we need a package.json file before installing anything else using npm install.
// 2. npm install chalk: lists it in the dependencies now. This is important because in the future, when you run npm install, it will install all the packages in the dependencies list. Also creates a new directory called node_modules, where all the code that require is stored.
// 3. require chalk: not using the filesystem, it's already loaded for me; it knows it's been installed because it's listed as a dependency.
const chalk = require("chalk")
//console.log(chalk.red(moduleA))
