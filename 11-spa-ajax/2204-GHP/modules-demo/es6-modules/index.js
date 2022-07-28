// ES6 MODULE IMPORTS

// Option 1: default import
import operations from './operations.js'

// Option 2: named imports
import {add, subtract} from './operations.js'

// Option 3: you can do it all in one line!
// import operations, {add, subtract} from './operations.js'

add(1, 2);
operations.multiply(3, 6);
