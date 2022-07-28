// 1. setTimeout
// console.log('It is')
// setTimeout(function(){
//   console.log('Halloween');
// }, 3000);
// console.log('almost');

// 2. setTimeout with while loop
var start = new Date;
setTimeout(function(){
  var end = new Date;
  console.log('Time elapsed:', end - start, 'ms');
}, 500);

// while (new Date - start < 1000) {
// };

// 3. Loupe example
console.log("Hello!");

setTimeout(function timeout() {
  console.log("Click the button!");
}, 5000);

console.log("How are you today?");
