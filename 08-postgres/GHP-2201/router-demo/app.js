const express = require('express')
const app = express()
const studentRoutes = require('./routes/students.js')
const houseRoutes = require('./routes/houses.js')
const client = require('./db') // With index.js files, you only need to write './' when requiring and then node assumes that you mean an index

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

// Option 1: If I get ANY incoming request, I want to reroute the request to studentRoutes
// app.use(studentRoutes)
// Option 2: If I get ANY incoming request STARTING with /students, reroute here:
app.use('/students', studentRoutes);
app.use('/houses', houseRoutes);
// app.use('/pets', petRoutes);
// app.use('/patronuses', patRoutes);


app.listen(3000, () => console.log('Express app listening on port 3000'))

