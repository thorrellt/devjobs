const getAllJobs = (req, res) => {
  res.send('get all jobs')
}

const getJob = (req, res) => {
  const { id } = req.params
  res.send(`get job id:${id}`)
}

module.exports = {
  getAllJobs,
  getJob,
}
