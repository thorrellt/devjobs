import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import JobCard from '../components/JobCard'
import Searchbar from '../components/Searchbar'
import data from '../data.json'
import { fetchJob as fetchJob } from '../controllers/controller'
import { getAllJobs, getJobs } from '../controllers/controller'

const Home = (props) => {
  const { darkMode, screenSize } = useContext(DisplayContext)
  const [filters, setFilters] = useState({
    position: '',
    location: '',
    fulltime: false,
  })

  const [allJobs, setAllJobs] = useState([])
  let jobCards = []

  useEffect(() => {
    let returnedJobs = []

    const fetchJobs = async () => {
      await getJobs().then((res) => setAllJobs(res))
    }

    fetchJobs()
  }, [])

  useEffect(() => {
    jobCards = allJobs.map((jobData) => {
      return <JobCard jobData={jobData} key={jobData.id} />
    })
  }, [allJobs])

  const updateJobs = () => {
    const filteredJobs = getAllJobs(filters)
    setAllJobs(filteredJobs)
    jobCards = filteredJobs.map((jobData) => {
      return <JobCard jobData={jobData} key={jobData.id} />
    })
  }

  jobCards = allJobs.map((jobData) => {
    return <JobCard jobData={jobData} key={jobData.id} />
  })

  return (
    <main id="Home" className="flex-container">
      <Searchbar
        filters={filters}
        setFilters={setFilters}
        updateJobs={updateJobs}
      />
      <div className="job-cards flex-container">{jobCards}</div>
    </main>
  )
}

export default Home
