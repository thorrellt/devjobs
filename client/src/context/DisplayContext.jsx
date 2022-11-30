import { useState, createContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const DisplayContext = createContext()

const DisplayContextProvider = ({ children }) => {
  /***********
    DARK MODE
   ***********/
  const [darkMode, setDarkMode] = useState(true)

  //switch mode from light to dark
  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  /************************
    WINDOW LOGIC/VARIABLES
   ************************/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const breakpoint = { tablet: 680, desktop: 992 }
  let screenSize =
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

  return (
    <DisplayContext.Provider
      value={{
        darkMode: darkMode,
        switchMode: switchMode,
        screenSize: screenSize,
      }}
    >
      {children}
    </DisplayContext.Provider>
  )
}

export { DisplayContextProvider, DisplayContext }