const express = require("express")
const app = express()
const morgan = require("morgan")
const studentRouter = require("./routes/studentRoutes")
const houseRouter = require("./routes/houseRoutes")
const { db } = require("./db")
const PORT = 8080

const setup = async () => {
  try {
    // logging middleware
    app.use(morgan("dev"))

    // route files
    app.use("/students", studentRouter)
    app.use("/houses", houseRouter)
    app.get("/", function (req, res) {
      res.redirect("/students/")
    })
    // 1. Custom 404 response
    app.use((req, res) => {
      res.status(404).send('No magic here, check your URL!')
    })
    // 2. Custom general error handler
    // Error handling middleware: (err, req, res, next => {})
    // Regular middleware: (req, res => {})
    app.use((err, req, res, next) => {
      console.log('Error in error handling middleware', err)
      res.status(err.status).send(err.message)
    })

    // syncing database
    await db.sync()
    // listening to the port
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

setup();
