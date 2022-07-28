const express = require("express");
const router = express.Router();
const { Student, House } = require("../db");

// NOTE: ONCE VIEWS ARE CREATED, SEND HTML INSTEAD OF JSON
// GET /students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll()
    res.json(students)
  }
  catch (error) {
    next(error)
  }
})

// Eager loading allows us to get info via associations. 1st arg = pk, second is an include key plus the model to include.
router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: House
    })
    const studentWand = student.getWand()
    //res.json(student)
    res.send(studentWand)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router;
