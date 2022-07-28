const express = require('express')
const app = express()

// By default, when Node is looking in a directory, it is looking for index.js. So we actually don't need to do "./index", you can jsut say "./"
// const client = require('./index')
const client = require('./')

// Async because we're using client.query
app.get('/', async (req, res, next) => {
  try {
    const data = await client.query(`SELECT * FROM students;`)
    console.log(data.rows)
    // res.send by default expects html. Instead of res.send, let's do res.json
    res.json(data.rows)
  } catch (error) {
    // We call the next middleware or whatever is in the chain, and pass in the error.
    next(error)
  }
})

app.get('/students/:id', async (req, res, next) => {
  try {
    console.log('These are the req.params', req.params)
    const singleData = await client.query
    // Placeholders (using $), allows us to escape possible sQL injections; sets a placeholder, then sets up an array where the indices correspond to the placeholders
    (`SELECT * FROM students WHERE id = $1;`, [req.params.id])
    res.json(singleData.rows)
  } catch (error) {
    next(error)
  }
  })

app.listen(1330, () => console.log('Express app listening on port 1330'))

