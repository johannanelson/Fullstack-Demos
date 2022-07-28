const express = require('express')
const app = express()
const morgan = require('morgan')

// By default, when Node is looking in a directory, it is looking for index.js. So we actually don't need to do "./index", you can jsut say "./"
// const client = require('./index')
// const client = require('./db')

const studentRoutes = require('./routes/studentRoutes')

app.use('/students', studentRoutes)
app.use(morgan('dev'))
// if you're trying to get to /students, then use studentRoutes
//localhost:1330/students

app.listen(1330, () => console.log('Express app listening on port 1330'))

