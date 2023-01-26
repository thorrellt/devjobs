import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './DeleteJob.css'
import JobCard from '../home/jobCard/JobCard'
import Searchbar from '../home/searchbar/Searchbar'
import { getJobs } from '../../data/api'

const DeleteJob = () => {
  return <h1>Delete Job</h1>
}

export default DeleteJob
