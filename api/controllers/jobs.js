const Job = require('../models/Job')

const getAllJobs = async (req, res) => {
  try {
    /**
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
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getJob = async (req, res) => {
  try {
    const { id: jobID } = req.params
    const job = await Job.findOne({ _id: jobID })

    if (!job) {
      return res.status(404).jos({ msg: `No job with id : $JobID` })
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

const deleteJob = async (req, res) => {
  try {
    const { id: jobID } = req.params
    const job = await Job.findOneAndDelete({ _id: jobID, canPatch: true })

    if (!job) {
      return res.status(404).json({
        msg: `No job with id : ${jobID} or this entry cannot be deleted`,
      })
    }
    res.status(200).json({ job })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateJob = async (req, res) => {
  try {
    const { id: jobID } = req.params

    const job = await Job.findOneAndUpdate(
      { _id: jobID, canPatch: true },
      req.body,
      {
        new: true,
      }
    )

    // const jobs = await Job.updateMany(
    //   {},
    //   { canPatch: false },
    //   {
    //     new: true,
    //   }
    // )

    if (!job) {
      return res.status(404).json({
        msg: `No job with id : ${jobID} or this job cannot be altered `,
      })
    }

    res.status(200).json({ id: jobID, data: req.body })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
