const Job = require('../models/Job')
const { createCustomError, CustomAPIError } = require('../errors/custom-error')

const getAllJobs = async (req, res) => {
  /**
   * SEARCH FILTER SETUP
   * had to format filters to be less strict or
   * else only exact matches would return
   */
  console.log('get all jobs pinged')

  const filters = {}
  if ('userId' in req.query) filters.userId = req.query.userId
  if ('contract' in req.query) filters.contract = req.query.contract
  if ('location' in req.query)
    filters.location = new RegExp(req.query.location, 'i')
  if ('position' in req.query)
    filters.position = new RegExp(req.query.position, 'i')
  console.log(filters)
  const jobs = await Job.find(filters)
  console.log(jobs.length)
  res.status(200).json({ jobs })
}

const getJob = async (req, res) => {
  console.log('get Job pinged')
  console.log(req.params)
  const { id: jobID } = req.params
  const job = await Job.findOne({ _id: jobID })

  if (!job) {
    throw new CustomAPIError(`No task with id : ${jobID}`, 404)
  }
  res.status(200).json({ job })
}

const createJob = async (req, res) => {
  const jobData = req.body
  jobData.userId = req.userData.userId
  console.log(jobData)
  const job = await Job.create(jobData)
  res.status(201).json({ job })
  // res.json(req.body)
}

const deleteJob = async (req, res) => {
  const deleteRequestParams = {
    _id: req.params.id,
    userId: req.userData.userId,
    canPatch: true,
  }

  const job = await Job.findOneAndDelete(deleteRequestParams)

  if (!job) {
    res.status(404).json({
      error: `No task with id : ${req.params.id} or this entry cannot be deleted`,
    })
  } else {
    res.status(200).json({ job })
  }
}

const updateJob = async (req, res) => {
  const { id: jobID } = req.params

  const job = await Job.findOneAndUpdate(
    { _id: jobID, canPatch: true },
    req.body,
    { new: true, runValidators: true }
  )

  if (!job) {
    throw new CustomAPIError(
      `No task with id : ${jobID} or this job cannot be altered`,
      404
    )
  }

  res.status(200).json({ id: jobID, data: req.body })
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
