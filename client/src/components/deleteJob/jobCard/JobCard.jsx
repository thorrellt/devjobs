import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../../context/DisplayContext'
import CompanyLogo from '../../companyLogo/CompanyLogo'
import { NavLink, useLocation } from 'react-router-dom'
import './JobCard.css'
import { addFavorite, deleteFavorite } from '../../../data/api'

const JobCard = (props) => {
  const { darkMode, user, delFavFromLocal, addFavToLocal } =
    useContext(DisplayContext)
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

  const { toggleDeletionState, isSelected } = props

  const [favLoaded, setFavLoaded] = useState(true)

  var checkBox = isSelected ? `bi bi-check-square-fill` : `bi bi-square`

  useEffect(() => {}, [])

  const oncheckClick = () => {
    console.log('click')
    toggleDeletionState(_id)
  }

  return (
    <div
      className={`jobcard flex-container
    ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
      key={_id}
    >
      <CompanyLogo logo={logo} logoBackground={logoBackground} />

      {/* render Favorite checkbox Icon */}
      {user.loggedIn && (
        <i
          className={`${checkBox} check 
          ${darkMode ? 'font-white' : 'font-blue-700'}
          ${!favLoaded ? 'spin' : ''}`}
          onClick={oncheckClick}
        />
      )}

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
