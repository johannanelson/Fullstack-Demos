let start = new Date;
console.log("Start: ", start)
setTimeout(function() {
  let end = new Date;
  console.log("End: ", end)
  console.log('Time elapsed: ', end - start)
}, 500)

while (new Date - start < 1000) {

};
