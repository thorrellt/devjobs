const express = require('express')
const router = express.Router()

const { getAllJobs, getJob } = require('../controllers/jobs')

router.route('/').get(getAllJobs)
router.route('/:id').get(getJob)

module.exports = router
