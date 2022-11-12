import { useState, useContext } from 'react'
import { DisplayContext } from '../App'
import '../styles/Home.css'
import JobCard from '../components/JobCard'
import data from '../data.json'

const Home = (props) => {
  const { darkMode, windowWidth } = useContext(DisplayContext)

  const jobCards = data.map((jobData) => {
    return <JobCard jobData={jobData} key={jobData.id} />
  })
  return (
    <main id="Home" className="flex-container">
      <div className="job-cards flex-container">{jobCards}</div>
    </main>
  )
}

export default Home
