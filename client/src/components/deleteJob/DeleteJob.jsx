import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './DeleteJob.css'
import JobCard from './jobCard/JobCard'
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
  const [deleteList, setDeleteList] = useState({ items: ['hello'] })

  const isSelectedForDeletion = (jobId) => {
    const arr = deleteList.items
    return arr.includes(jobId)
  }

  const addToDeleteList = (jobId) => {
    if (isSelectedForDeletion(jobId)) return
    setDeleteList((prevJobs) => ({
      items: [...prevJobs.items, jobId],
    }))
  }

  const removeFromDeleteList = (jobId) => {
    if (!isSelectedForDeletion(jobId)) return
    setDeleteList((prevJobs) => {
      let arr = prevJobs.items
      const index = arr.indexOf(jobId)
      if (index > -1) {
        arr.splice(index, 1)
      }
      return prevJobs
    })
  }

  const toggleDeleteSelection = (jobId) => {
    if (isSelectedForDeletion(jobId)) {
      removeFromDeleteList(jobId)
    } else {
      addToDeleteList(jobId)
    }
  }

  let jobCards = []

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
      return (
        <JobCard
          jobData={jobData}
          cardType="delete"
          key={jobData._id}
          toggleDeleteSelection={toggleDeleteSelection}
          isSelectedForDeletion={isSelectedForDeletion}
        />
      )
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
