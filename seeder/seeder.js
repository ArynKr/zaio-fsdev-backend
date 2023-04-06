const fs = require('fs')
const mongoose = require('mongoose')
const { config } = require('dotenv')
const connectDB = require('../db/connectDB')
const course = require('./course')
const structureCourse = require('./structureCourse')

/* generate course structures for 2, 4 and 6 hours */
const courseStructures = [
  structureCourse(course, 2),
  structureCourse(course, 4),
  structureCourse(course, 6),
]

/* load environment variables */
config({ path: './.env' })

/* load models */
const Course = require('../models/Course')
const CourseStructure = require('../models/CourseStructure')

/* connect to DB */
connectDB()

/* import data into DB */
const importData = async () => {
  try {
    await Course.create(course)
    await CourseStructure.create(courseStructures)
    console.log('Data Imported...')
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

/* delete data from DB */
const deleteData = async () => {
  try {
    await Course.deleteMany()
    console.log('Data Destroyed...')
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
