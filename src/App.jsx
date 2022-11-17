import { useState, createContext, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import SearchbarMobile from './components/SearchbarMobile'
import { Outlet, useLocation } from 'react-router-dom'
import data from './data.json'

const DisplayContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(true)

  /************************
    WINDOW LOGIC/VARIABLES
   ************************/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const breakpoint = { tablet: 680, desktop: 992 }
  const screenSize =
    (windowWidth < breakpoint.tablet && 'mobile') ||
    (windowWidth < breakpoint.desktop && 'tablet') ||
    'desktop'

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

  /***********************
    FUNCTIONS & LISTENERS
   ***********************/

  //switch mode from light to dark
  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <DisplayContext.Provider
      value={{
        darkMode: darkMode,
        switchMode: switchMode,
        // windowWidth: windowWidth,
        screenSize: screenSize,
        data: data,
      }}
    >
      <div
        className={`App flex-container ${
          darkMode ? 'bg-midnight' : 'bg-gray-300'
        }`}
      >
        <Navbar />
        <Outlet />
      </div>
    </DisplayContext.Provider>
  )
}

export { App, DisplayContext }
