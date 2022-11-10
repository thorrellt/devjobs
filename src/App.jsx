import { useState, createContext } from 'react'
import './App.css'
import Home from './pages/Home'

const DisplayContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode)
    console.log(`mode flipped to ${darkMode}`)
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
