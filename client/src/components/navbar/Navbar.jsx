import { useState, useContext, useEffect, useReducer } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import { NavLink, useLocation } from 'react-router-dom'

import NightModeToggle from './NightModeToggle'
import Menu from './menu/Menu'
import './Navbar.css'

import bg from '../../assets/mobile/bg-pattern-header.svg'
import icon from '../../assets/desktop/logo.svg'

const Navbar = (props) => {
  const { darkMode, switchMode, screenSize, user, logIn, logOut } =
    useContext(DisplayContext)

  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => {
    setNavActive((prevNavState) => !prevNavState)
  }

  //minimize menu on page change
  let location = useLocation()
  useEffect(() => {
    setNavActive(false)
  }, [location])

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
          {!user.loggedIn && (
            <button onClick={toggleNav} className="menu-toggle-btn">
              <i className="bi bi-list font-white" />
            </button>
          )}

          {user.loggedIn && (
            <button onClick={toggleNav} className="menu-toggle-btn">
              <i className="bi bi-person-circle font-white" />
            </button>
          )}
        </div>
      </div>

      {/* DESKTOP LOGIN LINK*/}
      {!user.loggedIn && (
        <NavLink
          to={`/devjobs/login`}
          className={`font-white login
      ${screenSize === 'desktop' ? '' : 'hidden'}`}
        >
          <h3>Log in</h3>
        </NavLink>
      )}

      {/* DESKTOP USER ICON*/}
      {user.loggedIn && (
        <div
          className={`login
      ${screenSize === 'desktop' ? '' : 'hidden'}`}
        >
          <button onClick={toggleNav} className="menu-toggle-btn">
            <i className={`bi bi-person-circle font-white`} />
          </button>
        </div>
      )}

      {/* SMALL SCREEN POP OUT MENU */}
      {navActive && (
        <Menu
          darkMode={darkMode}
          switchMode={switchMode}
          screenSize={screenSize}
          toggleNav={toggleNav}
          navActive={navActive}
          logOut={logOut}
          logIn={logIn}
          userName={user.name}
          loggedIn={user.loggedIn}
        />
      )}
    </nav>
  )
}

export default Navbar
