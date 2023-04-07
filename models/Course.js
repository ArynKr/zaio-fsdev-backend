const mongoose = require('mongoose');
const CourseStructure = require('./CourseStructure');

const CourseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Please add an id'],
  },
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a course title'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Please add a description'],
  },
  type: {
    type: String,
    enum: ['video', 'coursemcq', 'codingchallenge'],
    required: [true, 'Please add a type'],
  },
  duration: {
    type: Number,
    required: [true, 'Please add a duration'],
  },
});

module.exports = mongoose.model('Course', CourseSchema);