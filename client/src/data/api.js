import axios from 'axios'
import { getLocalJob, getLocalJobs } from './localDataCalls'
import {
  generateJob,
  generateTime,
  generateItems,
  formatFilter,
} from './helpers'

const localURL = 'http://localhost:5000/api/v1'
const prodURL = 'https://devjobs-api-08.herokuapp.com/api/v1'
const currURL = localURL

/***********
  JOB CALLS 
 ***********/
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

export const postJob = async (job) => {
  const fullJob = generateJob(job)
  try {
    const response = await axios.post(currURL + '/jobs/', fullJob)
    console.log(response)
    return response
  } catch (error) {
    return error.message
  }
}

/***********
  USER CALLS 
 ***********/

export const postUser = async (user) => {
  try {
    const res = await axios.post(currURL + '/user/signup', user)
    if (res.request.status === 409) {
      throw res
    }
    return res.request.status
  } catch (err) {
    return err.response.status
  }
}

// postUser({ name: 'John Doe', password: 'password' })
