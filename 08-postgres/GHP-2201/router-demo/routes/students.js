// This file will have all my routes beginning with /students

// E.g. GET /students, GET /students/:id, POST /students, PUT /students, DELETE /students/:id

//1. Require express and express router
const express = require('express');
const router = express.Router()
// the below line is the same as writing require('../db/index.js)
const client = require('../db')

// 2. Define routes ON our router object
// GET /students
router.get('/', async (req, res, next) => {
  try {
    const data = await client.query(`SELECT * FROM students;`)
    res.send(data.rows)
  } catch(error) {
  }
})

// POST /students
router.post('/', async (req, res, next) => {
  // You have access to req.body here!!! Because of your body parser middleware (line 8 in app.js) AND because you're inside a POST route.
  // Remember that req.body is only available inside POST and PUT routes.
  // console.log(req.body)
  await client.query('INSERT INTO students (name, house) VALUES [your req.body values]')
})

// 3. Export our router
module.exports = router;
