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

  const [jobsList, setJobsList] = useState([])

  const [isLocal, setIsLocal] = useState(true)
  const [hasLoaded, setHasLoaded] = useState()

  //deletion list
  const [deletionList, setDeletionList] = useState({})

  const toggleDeletionState = (jobId) => {
    setDeletionList((prevState) => {
      return { ...prevState, [jobId]: !prevState[jobId] }
    })
  }

  /***********
    API CALLS
  ***********/
  const fetchJobs = async () => {
    if (!user.loggedIn) return
    await getJobs({ userId: user._id }).then((res) => {
      //set Job list state
      setJobsList(res.jobs)

      //Set deletionList state
      const deleteListObj = {}
      res.jobs.forEach((item) => {
        deleteListObj[item._id] = false
      })

      setDeletionList(deleteListObj)

      //update additional states
      setIsLocal(res.isLocal)
      setHasLoaded(true)
    })
  }

  useEffect(() => {
    fetchJobs()
  }, [user])

  const deleteJobs = async (filter) => {
    await getJobs(filter).then((res) => {
      setAllJobs(res.jobs)
      setIsLocal(res.isLocal)
      setHasLoaded(true)
    })
  }

  const onSubmitClick = () => {
    console.log('submit click')
  }

  /***************
    CARD CREATION
  ***************/
  const generateJobCards = () => {
    return jobsList.map((jobData) => {
      return (
        <JobCard
          jobData={jobData}
          cardType="delete"
          key={jobData._id}
          toggleDeletionState={toggleDeletionState}
          isSelected={deletionList[jobData._id]}
        />
      )
    })
  }

  let jobCards = []
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

      <button onClick={onSubmitClick} className={`delete-btn prim-btn`}>
        Delete Selected Items
      </button>

      <div className="job-cards flex-container">{jobCards}</div>
    </main>
  )
}

export default DeleteJob
