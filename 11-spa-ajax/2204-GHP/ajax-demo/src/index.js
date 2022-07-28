// WEBPACK: 4 MAIN STEPS
/*
1. npm install --save-dev webpack webpack-cli
2. You can either use the default config for webpack OR create your own by creating a file named webpack.config.js
*/

import axios from "axios";


const fetchButton = document.querySelector("#fetch-button");
const placeholder = document.querySelector("#placeholder");

fetchButton.addEventListener("click", () => {
  fetchHandler();
})

// When I click 'fetch data', I'm going to make an AJAX request for my data. then update my DOM with the data I receive.
const fetchHandler = async function () {
  // Two ways to fetch your data:
  // 1. fetch()
  // 2. axios
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  console.log("response", response);
  placeholder.innerText = JSON.stringify(response.data);
}
