const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

const actorRouter = require("./routes/actorRoutes");
const movieRouter = require("./routes/movieRoutes")
const { Movie } = require("./db")

// And the middleware chain begins...
// -------> 1. Morgan: logging middleware
app.use(morgan('dev'));

// -------> 2. Static middleware: for serving up static files (CSS stylesheets, HTML files, jpg files, etc)
// For a request such as GET /image.jpg
app.use(express.static(path.join(__dirname, "./public")));

// -------> 3. Body parser middleware: for parsing through form input (this comes up with POST and PUT routes). Also exposes req.body to us
app.use(express.urlencoded({ extended: false }));

// --------> 4. JSON parser middleware: for parsing through incoming JSON objects.
app.use(express.json());

// Snag any request starting with 'localhost:3000/actors'
// app.use("/actors", actorRouter);
// // Snag any request starting with 'localhost:3000/movies'
// app.use("/movies", movieRouter)

// For the request GET 'localhost:3000/'
app.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.getEverything();
    res.send(movies);
  }catch(err) {
    next(err)
  }
})

// FOR CATCHING 404 ERROR
app.use((req, res, next) => {
  res.status(404).send("No movies or actors here, check your URL.")
})

// My custom error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
})

module.exports = app;

