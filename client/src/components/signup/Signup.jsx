import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DisplayContext } from '../../context/DisplayContext'
import './Signup.css'

const Signup = () => {
  /*******
    HOOKS
   *******/
  const { darkMode, screenSize, logIn } = useContext(DisplayContext)

  const [formState, setFormState] = useState(() => ({
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
    errorMsg: '',
  }))

  const navigate = useNavigate()

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

  const updateErrorMsg = (message) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      errorMsg: message,
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

  const postUser = () => {
    return true
  }

  const areInputFieldsValid = () => {
    let valid = true
    for (const inputField in formState) {
      if (formState[inputField].value === '') {
        makeFieldInvalid(inputField)
        valid = false
      }
    }

    if (!valid) updateErrorMsg('Please complete all fields')
    return valid
  }

  const doPasswordsMatch = () => {
    if (formState.password1.value === formState.password2.value) return true

    updateErrorMsg('Passwords must match')
    return false
  }

  const onSubmitClick = (event) => {
    event.preventDefault()

    const passwordsMatch = doPasswordsMatch()
    const formIsValid = areInputFieldsValid()

    if (formIsValid && passwordsMatch) {
      postUser()
      logIn()
      setFormValidity(true)
      navigate('/devjobs/')
      return true
    }

    setFormValidity(false)
  }

  return (
    <main id="Signup" className="flex-container">
      <div
        className={`form-container flex-container
    ${darkMode ? 'bg-blue-700' : 'bg-violet-500'}`}
      >
        {/* error message for invalid form */}
        <h1 className="font-white">Sign up</h1>
        {formState.valid == false && (
          <p className="font-white error-text">{formState.errorMsg}</p>
        )}

        {/* form fields */}
        <form className="flex-container">
          {/* username field */}
          <div className="input-container flex-container">
            {formState.user.valid === false && (
              <span className="input-error font-white">
                Must enter a user name
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

          {/* password field #1 */}
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

          {/* password field #2 */}
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
