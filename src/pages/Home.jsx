import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import JobCard from '../components/JobCard'
import Searchbar from '../components/Searchbar'
import SearchbarMobile from '../components/SearchbarMobile'
import data from '../data.json'
import { fetchJob as fetchJob } from '../controllers/controller'
import { getAllJobs } from '../controllers/controller'

const Home = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const windowIsMobile = windowWidth < 680
  const [filters, setFilters] = useState({
    position: '',
    location: '',
    fulltime: true,
  })

  const [allJobs, setAllJobs] = useState(getAllJobs())

  useEffect(() => {
    const filteredJobs = getAllJobs(filters)
    setAllJobs(filteredJobs)
    jobCards = filteredJobs.map((jobData) => {
      return <JobCard jobData={jobData} key={jobData.id} />
    })
  }, [filters])

  let jobCards = allJobs.map((jobData) => {
    return <JobCard jobData={jobData} key={jobData.id} />
  })

  return (
    <main id="Home" className="flex-container">
      {windowIsMobile ? (
        <SearchbarMobile filters={filters} setFilters={setFilters} />
      ) : (
        <Searchbar filters={filters} setFilters={setFilters} />
      )}
      <div className="job-cards flex-container">{jobCards}</div>
    </main>
  )
}

export default Home
