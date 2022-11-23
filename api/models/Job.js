const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'must include company name'],
    trim: true,
  },
  logo: {
    type: String,
    required: [true, 'must include company name'],
    trim: true,
  },
  logoBackground: {
    type: String,
    required: [true, 'must include company name'],
    trim: true,
  },
  contract: {
    type: String,
    enum: ['Part Time', 'Full Time', 'Freelance'],
  },
  postedAt: {
    type: String,
    required: [true, 'must include when job was posted'],
    trim: true,
  },
  position: {
    type: String,
    required: [true, 'must include position'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'must include location'],
    trim: true,
  },
  roleDescription: {
    type: String,
    required: [true, 'must include role description'],
    trim: true,
  },
  requirements: {
    content: {
      type: String,
      required: [true, 'must include requirements content name'],
      trim: true,
    },
    items: [String],
  },
  role: {
    content: {
      type: String,
      required: [true, 'must include role content'],
      trim: true,
    },
    items: [String],
  },
})

module.exports = mongoose.model('Job', JobSchema)
