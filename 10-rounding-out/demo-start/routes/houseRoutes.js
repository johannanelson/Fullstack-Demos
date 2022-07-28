const express = require("express");
const router = express.Router();
const { House } = require("../db");

// GET /houses
router.get("/", async (req, res, next) => {
  try {
    const houses = await House.getEverything()
    res.json(houses)
  }
  catch (error) {
    next(error)
  }
})

router.get("/:houseId", async (req, res, next) => {
  try {
    const house = await House.findByPk(req.params.houseId)
    if (house === null) {
      const error = new Error();
      error.message = `NO HOUSE ASSOCIATED WITH ${req.params.houseId}`
      error.status = 404;
      throw error;
    }
    else {
      res.json(house)
    }

  }
  catch (error) {
    next(error)
  }
})

module.exports = router;
