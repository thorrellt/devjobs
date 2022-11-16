import data from '../data.json'

export const fetchJob = (id) => {
  const job = data.filter((job) => {
    return String(job.id) == String(id)
  })
  return job[0]
}
