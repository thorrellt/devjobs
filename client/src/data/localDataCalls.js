import data from './data.json'

export const getLocalJobs = (filters) => {
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

export const getLocalJob = (id) => {
  const job = data.filter((job) => {
    return String(job._id) === String(id)
  })
  if (!Boolean(job[0])) {
    return []
  }
  return job[0]
}
