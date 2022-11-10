import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'

const Home = (props) => {
  const { darkMode } = useContext(DisplayContext)
  return (
    <main id="Home" className={darkMode ? 'bg-midnight' : 'bg-gray-300'}>
      <Navbar />
      <Searchbar />
    </main>
  )
}

export default Home
