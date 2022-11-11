import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import CompanyLogo from './CompanyLogo'
import '../styles/JobCard.css'

const JobCard = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const {
    id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
  } = {
    id: 1,
    company: 'Scoot',
    logo: 'scoot.svg',
    logoBackground: 'hsl(36, 87%, 49%)',
    position: 'Senior Software Engineer',
    postedAt: '5h ago',
    contract: 'Full Time',
    location: 'United Kingdom',
  }
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
        <h3>{position}</h3>
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
