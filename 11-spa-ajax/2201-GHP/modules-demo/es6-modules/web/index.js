// ES6 importing
// *** KEEP IN MIND: with ES6 importing, the .js extension is REQUIRED.
// But with CommonJS, leaving .js out won't cause errors.

// Option 1: default import
import operations from './operations.js'

// Option 2: named imports
import {add, subtract} from './operations.js'

// You can do it all in one line too!
import operations, {add, subtract} from './operations.js'

add(1, 2);
operations.multiply(3, 4);
