const express = require('express')
const app = express()
const jobs = require('./routes/jobs')
const port = 5000
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

// middleware
app.use(express.json())

// routes
app.use('/api/v1/jobs', jobs)
app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
