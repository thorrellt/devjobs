import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Home.css'
import JobCard from './jobCard/JobCard'
import Searchbar from './searchbar/Searchbar'
import { getJobs } from '../../data/api'

const Home = (props) => {
  /*******
    HOOKS
   *******/
  const { darkMode, screenSize, user } = useContext(DisplayContext)

  const [filters, setFilters] = useState({
    position: '',
    location: '',
    favorites: false,
  })
  const [allJobs, setAllJobs] = useState([])
  const [isLocal, setIsLocal] = useState(true)
  const [hasLoaded, setHasLoaded] = useState()
  let jobCards = []

  /***********
    API CALLS
   ***********/
  const fetchJobs = async (filter) => {
    await getJobs(filter).then((res) => {
      setAllJobs(res.jobs)
      setIsLocal(res.isLocal)
      setHasLoaded(true)
    })
  }

  const updateJobs = () => {
    fetchJobs(filters)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  /***************
    CARD CREATION
   ***************/
  const generateJobCards = () => {
    if (filters.favorites) {
      return allJobs.map((jobData) => {
        if (user.favorites.includes(jobData._id)) {
          return <JobCard jobData={jobData} key={jobData.id} />
        }
      })
    }
    return allJobs.map((jobData) => {
      return <JobCard jobData={jobData} key={jobData.id} />
    })
  }

  useEffect(() => {
    jobCards = generateJobCards()
  }, [allJobs])

  if (hasLoaded) {
    jobCards = generateJobCards()
  }

  return (
    <main id="Home" className="flex-container">
      <Searchbar
        filters={filters}
        setFilters={setFilters}
        updateJobs={updateJobs}
      />

      {isLocal && hasLoaded && (
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
