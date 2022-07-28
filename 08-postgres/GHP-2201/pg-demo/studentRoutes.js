const express = require('express')
const app = express()

const client = require('./') // With index.js files, you only need to write './' when requiring and then node assumes that you mean an index

app.get('/', async (req, res, next) => {
  try {
    const data = await client.query(`SELECT * FROM students;`)
  } catch(error) {
  }
})

app.listen(3000)

