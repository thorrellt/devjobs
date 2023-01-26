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
    favorites: [],
    _id: '',
  })

  const logOut = () => {
    setUser((prevUser) => ({
      name: '',
      loggedIn: false,
    }))
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('favorites')
    localStorage.removeItem('_id')
  }

  const logIn = (user) => {
    setUser(() => ({
      name: user.name,
      favorites: user.favorites,
      loggedIn: true,
      _id: user._id,
    }))
    localStorage.setItem('token', user.token)
    localStorage.setItem('userName', user.name)
    localStorage.setItem('favorites', JSON.stringify(user.favorites))
    localStorage.setItem('_id', JSON.stringify(user._id))
  }

  const setLoggedIn = () => {
    setUser(() => ({
      name: localStorage.getItem('userName'),
      favorites: JSON.stringify(localStorage.getItem('favorites')),
      favorites: JSON.stringify(localStorage.getItem('_id')),
      loggedIn: true,
    }))
  }

  const addFavToLocal = (jobId) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    favorites.push(jobId)
    // const filteredFavs = favorites.filter((id) => id !== jobId)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  const delFavFromLocal = (jobId) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    const filteredFavs = favorites.filter((id) => id !== jobId)
    console.log(filteredFavs)
    localStorage.setItem('favorites', JSON.stringify(filteredFavs))
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
        delFavFromLocal: delFavFromLocal,
        addFavToLocal: addFavToLocal,
      }}
    >
      {children}
    </DisplayContext.Provider>
  )
}

export { DisplayContextProvider, DisplayContext }
