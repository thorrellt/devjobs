import { useState, useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import bg from '../../assets/mobile/bg-pattern-header.svg'
import icon from '../../assets/desktop/logo.svg'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'

const Navbar = (props) => {
  const { darkMode, switchMode } = useContext(DisplayContext)

  return (
    <nav className="flex-container">
      <div className="nav-content flex-container">
        <NavLink to={`/devjobs/`} className="">
          <img className="logo" src={icon} alt="dev jobs icon" />
        </NavLink>

        <div className="mode-toggle flex-container">
          <img src={sun} className="icon sun" alt="" />
          <div onClick={switchMode} className="toggle-switch">
            <div className={`selector ${darkMode ? 'dark' : ''}`}></div>
          </div>
          <img src={moon} className="icon moon" alt="" />
        </div>
      </div>
      <NavLink to={`/devjobs/login`} className="font-white login">
        <h3>Log in</h3>
      </NavLink>
    </nav>
  )
}

export default Navbar
