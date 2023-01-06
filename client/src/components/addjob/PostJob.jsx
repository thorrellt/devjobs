import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DisplayContext } from '../../context/DisplayContext'
import './PostJob.css'

const AddJob = () => {
  const { darkMode, screenSize } = useContext(DisplayContext)

  const [formState, setFormState] = useState({
    company: {
      value: '',
      valid: true,
    },
    jobType: {
      value: '',
      valid: true,
    },
    position: {
      value: '',
      valid: true,
    },
    location: {
      value: '',
      valid: true,
    },
    valid: true,
  })

  console.log(formState)

  const [optionsState, setOptionsState] = useState({
    companies: [
      { name: '', value: '' },
      { name: 'Blogr', value: 'blogr' },
      { name: 'Creative', value: 'creative' },
      { name: 'Coffeeroasters', value: 'coffeeroasters' },
      { name: 'Crowdfund', value: 'crowdfund' },
      { name: 'Maker', value: 'maker' },
      { name: 'Mastercraft', value: 'mastercraft' },
      { name: 'Office Lite', value: 'officeLite' },
      { name: 'Pod', value: 'pod' },
      { name: 'Pomodoro', value: 'pomodoro' },
      { name: 'Scoot', value: 'scoot' },
      { name: 'Typemaster', value: 'typemaster' },
      { name: 'Vector', value: 'vector' },
    ],
    jobTypes: [
      { name: '', value: '' },
      { name: 'Full Time', value: 'fullTime' },
      { name: 'Part Time', value: 'partTime' },
      { name: 'Freelance', value: 'freelance' },
    ],
    locations: [
      '',
      'United Kingdom',
      'United States',
      'Japan',
      'Germany',
      'Russia',
      'Singapore',
      'New Zealand',
      'France',
      'Italy',
    ],
  })

  const companyOptions = optionsState.companies.map((company, index) => {
    return (
      <option key={index} value={company.value}>
        {company.name}
      </option>
    )
  })

  const jobTypeOptions = optionsState.jobTypes.map((jobType, index) => {
    return (
      <option key={index} value={jobType.value}>
        {jobType.name}
      </option>
    )
  })

  const locationOptions = optionsState.locations
    .sort()
    .map((location, index) => {
      return (
        <option key={index} value={location}>
          {location}
        </option>
      )
    })

  const navigate = useNavigate()

  const onFormChange = (event) => {
    const name = event.target.id
    const newValue = event.target.value

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: {
        ...prevFormState.name,
        value: newValue,
        valid: true,
      },
    }))
  }

  const onSelectChange = (event) => {
    const name = event.target.id
    const newValue = event.target.value
    console.log(name)
    console.log(newValue)

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: {
        ...prevFormState.name,
        value: newValue,
        valid: true,
      },
    }))
  }

  const setFormValidity = (value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      valid: value,
    }))
  }

  const makeFieldInvalid = (inputField) => {
    setFormState((prevState) => ({
      ...prevState,
      [inputField]: {
        ...prevState.inputField,
        valid: false,
      },
    }))
  }

  const checkCredentials = (event) => {
    if (
      formState.company.value === 'admin' &&
      formState.password.value === 'admin'
    ) {
      return true
    }

    return false
  }

  const clickSubmit = (event) => {
    event.preventDefault()

    let isFormValid = true

    for (const inputField in formState) {
      if (formState[inputField].value === '') {
        makeFieldInvalid(inputField)
        isFormValid = false
        setFormValidity(false)
      }
    }

    if (isFormValid) {
      console.log('hello')
      setFormValidity(true)
      // navigate('/devjobs/')
    } else {
      setFormValidity(false)
    }
  }

  /********************
      ON CLICK FUNCTIONS
     ********************/

  return (
    <main id="Addjob" className="flex-container">
      <div
        className={`form-container flex-container
        ${darkMode ? 'bg-blue-700' : 'bg-violet-500'}`}
      >
        <h1 className="font-white">Post a Job</h1>
        {formState.valid == false && (
          <p className="font-white error-text">
            Please verify all fields are correct
          </p>
        )}
        <form className="flex-container" id="add-job-form">
          <div className="input-container flex-container">
            <select
              name="company"
              id="company"
              value={formState.company.value}
              form="add-job-form"
              className="bg-white"
              onChange={onFormChange}
            >
              {companyOptions}
            </select>
            <label htmlFor="company" className="font-white">
              Company Name:
            </label>
          </div>

          <div className="input-container flex-container">
            <select
              name="jobType"
              id="jobType"
              value={formState.jobType.value}
              form="add-job-form"
              className="bg-white"
              onChange={onFormChange}
            >
              {jobTypeOptions}
            </select>
            <label htmlFor="jobType" className="font-white">
              Job Type:
            </label>
          </div>

          <div className="input-container flex-container">
            {formState.position.valid === false && (
              <span className="input-error font-white">
                Must include a Position Title
              </span>
            )}
            <input
              onChange={onFormChange}
              type="text"
              id="position"
              name="position"
              value={formState.position.value}
              className="bg-white"
            />
            <label htmlFor="position" className="font-white">
              Position Title:
            </label>
          </div>

          <div className="input-container flex-container">
            <select
              name="location"
              id="location"
              value={formState.location.value}
              form="add-job-form"
              className="bg-white"
              onChange={onFormChange}
            >
              {locationOptions}
            </select>
            <label htmlFor="location" className="font-white">
              Location:
            </label>
          </div>

          <button
            onClick={clickSubmit}
            className={`sec-btn-light submit-btn
            ${darkMode ? 'sec-btn-dark' : 'sec-btn-light bg-white'}`}
          >
            Post Job
          </button>
        </form>
      </div>
    </main>
  )
}

export default AddJob
