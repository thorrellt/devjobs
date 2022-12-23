import { useState, useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import NightModeToggle from './NightModeToggle'
import bg from '../../assets/mobile/bg-pattern-header.svg'
import icon from '../../assets/desktop/logo.svg'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'

const toggleNav = () => {
  console.log('toggleNav')
}

const Navbar = (props) => {
  const { darkMode, switchMode, screenSize } = useContext(DisplayContext)

  return (
    <nav className="flex-container">
      <div className="nav-content flex-container">
        <NavLink to={`/devjobs/`} className="">
          <img className="logo" src={icon} alt="dev jobs icon" />
        </NavLink>

        {/* DESKTOP NIGHTMODE TOGGLE */}
        {screenSize === 'desktop' && (
          <NightModeToggle
            darkMode={darkMode}
            switchMode={switchMode}
            primColor="font-white"
            bgColor="bg-white"
            secColor="bg-violet-500"
          />
        )}

        {/* SMALL SCREEN MENU BTN */}
        <div
          className={`menu-toggle-container
      ${screenSize === 'desktop' ? 'hidden' : ''}`}
        >
          <button onClick={toggleNav} className="menu-toggle-btn">
            <i className="bi bi-list font-white" />
          </button>
        </div>
      </div>

      {/* DESKTOP LOGIN LINK*/}
      <NavLink
        to={`/devjobs/login`}
        className={`font-white login
      ${screenSize === 'desktop' ? '' : 'hidden'}`}
      >
        <h3>Log in</h3>
      </NavLink>

      {/* SMALL SCREEN POP OUT MENU */}
      <div
        className={`bg-screen
      ${screenSize === 'desktop' ? 'hidden' : ''}`}
      ></div>

      <div
        className={`menu flex-container
      ${screenSize === 'desktop' ? 'hidden' : ''}
      ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
      >
        <i
          className={`bi bi-x 
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
        />

        <div
          className={`menu-header flex-container ${darkMode ? 'dark' : ''} `}
        >
          <i className={`bi bi-person-circle font-violet-500`} />
          <h3 className={`${darkMode ? 'font-white' : 'font-blue-700'}`}>
            Welcome, User
          </h3>
          <NightModeToggle
            darkMode={darkMode}
            switchMode={switchMode}
            primColor={darkMode ? 'font-white' : 'font-violet-500'}
            bgColor={darkMode ? 'bg-white' : 'bg-violet-500'}
            secColor={darkMode ? 'bg-violet-500' : 'bg-white'}
          />
        </div>
        <div className="links-container flex-container">
          <NavLink
            to={`/devjobs/`}
            className={`link ${darkMode ? 'font-white' : 'font-blue-700'}`}
          >
            Saved Jobs
          </NavLink>
          <NavLink
            to={`/devjobs/`}
            className={`link ${darkMode ? 'font-white' : 'font-blue-700'}`}
          >
            Post Job
          </NavLink>
          <NavLink
            to={`/devjobs/`}
            className={`link ${darkMode ? 'font-white' : 'font-blue-700'}`}
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
