import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import SearchbarMobile from '../components/SearchbarMobile'
import JobCard from '../components/JobCard'
import data from '../data.json'

const Home = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)
  const windowIsMobile = windowWidth < 680

  const jobCards = data.map((jobData) => {
    return <JobCard jobData={jobData} key={jobData.id} />
  })
  return (
    <main
      id="Home"
      className={`flex-container ${darkMode ? 'bg-midnight' : 'bg-gray-300'}`}
    >
      <Navbar />

      {windowIsMobile ? <SearchbarMobile /> : <Searchbar />}

      <div className="job-cards flex-container">{jobCards}</div>
    </main>
  )
}

export default Home
