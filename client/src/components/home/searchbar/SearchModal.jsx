import { useState, useContext } from 'react'
import { DisplayContext } from '../../../context/DisplayContext'

const SearchModal = (props) => {
  const {
    onFormChange,
    onCheckClick,
    filters,
    setFilters,
    showModal,
    toggleModal,
    onSearchClick,
  } = props
  const { darkMode } = useContext(DisplayContext)
  return (
    <>
      <div
        className={`modal-container flex-container ${showModal ? '' : 'hide'}`}
        onClick={toggleModal}
      ></div>
      <div
        className={`search-container flex-container
    ${darkMode ? 'bg-blue-700' : 'bg-white'}
    ${showModal ? '' : 'hide'}`}
      >
        {/* FILTER BY LOCATION */}
        <div
          className={`input-container location flex-container 
          ${darkMode ? 'bg-blue-700' : 'bg-white'}
          `}
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
        {/* CHECKBOX */}
        <div
          className={`input-container checkbox-container flex-container 
          ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
        >
          <label className="checkbox-wrapper flex-container">
            <input
              type="checkbox"
              checked={filters.favorites}
              onClick={onCheckClick}
              onChange={onFormChange}
            />
            <span className="checkmark" />
            <p>Favorites Only</p>
          </label>
        </div>
        <button className="prim-btn" onClick={onSearchClick}>
          Search
        </button>
      </div>
    </>
  )
}

export default SearchModal
