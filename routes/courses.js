const { Router } = require('express')
const Course = require('../models/Course')

const router = Router()

router.route('/').get(async (req, res) => {
  try {
    const courses = await Course.find()
    res.json(courses)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
