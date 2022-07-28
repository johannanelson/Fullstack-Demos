const express = require("express");
const morgan = require("morgan");
const path = require("path")

const ingredients = [
  'egg',
  'cocoa',
  'garlic',
  'carrots',
  'butter',
  'rice',
  'mango',
  'cheese',
  'brogle',
  'kombucha'
];

const app = express();

// Logging middleware
app.use(morgan("dev"))

// Static middleware
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.send("<h1>Hello!!!</h1>")
})

app.get("/ingredients", (req, res) => {
  res.send(ingredients)
})

app.get("/ingredients/:id", (req, res) => {
  console.log('req.params', req.params)
  const ingredientName = ingredients[req.params.id-1];
  res.send(`<h1>${ingredientName}</h1>
  <img src="/${ingredientName}.jpeg">`)
});

app.listen(3000);
