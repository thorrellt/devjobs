import { useState, useContext } from 'react'
import { DisplayContext } from '../context/DisplayContext'
import CompanyLogo from './CompanyLogo'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/JobCard.css'

const JobCard = (props) => {
  const { darkMode } = useContext(DisplayContext)
  const {
    _id: _id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
  } = props.jobData

  return (
    <div
      className={`jobcard flex-container
    ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
    >
      <CompanyLogo logo={logo} logoBackground={logoBackground} />

      <div className="header flex-container">
        <div className="posted-at">
          <h4>{postedAt}</h4>
        </div>

        <div className="divider"></div>

        <div className="contract">
          <h4>{contract}</h4>
        </div>
      </div>

      <div
        className={`position 
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
      >
        <NavLink to={`/devjobs/job/${_id}`} className="">
          <h3>{position}</h3>
        </NavLink>
      </div>

      <div className="conpmany">
        <h4>{company}</h4>
      </div>

      <div className="location">
        <h5>{location}</h5>
      </div>
    </div>
  )
}

export default JobCard
