import data from '../data.json'

export const fetchJob = (id) => {
  const job = data.filter((job) => {
    return String(job.id) === String(id)
  })
  return job[0]
}

export const getJob = (id) => {
  const job = data.filter((job) => {
    return String(job.id) === String(id)
  })
  return job[0]
}

export const getAllJobs = (filters) => {
  if (Boolean(!filters)) return data

  const { location, position, fulltime } = filters
  if (position === '' && location === '' && !fulltime) {
    return data
  }

  const job = data.filter((job) => {
    let positionMatch = true
    let locationMatch = true
    let fulltimeMatch = true

    if (Boolean(position) && !(position === '')) {
      positionMatch = String(job.position)
        .toLowerCase()
        .includes(position.toLowerCase())
    }
    if (Boolean(location) && !(location === '')) {
      locationMatch = String(job.location)
        .toLowerCase()
        .includes(location.toLowerCase())
    }
    if (Boolean(fulltime)) {
      fulltimeMatch = String(job.contract).toLowerCase().includes('full')
    }

    return positionMatch && locationMatch && fulltimeMatch
  })

  return job
}
