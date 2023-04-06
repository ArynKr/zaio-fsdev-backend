const CourseStructure = require('../models/CourseStructure');

exports.getCourseStructure = async (req, res) => {
  const { hoursPerDay } = req.query;
  try {
    const courseStructures = await CourseStructure.find({ hoursPerDay });
    if (courseStructures.length === 0) {
      res.status(404).json({ message: 'Course structure not found' });
    }
    res.json(courseStructures[0])
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message })
  }
}