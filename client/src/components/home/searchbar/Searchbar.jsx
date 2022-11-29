import { useState, useContext } from 'react'
import { DisplayContext } from '../../../context/DisplayContext'
import './Searchbar.css'
import funnel from '../../../assets/mobile/icon-filter.svg'
import SearchModal from './SearchModal'

const Searchbar = (props) => {
  const { darkMode, screenSize } = useContext(DisplayContext)
  const { filters, setFilters, updateJobs } = props

  /****************
    FORM LISTENERS
   ****************/
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

  const [showModal, setShowModal] = useState(false)

  const toggleModal = (event) => {
    event.preventDefault()
    setShowModal((prevState) => !prevState)
  }

  const onSearchClick = (event) => {
    event.preventDefault()
    updateJobs()
    setShowModal((prevState) => !prevState)
  }

  return (
    <div
      className={`searchbar flex-container ${
        screenSize === 'mobile' && 'mobile'
      }`}
    >
      <form
        className={`flex-container 
        ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
      >
        {/* FILTER BY TITLE/POSITION */}
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

        {/* TABLET/DESKTOP */}
        {screenSize !== 'mobile' && (
          <>
            {/* FILTER BY LOCATION */}
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

            {/* FULL SCREEN CHECKBOX */}
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
                <p>Full Time{`${screenSize === 'desktop' ? ' Only' : ''}`}</p>
              </label>
            </div>
            <button className="prim-btn" onClick={onSearchClick}>
              Search
            </button>
          </>
        )}

        {/* MOBILE */}
        {screenSize === 'mobile' && (
          <>
            <button onClick={toggleModal}>
              <i
                className={`bi bi-funnel-fill 
          ${darkMode ? 'font-white' : 'font-violet-500'}`}
              />
            </button>

            <button className="prim-btn" onClick={onSearchClick}>
              <i className="bi bi-search" />
            </button>
            <SearchModal
              onFormChange={onFormChange}
              onCheckClick={onCheckClick}
              filters={filters}
              setFilters={setFilters}
              toggleModal={toggleModal}
              showModal={showModal}
              onSearchClick={onSearchClick}
            />
          </>
        )}
      </form>
    </div>
  )
}

export default Searchbar
