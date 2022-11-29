import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Home.css'
import JobCard from './jobCard/JobCard'
import Searchbar from './searchbar/Searchbar'
import { getJobs } from '../../data/api'

const Home = (props) => {
  const { darkMode, screenSize } = useContext(DisplayContext)
  const [filters, setFilters] = useState({
    position: '',
    location: '',
    fulltime: false,
  })

  const [allJobs, setAllJobs] = useState([])
  const [isLocal, setIsLocal] = useState(true)
  const [hasLoaded, setHasLoaded] = useState()
  let jobCards = []

  const fetchJobs = async (filter) => {
    await getJobs(filter).then((res) => {
      const response = res
      console.log(response)
      setAllJobs(res.jobs)
      setIsLocal(res.isLocal)
      setHasLoaded(true)
    })
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  useEffect(() => {
    jobCards = allJobs.map((jobData) => {
      return <JobCard jobData={jobData} key={jobData.id} />
    })
  }, [allJobs])

  const updateJobs = () => {
    fetchJobs(filters)
  }

  if (hasLoaded) {
    jobCards = allJobs.map((jobData) => {
      return <JobCard jobData={jobData} key={jobData.id} />
    })
  }

  return (
    <main id="Home" className="flex-container">
      <Searchbar
        filters={filters}
        setFilters={setFilters}
        updateJobs={updateJobs}
      />

      {isLocal && (
        <div className="local-data-msg flex-container">
          <div
            className={`company 
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
          >
            <h4>Unable to reach API at this time.</h4>
            <h4>Page is showing local data</h4>
          </div>
        </div>
      )}

      <div className="job-cards flex-container">{jobCards}</div>
    </main>
  )
}

export default Home
