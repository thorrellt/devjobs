require('dotenv').config()
require('express-async-errors')

// Extra Security Packages
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
const cors = require('cors')

const express = require('express')
const app = express()
const jobs = require('./routes/jobs')
const connectDB = require('./db/connect')

const notFound = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
)
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

// routes
app.use('/api/v1/jobs', jobs)

app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

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
