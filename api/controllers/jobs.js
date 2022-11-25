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
  if ('contract' in req.body) filters.contract = req.body.contract
  if ('location' in req.body)
    filters.location = new RegExp(req.body.location, 'i')
  if ('position' in req.body)
    filters.position = new RegExp(req.body.position, 'i')

  const jobs = await Job.find(filters)
  res.status(200).json({ jobs })
}

const getJob = async (req, res) => {
  const { id: jobID } = req.params
  const job = await Job.findOne({ _id: jobID })

  if (!job) {
    throw new CustomAPIError(`No task with id : ${jobID}`, 404)
  }
  res.status(200).json({ job })
}

const createJob = async (req, res) => {
  const job = await Job.create(req.body)
  res.status(201).json({ job })
  // res.json(req.body)
}

const deleteJob = async (req, res) => {
  const { id: jobID } = req.params
  const job = await Job.findOneAndDelete({ _id: jobID, canPatch: true })

  if (!job) {
    throw new CustomAPIError(
      `No task with id : ${jobID} or this entry cannot be deleted`,
      404
    )
  }

  res.status(200).json({ job })
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
