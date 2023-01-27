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
  console.log(jobFilters)

  try {
    //return all jobs if no filter passed
    if (Boolean(!filter) || jobFilters === {}) {
      const response = await axios.get(currURL + '/jobs')
      console.log(response.data)
      return { jobs: response.data.jobs, isLocal: false }
    }

    //filtered jobs call
    const response = await axios.get(currURL + '/jobs', {
      params: jobFilters,
    })
    console.log(response.data.jobs)
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
    return error.message
  }
}

export const postJob = async (job) => {
  const fullJob = generateJob(job)
  const token = localStorage.getItem('token')
  try {
    const response = await axios({
      method: 'post',
      url: currURL + '/jobs/',
      data: fullJob,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    return error.message
  }
}

/************
  USER CALLS 
 ************/

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

export const loginUser = async (user) => {
  try {
    const res = await axios.post(currURL + '/user/login', user)
    return res
  } catch (err) {
    return err
  }
}

export const isActiveAuth = async (user) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.get(currURL + '/user/activeAuth', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    return res.request
  } catch (err) {
    return err.response
  }
}

/*****************
  FAVORITES CALLS 
 *****************/

export const addFavorite = async (jobId) => {
  const token = localStorage.getItem('token')

  try {
    const res = await axios({
      method: 'patch',
      url: currURL + '/user/add_favorite/' + jobId,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    console.log('fav call axios res:: ' + res.status)

    if (res.status === 201) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

export const deleteFavorite = async (jobId) => {
  const token = localStorage.getItem('token')
  try {
    const res = await axios({
      method: 'patch',
      url: currURL + '/user/delete_favorite/' + jobId,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    if (res.status === 201) {
      return true
    }
    return 'try fail'
  } catch (error) {
    return error
  }
}
