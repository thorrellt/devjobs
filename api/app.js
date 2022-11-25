require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const jobs = require('./routes/jobs')
const port = 5000
const connectDB = require('./db/connect')

const notFound = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

// routes
app.use('/api/v1/jobs', jobs)

app.use(notFound)
app.use(errorMiddleware)

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
