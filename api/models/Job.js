const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  company: String,
  logo: String,
  logoBackground: String,
  position: {
    type: String,
    enum: ['Part Time', 'Full Time', 'Freelance'],
  },
  postedAt: String,
  contract: String,
  location: String,
  roleDescription: String,
  requirements: {
    company: String,
    items: [String],
  },
  role: {
    company: String,
    items: [String],
  },
})

module.exports = mongoose.model('Job', JobSchema)
