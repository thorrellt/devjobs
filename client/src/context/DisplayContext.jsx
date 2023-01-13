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

  /***********
    USER INFO
   ***********/
  const [user, setUser] = useState({
    loggedIn: false,
    name: '',
  })

  const logOut = () => {
    setUser((prevUser) => ({
      name: '',
      loggedIn: false,
    }))
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
  }

  const logIn = (user) => {
    setUser(() => ({
      name: user.name,
      loggedIn: true,
    }))
    localStorage.setItem('token', user.token)
    localStorage.setItem('userName', user.name)
  }

  const setLoggedIn = () => {
    setUser(() => ({
      name: localStorage.getItem('userName'),
      loggedIn: true,
    }))
  }

  return (
    <DisplayContext.Provider
      value={{
        darkMode: darkMode,
        switchMode: switchMode,
        screenSize: screenSize,
        user: user,
        logOut: logOut,
        logIn: logIn,
        setLoggedIn: setLoggedIn,
      }}
    >
      {children}
    </DisplayContext.Provider>
  )
}

export { DisplayContextProvider, DisplayContext }
