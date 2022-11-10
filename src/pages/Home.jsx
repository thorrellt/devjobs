import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import Navbar from '../components/Navbar'

const Home = (props) => {
  const { darkMode } = useContext(DisplayContext)
  return (
    <main id="Home" className={darkMode ? 'bg-midnight' : 'bg-gray-300'}>
      <Navbar />
    </main>
  )
}

export default Home
