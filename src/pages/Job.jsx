import { useContext } from 'react'
import { DisplayContext } from '../App'
import { Routes, Route, useParams } from 'react-router-dom'
import CompanyLogo from '../components/CompanyLogo'
import '../styles/Job.css'

const Job = () => {
  const { id } = useParams()
  const { darkMode, windowWidth, data } = useContext(DisplayContext)

  const job = data[id - 1]

  const generateList = (items) => {
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
  const reqItems = generateList(job.requirements.items)
  console.log(reqItems)

  return (
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
            <h3>{job.position}</h3>
          </div>

          <div className="location">
            <h5>{job.location}</h5>
          </div>

          <form action="http://thorrellt.com/" method="get" target="_blank">
            <button className="prim-btn" type="submit">
              Apply Now
            </button>
          </form>
        </div>

        <p className="description">{job.description}</p>

        <div className={`title ${darkMode ? 'font-white' : 'font-blue-700'}`}>
          <h3 className="">Requirements</h3>
        </div>

        <p className="requirements">{job.requirements.content}</p>

        <ul className="req-items">{reqItems}</ul>
      </div>
    </main>
  )
}

export default Job
