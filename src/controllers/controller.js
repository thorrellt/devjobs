import axios from 'axios'
import staticData from '../data.json'
const localURL = 'http://localhost:5000/api/v1'
const data = staticData

export async function getJobs() {
  try {
    console.log('hello')
    const response = await axios.get(localURL + '/jobs')
    console.log('response  ', response)
    return response.data
  } catch (error) {
    return []
  }
}

const response = getJobs()
console.log(response)
// export async function createUser(data) {
//   const response = await fetch(`/api/user`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ user: data }),
//   })
//   return await response.json()
// }

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
