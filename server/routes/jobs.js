const express = require('express')
const router = express.Router()
const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs')

router
  .route('/')
  .get(cors(corsOptions), getAllJobs)
  .post(cors(corsOptions), createJob)

// router.get('/', cors(corsOptions), getAllJobs)
// router.post('/', cors(corsOptions), createJob)

router
  .route('/:id')
  .get(cors(corsOptions), getJob)
  .patch(cors(corsOptions), updateJob)
  .delete(cors(corsOptions), deleteJob)

module.exports = router
