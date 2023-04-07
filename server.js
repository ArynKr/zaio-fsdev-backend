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

/* enable CORS */
const whitelist = ['https://zaio-challenge.netlify.app']
const corsOptions = {
  origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  },
}
if (process.env.NODE_ENV === 'development') {
  app.use(cors())
} else {
  app.use(cors(corsOptions))
}

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
