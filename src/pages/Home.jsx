import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import SearchbarMobile from '../components/SearchbarMobile'
import JobCard from '../components/JobCard'

const Home = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const windowIsMobile = windowWidth < 680
  return (
    <main
      id="Home"
      className={`flex-container ${darkMode ? 'bg-midnight' : 'bg-gray-300'}`}
    >
      <Navbar />

      {windowIsMobile ? <SearchbarMobile /> : <Searchbar />}

      <div className="job-cards flex-container">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </main>
  )
}

export default Home
