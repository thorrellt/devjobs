import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DisplayContext } from '../../context/DisplayContext'
import './Login.css'

const Login = () => {
  const { darkMode, screenSize, logIn } = useContext(DisplayContext)

  const [loginState, setLoginState] = useState({
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

    setLoginState((prevFormState) => ({
      ...prevFormState,
      [name]: {
        ...prevFormState.name,
        value: newValue,
        valid: true,
      },
    }))
  }

  const setLoginValidity = (value) => {
    setLoginState((prevFormState) => ({
      ...prevFormState,
      valid: false,
    }))
  }

  const makeFieldInvalid = (inputField) => {
    setLoginState((prevState) => ({
      ...prevState,
      [inputField]: {
        ...prevState.inputField,
        valid: false,
      },
    }))
  }

  const checkCredentials = (event) => {
    if (
      loginState.user.value === 'admin' &&
      loginState.password.value === 'admin'
    ) {
      return true
    }

    return false
  }

  const attemptLogin = (event) => {
    event.preventDefault()

    let isFormValid = true

    for (const inputField in loginState) {
      if (loginState[inputField].value === '') {
        makeFieldInvalid(inputField)
        isFormValid = false
        setLoginValidity(false)
      }
    }

    if (checkCredentials()) {
      logIn()
      setLoginValidity(true)
      navigate('/devjobs')
    } else {
      setLoginValidity(false)
    }
  }

  /********************
    ON CLICK FUNCTIONS
   ********************/

  const setFormValid = (newState) => {
    setLoginState((prevState) => ({
      ...prevState,
      valid: newState,
    }))
  }

  const onSumbitClick = (event) => {
    event.preventDefault()

    let isFormValid = true

    for (const inputField in loginState) {
      if (loginState[inputField].value === '') {
        makeFieldInvalid(inputField)
        isFormValid = false
        setLoginValidity(false)
      }
    }

    if (isFormValid) {
      console.log('successful login')
    }
  }
  return (
    <main id="Login" className="flex-container">
      <div
        className={`main-container flex-container
      ${darkMode ? 'bg-blue-700' : 'bg-violet-500'}`}
      >
        <h1 className="font-white">Login</h1>
        {loginState.valid == false && (
          <p className="font-white error-text">
            Invalid Login. please try again
          </p>
        )}
        <form className="flex-container">
          <div className="input-container flex-container">
            {loginState.user.valid === false && (
              <span className="input-error font-white">
                This field can't be empty
              </span>
            )}
            <input
              onChange={onFormChange}
              type="text"
              id="user"
              name="user"
              value={loginState.user.value}
              className="bg-white"
            />
            <label htmlFor="user" className="font-white">
              Username
            </label>
          </div>

          <div className="input-container flex-container">
            {loginState.password.valid === false && (
              <span className="input-error font-white">
                Must include a password
              </span>
            )}
            <input
              onChange={onFormChange}
              type="password"
              id="password"
              name="password"
              value={loginState.password.value}
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
