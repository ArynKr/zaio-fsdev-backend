const mongoose = require('mongoose');

const CourseStructureSchema = new mongoose.Schema({
  hoursPerDay: {
    type: Number,
  },
  structure: [
    {
      day: {
        type: Number,
      },
      noOfLessons: {
        type: Number,
      },
    }
  ]
});

module.exports = mongoose.model('CourseStructure', CourseStructureSchema);