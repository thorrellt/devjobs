import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import JobCard from '../components/JobCard'
import Searchbar from '../components/Searchbar'
import SearchbarMobile from '../components/SearchbarMobile'
import data from '../data.json'
import { fetchJob as fetchJob } from '../controllers/controller'

const Home = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const windowIsMobile = windowWidth < 680

  const [filters, setFilters] = useState({
    title: '',
    location: '',
    fulltime: true,
  })

  const jobCards = data.map((jobData) => {
    return <JobCard jobData={jobData} key={jobData.id} />
  })
  fetchJob(1)
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
