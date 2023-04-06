const CourseStructure = require('../models/CourseStructure');

exports.getCourseStructure = async (req, res) => {
  const { hoursPerDay } = req.query;
  try {
    const courseStructures = await CourseStructure.find({ hoursPerDay });
    res.json(courseStructures)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message })
  }
}