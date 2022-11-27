import axios from 'axios'
import staticData from '../data.json'
const localURL = 'http://localhost:5000/api/v1'
const data = staticData

const formatFilter = (filter) => {
  if (Boolean(!filter)) {
    return {}
  }

  const { location, position, fulltime } = filter
  let retFilter = {}

  if ('location' in filter && location !== '') {
    retFilter.location = location
  }
  if ('position' in filter && position !== '') {
    retFilter.position = position
  }
  if (Boolean(fulltime)) {
    retFilter.contract = 'Full Time'
  }

  return retFilter
}

export const getJobs = async (filter) => {
  let jobFilters = formatFilter(filter)

  try {
    if (Boolean(!filter) || jobFilters === {}) {
      const response = await axios.get(localURL + '/jobs')
      return response.data.jobs
    }
    console.log(jobFilters)
    const response = await axios.get(localURL + '/jobs', { params: jobFilters })
    return response.data.jobs
  } catch (error) {
    return []
  }
}

export const fetchJob = (id) => {
  const job = data.filter((job) => {
    return String(job.id) === String(id)
  })
  return job[0]
}

export const getJob = async (id) => {
  try {
    const response = await axios.get(localURL + '/jobs/' + id)
    console.log('getJob')
    console.log(response.data.job)
    return response.data.job
  } catch (error) {
    console.log(error)
    return {}
  }
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
