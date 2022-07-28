// Assuming we've required everything, etc


// GET /houses
router.get('/', async (req, res, next) => {
  try {
    const data = await client.query(`SELECT * FROM houses;`)
    res.send(data.rows)
  } catch(error) {
  }
})


