import { useState, useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'

const NightModeToggle = (props) => {
  const { darkMode, switchMode } = props

  const primColor = props.primColor ? props.primColor : 'font-white'
  const bgColor = props.bgColor ? props.bgColor : 'bg-white'
  const secColor = props.secColor ? props.secColor : 'bg-violet-500 '

  return (
    <div
      className={`mode-toggle flex-container 
      `}
    >
      <img src={sun} className={`icon sun ${primColor}`} alt="" />
      <div onClick={switchMode} className={`toggle-switch ${bgColor}`}>
        <div className={`selector ${darkMode ? 'dark' : ''} ${secColor}`}></div>
      </div>
      <img src={moon} className={`icon moon ${primColor}`} alt="" />
    </div>
  )
}

export default NightModeToggle
