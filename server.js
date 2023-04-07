const express = require('express')
const { config } = require('dotenv')
const cors = require('cors');
const mongoose = require('mongoose')
const connectDB = require('./db/connectDB')

/* load environment variables */
config({ path: './.env' })

/* connect to DB */
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

/* middleware body parser */
app.use(express.json())

/* allow access using  cors */
app.use(cors())

/* routes */
app.get('/api/health-check', (_req, res) => res.send('Health OK'))
app.use('/api/courses', require('./routes/courses'))
app.use('/api/courseStructures', require('./routes/courseStructures'))

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

/* handled unhandled rejection/error (this error might happen while connecting to DB, etc) */
process.on('unhandledRejection', err => {
  console.log(`Error: ${err.message}\n‼closing the server‼`)
  server.close(() => process.exit(1))
})
