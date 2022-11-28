import axios from 'axios'
const localURL = 'http://localhost:5000/api/v1'
import { getLocalJob, getLocalJobs } from './localDataCalls'

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
    //return all jobs if no filter passed
    if (Boolean(!filter) || jobFilters === {}) {
      const response = await axios.get(localURL + '/jobs')
      return { jobs: response.data.jobs, isLocal: false }
    }

    //filtered jobs call
    const response = await axios.get(localURL + '/jobs', { params: jobFilters })
    return { jobs: response.data.jobs, isLocal: false }
  } catch (error) {
    const response = getLocalJobs(filter)
    return { jobs: response, isLocal: true }
  }
}

export const getJob = async (id) => {
  try {
    const response = await axios.get(localURL + '/jobs/' + id)
    console.log('getJob')
    console.log(response.data.job)
    return response.data.job
  } catch (error) {
    const job = getLocalJob(id)
    console.log(job)
    return job
  }
}
