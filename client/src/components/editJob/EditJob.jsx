import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Routes, Route, useParams } from 'react-router-dom'
import { DisplayContext } from '../../context/DisplayContext'
import './EditJob.css'
import { patchJob, getJob } from '../../data/api'

const EditJob = () => {
  /*******
    HOOKS
   *******/
  const { id } = useParams()
  const { darkMode, screenSize, loggedIn } = useContext(DisplayContext)

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
  const [hasLoaded, setHasLoaded] = useState()

  const navigate = useNavigate()
  /***************************
    DROPDOWN LISTS GENERATION
   ***************************/
  const dropdownSelections = {
    companies: [
      { name: '', value: '' },
      { name: 'Blogr', value: 'blogr' },
      { name: 'Creative', value: 'creative' },
      { name: 'Coffeeroasters', value: 'coffeeroasters' },
      { name: 'Crowdfund', value: 'crowdfund' },
      { name: 'Maker', value: 'maker' },
      { name: 'Mastercraft', value: 'mastercraft' },
      { name: 'Office Lite', value: 'officelite' },
      { name: 'Pod', value: 'pod' },
      { name: 'Pomodoro', value: 'pomodoro' },
      { name: 'Scoot', value: 'scoot' },
      { name: 'Typemaster', value: 'typemaster' },
      { name: 'Vector', value: 'vector' },
    ],
    jobTypes: ['', 'Full Time', 'Part Time', 'Freelance'],
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
  }

  const companyOptions = dropdownSelections.companies.map((company, index) => {
    return (
      <option key={index} value={company.value}>
        {company.name}
      </option>
    )
  })

  const jobTypeOptions = dropdownSelections.jobTypes.map((jobType, index) => {
    return (
      <option key={index} value={jobType}>
        {jobType}
      </option>
    )
  })

  const locationOptions = dropdownSelections.locations
    .sort()
    .map((location, index) => {
      return (
        <option key={index} value={location}>
          {location}
        </option>
      )
    })

  const fetchJob = async (filter) => {
    let response = {}
    await getJob(id)
      .then((res) => (response = res))
      .then((response) => {
        if (typeof response === 'string') {
          throw response
        }
      })
      .then(() => {
        const companyObj = dropdownSelections.companies.find(
          (element) => element.name === response.company
        )
        setFormState({
          company: {
            value: companyObj.value,
            valid: true,
          },
          jobType: {
            value: response.contract,
            valid: true,
          },
          position: {
            value: response.position,
            valid: true,
          },
          location: {
            value: response.location,
            valid: true,
          },
          valid: true,
        })
        setHasLoaded(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchJob()
  }, [])
  /********************
    ON CLICK FUNCTIONS
   ********************/
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
        ...prevState[inputField],
        valid: false,
      },
    }))
  }

  const checkInputFieldsValidity = () => {
    let valid = true
    for (const inputField in formState) {
      if (formState[inputField].value === '') {
        makeFieldInvalid(inputField)
        valid = false
      }
    }
    return valid
  }

  const attemptToPost = async (job) => {
    await patchJob(job).then(() => navigate('/devjobs/'))
  }

  const onSubmitClick = (event) => {
    event.preventDefault()

    const formIsValid = checkInputFieldsValidity()

    if (formIsValid) {
      const validJob = {
        company: formState.company.value,
        contract: formState.jobType.value,
        position: formState.position.value,
        location: formState.location.value,
        id: id,
      }
      attemptToPost(validJob)
      setFormValidity(true)
    } else {
      setFormValidity(false)
    }
  }

  return (
    <main id="Editjob" className="flex-container">
      <div
        className={`form-container flex-container
          ${darkMode ? 'bg-blue-700' : 'bg-violet-500'}`}
      >
        {/* error message for invalid form */}
        <h1 className="font-white">Edit a Job</h1>
        {formState.valid == false && (
          <p className="font-white error-text">
            Please verify all fields are correct
          </p>
        )}

        {/* form fields */}
        <form className="flex-container" id="add-job-form">
          {/* company name */}
          <div className="input-container flex-container">
            {formState.company.valid === false && (
              <span className="input-error font-white">
                Must include the company name
              </span>
            )}

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

          {/* job type */}
          <div className="input-container flex-container">
            {formState.jobType.valid === false && (
              <span className="input-error font-white">
                Must include the job type
              </span>
            )}

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

          {/* position title */}
          <div className="input-container flex-container">
            {formState.position.valid === false && (
              <span className="input-error font-white">
                Must include a position's title
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

          {/* location */}
          <div className="input-container flex-container">
            {formState.location.valid === false && (
              <span className="input-error font-white">
                Must include the location of thie position
              </span>
            )}

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
            onClick={onSubmitClick}
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

export default EditJob
