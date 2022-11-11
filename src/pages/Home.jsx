import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import SearchbarMobile from '../components/SearchbarMobile'

const Home = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const windowIsMobile = windowWidth < 680
  return (
    <main id="Home" className={darkMode ? 'bg-midnight' : 'bg-gray-300'}>
      <Navbar />
      {windowIsMobile ? <SearchbarMobile /> : <Searchbar />}
    </main>
  )
}

export default Home
