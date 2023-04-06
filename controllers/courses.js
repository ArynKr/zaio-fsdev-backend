const Course = require('../models/Course')

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
    res.json(courses)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message })
  }
}
