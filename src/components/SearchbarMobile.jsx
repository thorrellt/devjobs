import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/SearchbarMobile.css'
import funnel from '../assets/mobile/icon-filter.svg'

const SearchbarMobile = () => {
  const { darkMode } = useContext(DisplayContext)

  const onFormChange = () => {
    console.log('form changed')
  }

  return (
    <div className="searchbar mobile flex-container">
      <form
        className={`flex-container ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
      >
        <div
          className={`input-container flex-container 
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
        <i
          className={`bi bi-funnel-fill 
          ${darkMode ? 'font-white' : 'font-violet-500'}`}
        />
        <button className="prim-btn">
          <i className="bi bi-search" />
        </button>
      </form>
    </div>
  )
}

export default SearchbarMobile
