// 1. npm init -y
// 2. npm install axios and require axios. axios allows us to use functions that return promises
// 3. define function getPokemon, asynchrnous, and for now just return an object

// *** The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned;

// 4. Any guesses as to what we'll see when we console log? It's notjust the object; it's th epromise
// 5. Rewrite the function to return a promise after 1 second. Now when we run it, the promise is pending.
// 6. If we don't want to see pending, we could use await in our console.log. but check out our linter - saying that we need to be inside an async function
// 7. Add console log for befor epromise fulfilled

const axios = require("axios");

// const getPokemon = async () => { // STEP 4
//   return {
//     pokemonName: 'Bulbasar',
//     id: 1,
//   };
// }

const getPokemon = async () => { // STEP 5
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        pokemonName: 'Bulbasar',
        id: 1,
      })
    }, 1000)
  });
};

// console.log(await getPokemon()); // sTEP 4

async function main() {
  const pokemonPromise = getPokemon(); // STEP 6
  console.log("Before promise fulfilled", pokemonPromise) // STEP 7
  console.log(await pokemonPromise); // STEP 6
}

getPokemon()

