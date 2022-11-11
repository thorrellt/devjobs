import { useState, createContext, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'

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

  return (
    <DisplayContext.Provider
      value={{
        darkMode: darkMode,
        switchMode: switchMode,
        windowWidth: windowWidth,
      }}
    >
      <Home />
    </DisplayContext.Provider>
  )
}

export { App, DisplayContext }
