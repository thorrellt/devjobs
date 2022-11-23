const Job = require('../models/Job')

const getAllJobs = (req, res) => {
  res.send('get all jobs')
}

const getJob = (req, res) => {
  const { id } = req.params
  res.send(`get job id:${id}`)
}

const createJob = async (req, res) => {
  const job = await Job.create(req.body)
  res.status(201).json({ job })
  // res.json(req.body)
}

const updateJob = async (req, res) => {
  const { id } = req.params
  const body = JSON.stringify(req.body)
  res.send(`update id:${id} json is ${body}`)
}

const deleteJob = async (req, res) => {
  const { id } = req.params
  res.send(`delete job id:${id}`)
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
