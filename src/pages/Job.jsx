import { useContext } from 'react'
import { DisplayContext } from '../App'
import { Routes, Route, useParams } from 'react-router-dom'
import CompanyLogo from '../components/CompanyLogo'
import '../styles/Job.css'

const Job = () => {
  const { id } = useParams()
  const { darkMode, windowWidth, data } = useContext(DisplayContext)

  const job = data[id - 1]

  return (
    <div className="job flex-container">
      <div
        className={`job-header flex-container
    ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
      >
        <CompanyLogo logo={job.logo} logoBackground={job.logoBackground} />

        <div className="company-name flex-container">
          <div
            className={`company 
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
          >
            <h2>{job.company}</h2>
          </div>

          <div className="url">
            <h4>{`${job.company}.com`}</h4>
          </div>
        </div>

        <form action="http://thorrellt.com/" method="get" target="_blank">
          <button className="sec-btn-light" type="submit">
            Company Site
          </button>
        </form>
      </div>
    </div>
  )
}

export default Job
