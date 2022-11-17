import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/SearchbarMobile.css'
import funnel from '../assets/mobile/icon-filter.svg'

const SearchbarMobile = (props) => {
  const { darkMode } = useContext(DisplayContext)

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
            id="position"
            name="position"
            placeholder="Filter by title..."
            value={filters.position}
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
