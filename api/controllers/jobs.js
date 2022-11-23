const Job = require('../models/Job')

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({})
    res.status(200).json({ jobs })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getJob = async (req, res) => {
  try {
    const { id: jobID } = req.params
    const job = await Job.findOne({ _id: jobID })

    if (!job) {
      return res.status(404).jos({ msg: `No take with id : $JobID` })
    }
    res.status(200).json({ job })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body)
    res.status(201).json({ job })
    // res.json(req.body)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
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
