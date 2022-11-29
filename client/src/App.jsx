import { useState, useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import Searchbar from './components/home/searchbar/Searchbar'
import { Outlet, useLocation } from 'react-router-dom'
import {
  DisplayContextProvider,
  DisplayContext,
} from './context/DisplayContext'

const App = () => {
  const [darkMode, setTestState] = useState(true)
  return (
    <DisplayContextProvider>
      <Page />
    </DisplayContextProvider>
  )
}

const Page = () => {
  const { darkMode } = useContext(DisplayContext)

  return (
    <div
      className={`App flex-container ${
        darkMode ? 'bg-midnight' : 'bg-gray-300'
      }`}
    >
      <Navbar />
      <Outlet />
    </div>
  )
}

export { App }
