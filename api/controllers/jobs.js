const getAllJobs = (req, res) => {
  res.send('<h1>get all jobs</h1>')
}

const getJob = (req, res) => {
  const { id } = req.params
  res.send(`<h1>get job id:${id}</h1>`)
}

module.exports = {
  getAllJobs,
  getJob,
}
