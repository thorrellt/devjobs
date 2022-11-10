import '../styles/Navbar.css'
import bg from '../assets/mobile/bg-pattern-header.svg'
import icon from '../assets/desktop/logo.svg'
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import { useState, useContext } from 'react'
import { DisplayContext } from '../App'

const Navbar = (props) => {
  const { darkMode, switchMode } = useContext(DisplayContext)

  return (
    <nav>
      <div className="nav-content flex-container">
        <img src={icon} alt="dev jobs icon" />
        <div className="mode-toggle flex-container">
          <img src={sun} className="icon sun" alt="" />
          <div
            onClick={switchMode}
            className={`toggle-switch flex-container ${darkMode ? 'dark' : ''}`}
          >
            <div className="selector"></div>
          </div>
          <img src={moon} className="icon moon" alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
