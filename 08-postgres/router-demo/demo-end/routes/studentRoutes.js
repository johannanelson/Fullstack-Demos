const express = require('express')
const router = express.Router()
const client = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const data = await client.query(`SELECT * FROM students;`)
    console.log(data.rows)
    res.json(data.rows)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    console.log('These are the req.params', req.params)
    const singleData = await client.query
    (`SELECT * FROM students WHERE id = $1;`, [req.params.id])
    res.json(singleData.rows)
  } catch (error) {
    next(error)
  }
  })

module.exports = router
