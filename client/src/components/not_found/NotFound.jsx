import { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './NotFound.css'

import dark404 from '../../assets/desktop/404-dark.png'
import light404 from '../../assets/desktop/404-light.png'

const NoPageFound = () => {
  const { darkMode } = useContext(DisplayContext)
  return (
    <main id="not-found" className="flex-container">
      <img src={darkMode ? dark404 : light404} alt="no page found" />
    </main>
  )
}

export default NoPageFound
