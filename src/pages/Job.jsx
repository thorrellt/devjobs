import { useContext } from 'react'
import { DisplayContext } from '../App'
import { Routes, Route, useParams } from 'react-router-dom'
import CompanyLogo from '../components/CompanyLogo'
import JobFooter from '../components/jobFooter'
import '../styles/Job.css'

const Job = () => {
  const { id } = useParams()
  const { darkMode, windowWidth, data } = useContext(DisplayContext)
  const windowIsMobile = windowWidth < 680

  const job = data[id - 1]

  const generateBulletList = (items) => {
    const listItems = items.map((item, i) => {
      return (
        <>
          <li key={i} className="flex-container">
            <div className="marker"></div>
            <span>{item}</span>
          </li>
        </>
      )
    })
    return listItems
  }

  const generateNumberList = (items) => {
    const listItems = items.map((item, i) => {
      return (
        <>
          <li key={i} className="flex-container">
            <span className="number">{`${i + 1}`}</span>
            <span className="item">{item}</span>
          </li>
        </>
      )
    })
    return listItems
  }
  const reqItems = generateBulletList(job.requirements.items)
  const roleItems = generateNumberList(job.role.items)

  return (
    <>
      <main className="job flex-container">
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

        {/* JOB DETAILS */}
        <div
          className={`job-details flex-container
${darkMode ? 'bg-blue-700' : 'bg-white'}`}
        >
          <div className="summary flex-container">
            <div className="header flex-container">
              <div className="posted-at">
                <h4>{job.postedAt}</h4>
              </div>

              <div className="divider"></div>

              <div className="contract">
                <h4>{job.contract}</h4>
              </div>
            </div>

            <div
              className={`position 
${darkMode ? 'font-white' : 'font-blue-700'}`}
            >
              {windowIsMobile ? (
                <h3>{job.position}</h3>
              ) : (
                <h1>{job.position}</h1>
              )}
            </div>

            <div className="location">
              <h5>{job.location}</h5>
            </div>
          </div>

          <form action="http://thorrellt.com/" method="get" target="_blank">
            <button className="prim-btn" type="submit">
              Apply Now
            </button>
          </form>

          <p className="description">{job.description}</p>

          <div className={`title ${darkMode ? 'font-white' : 'font-blue-700'}`}>
            <h3 className="">Requirements</h3>
          </div>

          <p className="requirements">{job.requirements.content}</p>

          <ul className="req-items">{reqItems}</ul>

          <div className={`title ${darkMode ? 'font-white' : 'font-blue-700'}`}>
            <h3 className="">What You Will Do</h3>
          </div>

          <p className="role">{job.role.content}</p>

          <ol className="role-items">{roleItems}</ol>
        </div>
      </main>
      <JobFooter position={job.position} company={job.company} />
    </>
  )
}

export default Job
