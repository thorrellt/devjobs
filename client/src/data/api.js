import axios from 'axios'
import { LoremIpsum } from 'lorem-ipsum'
const localURL = 'http://localhost:5000/api/v1'
const prodURL = 'https://devjobs-api-08.herokuapp.com/api/v1'
const currURL = prodURL
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 3,
  },
  wordsPerSentence: {
    max: 12,
    min: 6,
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

const generateItems = () => {
  const numOfItems = Math.floor(Math.random() * 5) + 2
  var items = []
  for (let i = 0; i < numOfItems; i++) {
    items[i] = lorem.generateSentences(1)
  }
  return items
}

const generateTime = () => {
  const numOfTime = Math.floor(Math.random() * 6) + 1
  var randTimeNum = Math.floor(Math.random() * 2)
  var timeUnit
  if (randTimeNum == 0) timeUnit = 'd'
  if (randTimeNum == 1) timeUnit = 'w'

  return `${numOfTime}${timeUnit} ago`
}

const companyData = {
  blogr: {
    name: 'Blogr',
    logo: 'blogr.svg',
    logoBackground: 'hsl(12, 79%, 52%)',
  },
  creative: {
    name: 'Creative',
    logo: 'creative.svg',
    logoBackground: 'hsl(295, 55%, 21%)',
  },
  coffeeroasters: {
    name: 'Coffeeroasters',
    logo: 'coffeeroasters.svg',
    logoBackground: 'hsl(29, 60%, 87%)',
  },
  crowdfund: {
    name: 'Crowdfund',
    logo: 'crowdfund.svg',
    logoBackground: 'hsl(157, 57%, 50%)',
  },
  maker: {
    name: 'Maker',
    logo: 'maker.svg',
    logoBackground: 'hsl(218, 58%, 31%)',
  },
  mastercraft: {
    name: 'Mastercraft',
    logo: 'mastercraft.svg',
    logoBackground: 'hsl(0, 0%, 12%)',
  },
  officeLite: {
    name: 'Office Lite',
    logo: 'officeLite.svg',
    logoBackground: 'hsl(227, 62%, 48%)',
  },
  pod: { name: 'Pod', logo: 'pod.svg', logoBackground: 'hsl(216, 46%, 14%)' },
  pomodoro: {
    name: 'Pomodoro',
    logo: 'pomodoro.svg',
    logoBackground: 'hsl(216, 46%, 14%)',
  },
  scoot: {
    name: 'Scoot',
    logo: 'scoot.svg',
    logoBackground: 'hsl(36, 87%, 49%)',
  },
  typemaster: {
    name: 'Typemaster',
    logo: 'typemaster.svg',
    logoBackground: 'hsl(22, 89%, 52%)',
  },
  vector: {
    name: 'Vector',
    logo: 'vector.svg',
    logoBackground: 'hsl(235, 10%, 23%)',
  },
}

const generateJob = (jobData) => {
  const company = companyData[jobData.company]
  var job = {
    company: company.name,
    logo: company.logo,
    logoBackground: company.logoBackground,
    position: jobData.position,
    postedAt: generateTime(),
    contract: jobData.contract,
    location: jobData.location,
    requirements: {
      content: lorem.generateParagraphs(1),
      items: generateItems(),
    },
    role: {
      content: lorem.generateParagraphs(1),
      items: generateItems(),
    },
    roleDescription: lorem.generateParagraphs(1),
  }

  return job
}
const validJob = {
  company: 'blogr',
  contract: 'Full Time',
  position: 'Full Stack Dev',
  location: 'France',
}
generateJob(validJob)

export const postJob = async (job) => {
  const fullJob = generateJob(job)
  try {
    const response = await axios.post(currURL + '/jobs/', fullJob)
    console.log(response)
    return response
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}
