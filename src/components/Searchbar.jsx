import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Searchbar.css'
import funnel from '../assets/mobile/icon-filter.svg'

const Searchbar = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const isDesktop = windowWidth >= 992

  const { filters, setFilters } = props

  const onFormChange = (event) => {
    const name = event.target.id
    const newValue = event.target.value
    const type = event.target.type

    if (type != 'checkbox')
      setFilters((prevFormState) => ({
        ...prevFormState,
        [name]: newValue,
      }))
  }

  const onCheckClick = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      fulltime: !prevFilters.fulltime,
    }))
  }

  return (
    <div className="searchbar flex-container">
      <form
        className={`flex-container 
        ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
      >
        <div
          className={`input-container title flex-container 
          ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
        >
          <i className="bi bi-search icon font-violet-500" />
          <input
            onChange={onFormChange}
            type="text"
            id="position"
            name="position"
            placeholder="Filter by title..."
            value={filters.position}
            className="font-gray-700"
          />
        </div>
        <div
          className={`input-container location flex-container 
          ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
        >
          <i className="bi bi-geo-alt-fill icon font-violet-500" />
          <input
            onChange={onFormChange}
            type="text"
            id="location"
            name="location"
            placeholder="Filter by location..."
            value={filters.location}
            className="font-gray-700"
          />
        </div>
        <div
          className={`input-container checkbox-container flex-container 
          ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
        >
          <label className="checkbox-wrapper flex-container">
            <input
              type="checkbox"
              checked={filters.fulltime}
              onClick={onCheckClick}
              onChange={onFormChange}
            />
            <span className="checkmark" />
            <p>Full Time{`${isDesktop ? ' Only' : ''}`}</p>
          </label>
        </div>
        <button className="prim-btn">Search</button>
      </form>
    </div>
  )
}

export default Searchbar
