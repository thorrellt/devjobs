const express = require('express')
const app = express()
const jobs = require('./routes/jobs')
const port = 5000

// middleware
app.use(express.json())

// routes
app.use('/api/v1/jobs', jobs)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
