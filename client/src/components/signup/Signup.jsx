import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DisplayContext } from '../../context/DisplayContext'
import './Signup.css'

const Signup = () => {
  const { darkMode, screenSize, logIn } = useContext(DisplayContext)

  const [formState, setFormState] = useState({
    user: {
      value: '',
      valid: true,
    },
    password1: {
      value: '',
      valid: true,
    },
    password2: {
      value: '',
      valid: true,
    },
    valid: true,
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

  const setFormValid = (newState) => {
    setLoginState((prevState) => ({
      ...prevState,
      valid: newState,
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

  const postUser = () => {
    return true
  }

  const onSubmitClick = (event) => {
    event.preventDefault()

    let isFormValid = true

    for (const inputField in formState) {
      if (formState[inputField].value === '') {
        makeFieldInvalid(inputField)
        isFormValid = false
      }
    }

    if (formState.password1.value !== formState.password2.value) {
      setFormValidity(false)
      isFormValid = false
    }

    if (isFormValid && postUser()) {
      logIn()
      setFormValidity(true)
      navigate('/devjobs/')
    }
  }

  return (
    <main id="Signup" className="flex-container">
      <div
        className={`form-container flex-container
    ${darkMode ? 'bg-blue-700' : 'bg-violet-500'}`}
      >
        <h1 className="font-white">Sign up</h1>
        {formState.valid == false && (
          <p className="font-white error-text">Passwords must Match</p>
        )}

        <form className="flex-container">
          <div className="input-container flex-container">
            {formState.user.valid === false && (
              <span className="input-error font-white">
                This field can't be empty
              </span>
            )}
            <input
              onChange={onFormChange}
              type="text"
              id="user"
              name="user"
              value={formState.user.value}
              className="bg-white"
            />
            <label htmlFor="user" className="font-white">
              Username
            </label>
          </div>

          <div className="input-container flex-container">
            {formState.password1.valid === false && (
              <span className="input-error font-white">
                Must input a password
              </span>
            )}
            <input
              onChange={onFormChange}
              type="password"
              id="password1"
              name="password1"
              value={formState.password1.value}
              className="bg-white"
            />
            <label htmlFor="password1" className="font-white">
              Password
            </label>
          </div>

          <div className="input-container flex-container">
            {formState.password2.valid === false && (
              <span className="input-error font-white">
                Must verify password
              </span>
            )}
            <input
              onChange={onFormChange}
              type="password"
              id="password2"
              name="password2"
              value={formState.password2.value}
              className="bg-white"
            />
            <label htmlFor="password2" className="font-white">
              Re-enter Password
            </label>
          </div>

          <button
            onClick={onSubmitClick}
            className={`sec-btn-light submit-btn
          ${darkMode ? 'sec-btn-dark' : 'sec-btn-light bg-white'}`}
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  )
}

export default Signup
