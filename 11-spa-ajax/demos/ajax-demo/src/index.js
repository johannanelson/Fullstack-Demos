// Live code entire index.js
import axios from "axios"

// Start with just fetchButton
const placeholder = document.querySelector("#placeholder")
const fetchButton = document.querySelector("#fetch-button")

fetchButton.addEventListener("click", () => {
  fetchHandler()})

const fetchHandler = async function () {
  // 1. fetch
 /*
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await response.json()
  placeholder.innerText = JSON.stringify(data);
  */

  // // 2. axios
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
  placeholder.innerText = JSON.stringify(response.data);
}
