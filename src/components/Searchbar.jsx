import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Searchbar.css'
import funnel from '../assets/mobile/icon-filter.svg'

const Searchbar = () => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const isDesktop = windowWidth >= 992

  const onFormChange = () => {
    console.log('form changed')
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
            id="name"
            name="name"
            placeholder="Filter by title..."
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
            id="name"
            name="name"
            placeholder="Filter by location..."
            className="font-gray-700"
          />
        </div>
        <div
          className={`input-container checkbox-container flex-container 
          ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
        >
          <label className="checkbox-wrapper flex-container">
            <input type="checkbox" />
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
