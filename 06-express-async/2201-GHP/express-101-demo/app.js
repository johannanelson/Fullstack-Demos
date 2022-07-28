// 1. Import express module
const express = require("express")

// 2. Define server object
const app = express()

// Route for localhost:3000/
app.get("/", (req, res) => {
  res.send("<h1>Hello! This is my first Express page!</h1>")
})

// Route for localhost:3000/users
// app.get("/users", (req, res) => {})

// 3. Listen on port 3000 - IOW be ready for any incoming client requests
app.listen(3000)
