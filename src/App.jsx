import { useState, createContext, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import SearchbarMobile from './components/SearchbarMobile'
import { Outlet, useLocation } from 'react-router-dom'

const DisplayContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  /***********************
    FUNCTIONS & LISTENERS
   ***********************/
  //Update windowWidth State on width Change
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', watchWidth)

    return function () {
      window.removeEventListener('resize', watchWidth)
    }
  }, [])

  //switch mode from light to dark
  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const windowIsMobile = windowWidth < 680

  return (
    <DisplayContext.Provider
      value={{
        darkMode: darkMode,
        switchMode: switchMode,
        windowWidth: windowWidth,
      }}
    >
      <div
        className={`App flex-container ${
          darkMode ? 'bg-midnight' : 'bg-gray-300'
        }`}
      >
        <Navbar />
        {windowIsMobile ? <SearchbarMobile /> : <Searchbar />}
        <Outlet />
      </div>
    </DisplayContext.Provider>
  )
}

export { App, DisplayContext }
