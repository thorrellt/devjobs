import axios from 'axios'
import { LoremIpsum } from 'lorem-ipsum'
const localURL = 'http://localhost:5000/api/v1'
const prodURL = 'https://devjobs-api-08.herokuapp.com/api/v1'
const currURL = prodURL
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 3,
  },
  wordsPerSentence: {
    max: 12,
    min: 7,
  },
})

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

const generateItem = () => {
  const numOfItems = Math.floor(Math.random() * 5) + 2
  var items = []
  for (let i = 0; i < numOfItems; i++) {
    items[i] = lorem.generateSentences(1)
  }
  return items
}

// var items = generateItem()
// console.log(items)

const generateJob = (jobData) => {
  var job = {
    company: jobData.company,
    logo: 'creative.svg',
    logoBackground: 'hsl(295, 55%, 21%)',
    position: jobData.position,
    postedAt: '1d ago',
    contract: jobData.contract,
    location: jobData.location,
    requirements: {
      content: lorem.generateParagraphs(1),
      items: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '5+ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '3+ years Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
    },
    role: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet dictum sit amet justo donec. Tempus egestas sed sed risus pretium quam vulputate.',
      items: [
        'Lead, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Implement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Oversee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Provide Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .',
        'Develop ',
      ],
    },
    roleDescription:
      'Creative is seeking a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies.',
  }

  console.log(job)
}
const validJob = {
  company: 'Rando Inc',
  contract: 'Full Time',
  position: 'Full Stack Dev',
  location: 'France',
}
generateJob(validJob)

export const postJob = async (id) => {
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
