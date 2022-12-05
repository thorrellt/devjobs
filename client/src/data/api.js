import axios from 'axios'
const localURL = 'http://localhost:5000/api/v1'
const prodURL = 'https://devjobs-api-08.herokuapp.com/api/v1'
const currURL = prodURL
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
      const response = await axios.get(currURL + '/jobs')
      return { jobs: response.data.jobs, isLocal: false }
    }

    //filtered jobs call
    const response = await axios.get(currURL + '/jobs', {
      params: jobFilters,
    })
    return { jobs: response.data.jobs, isLocal: false }
  } catch (error) {
    const response = getLocalJobs(filter)

    return { jobs: response, isLocal: true }
  }
}

export const getJob = async (id) => {
  try {
    try {
      const response = await axios.get(currURL + '/jobs/' + id)
      return response.data.job
    } catch (error) {
      const job = getLocalJob(id)
      if (job.length === 0) {
        throw new Error('no record found matching this ID')
      }
      return job
    }
  } catch (error) {
    // console.log('error thrown')
    // console.log(error.message)
    return error.message
  }
}
