import { useState, useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'

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
      <i className={`bi bi-brightness-high-fill icon sun ${primColor}`} />
      <div onClick={switchMode} className={`toggle-switch ${bgColor}`}>
        <div className={`selector ${darkMode ? 'dark' : ''} ${secColor}`}></div>
      </div>
      <i className={`bi bi-moon-fill icon moon ${primColor}`} />
    </div>
  )
}

export default NightModeToggle
