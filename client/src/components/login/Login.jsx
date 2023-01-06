import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DisplayContext } from '../../context/DisplayContext'
import './Login.css'

const Login = () => {
  const { darkMode, screenSize, logIn } = useContext(DisplayContext)

  const [formState, setFormState] = useState({
    user: {
      value: '',
      valid: true,
    },
    password: {
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

  const setLoginValidity = (value) => {
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
      formState.user.value === 'admin' &&
      formState.password.value === 'admin'
    ) {
      return true
    }

    return false
  }

  const attemptLogin = (event) => {
    event.preventDefault()

    let isFormValid = true

    for (const inputField in formState) {
      if (formState[inputField].value === '') {
        makeFieldInvalid(inputField)
        isFormValid = false
        setLoginValidity(false)
      }
    }

    if (checkCredentials()) {
      logIn()
      setLoginValidity(true)
      navigate('/devjobs/')
    } else {
      setLoginValidity(false)
    }
  }

  /********************
    ON CLICK FUNCTIONS
   ********************/

  return (
    <main id="Login" className="flex-container">
      <div
        className={`form-container flex-container
      ${darkMode ? 'bg-blue-700' : 'bg-violet-500'}`}
      >
        <h1 className="font-white">Login</h1>
        {formState.valid == false && (
          <p className="font-white error-text">
            Invalid Login. please try again
          </p>
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
            {formState.password.valid === false && (
              <span className="input-error font-white">
                Must include a password
              </span>
            )}
            <input
              onChange={onFormChange}
              type="password"
              id="password"
              name="password"
              value={formState.password.value}
              className="bg-white"
            />
            <label htmlFor="password" className="font-white">
              Password
            </label>
          </div>

          <button
            onClick={attemptLogin}
            className={`sec-btn-light submit-btn
          ${darkMode ? 'sec-btn-dark' : 'sec-btn-light bg-white'}`}
          >
            Login
          </button>
        </form>

        <NavLink to={`/devjobs/signup`} className={`font-white sign-up-link`}>
          <p className="font-white ">Sign Up</p>
        </NavLink>
      </div>
    </main>
  )
}

export default Login
