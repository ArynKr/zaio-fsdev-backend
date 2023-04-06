const fs = require('fs');
const mongoose = require('mongoose');
const {config} = require('dotenv');
const connectDB = require('../db/connectDB');
const course = require('./course');

/* load environment variables */
config({ path: './.env' });

/* load models */
const Course = require('../models/Course');

/* connect to DB */
connectDB()

/* import data into DB */
const importData = async () => {
  try {
    await Course.create(course);
    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

/* delete data from DB */
const deleteData = async () => {
  try {
    await Course.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}