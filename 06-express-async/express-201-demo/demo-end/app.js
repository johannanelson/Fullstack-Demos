/*
1. [ Ngrok step - can skip] I'm going to show you all ngrok, which is a developer tool that will allow us to write a server that anyone can access.
So I'm going to run a server that you all can interact with. [TYPE ngrok http 3000]. This creates a temporary domain name for development purposes. You'll get a 502 Bad Gateway because you're requesting a server that doesn't exist. Not an essential developer tool, but sort of fun for lecture purposes, or even pair programming.
2. Let's make a new route using parameters. Let's first define an array of ingredients. Now let's define another get route for ingredients
3. Show this request in dev tools network tab; click on the request to show headers and response
4. let's make a new express route where each of these ingredients can be referred to be an id
5. it's not super ideal that our ingredients are just stored in an array here; in the future, we'll think about how to use a database instead for this purpose
6. you could also store your req.params as a separate variable, not necessary though
7. Let's add a few images - let's add a public directory; public is a common name for this directory, but really you can name it anything
8. search on google for images and save to desktop
9. instead of sending raw data, now we'll send html; except the browser can't find the image because we haven't set up the stsatic file serving middleware yet.
10. also check out how you can access any public assets just by typin in the file path after / (lhttp://localhost:3000/apples.jpeg)
*/

const express = require("express"); // STEP 1
const morgan = require("morgan");
const path = require("path");

const app = express(); // STEP 1

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<h1>Hello this is my first Express page!</h1>")
})

const ingredients = [
  'apples', // 1
  'rice', // 2
  'butter', // 3
  'chicken wings'
];

app.get("/ingredients", (req, res, next) => {
  res.send(ingredients);
});

app.get("/ingredients/:id", (req, res, next) => {
  const index = req.params.id - 1;
  // res.send(ingredients[index]); STEP 6
  const ingredientName = ingredients[index];
  res.send(`
  <h1>${ingredientName}</h1>
  <img src="/${ingredientNamec}.jpeg">`)
});

app.listen(3000); // STEP 1
