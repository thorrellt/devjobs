import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './DeleteJob.css'
import JobCard from '../home/jobCard/JobCard'
import { getJobs } from '../../data/api'

const DeleteJob = () => {
  /*******
    HOOKS
   *******/
  const { darkMode, screenSize, user } = useContext(DisplayContext)

  const [filters, setFilters] = useState({
    position: '',
    location: '',
    fulltime: false,
  })
  const [allJobs, setAllJobs] = useState([])
  const [isLocal, setIsLocal] = useState(true)
  const [hasLoaded, setHasLoaded] = useState()
  const [selectedJobs, setSelectedJobs] = useState({})
  let jobCards = []
  const [deleteList, setDeleteList] = useState([])

  const addSelectedJob = (jobId) => {
    setSelectedJobs((prevJobs) => ({ ...prevJobs, jobId: jobId }))
  }

  const removeSelectedJob = (jobId) => {
    setSelectedJobs((prevJobs) => {
      if (prevJobs[jobId]) {
        delete prevJobs[jobId]
      }
      return prevJobs
    })
  }

  /***********
    API CALLS
  ***********/
  const fetchJobs = async () => {
    if (!user.loggedIn) return
    await getJobs({ userId: user._id }).then((res) => {
      setAllJobs(res.jobs)
      setIsLocal(res.isLocal)
      setHasLoaded(true)
    })
  }

  const updateJobs = () => {
    fetchJobs()
  }

  useEffect(() => {
    fetchJobs()
  }, [user])

  if (allJobs[0]) {
    console.log(allJobs[0]._id)
  }

  /***************
    CARD CREATION
  ***************/
  const generateJobCards = () => {
    return allJobs.map((jobData) => {
      return <JobCard jobData={jobData} cardType="delete" key={jobData._id} />
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

export default DeleteJob
