import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Login.css'

const Login = () => {
  const { darkMode, screenSize } = useContext(DisplayContext)

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

  /********************
    ON CLICK FUNCTIONS
   ********************/

  const setFormValid = (newState) => {
    setLoginState((prevState) => ({
      ...prevState,
      valid: newState,
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

  const onSumbitClick = (event) => {
    event.preventDefault()

    let isFormValid = true

    for (const inputField in loginState) {
      if (inputField !== 'updates' && loginState[inputField].value === '') {
        makeFieldInvalid(inputField)
        isFormValid = false
        setFormValid(false)
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
        <p className="font-white error-text">Invalid Login. please try again</p>
        <form className="flex-container">
          <div className="input-container flex-container">
            {loginState.user.valid === false && (
              <span className="input-error">This field can't be empty</span>
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
              <span className="input-error">Must include a password</span>
            )}
            <input
              onChange={onFormChange}
              type="email"
              id="password"
              name="password"
              value={loginState.password.value}
              className="bg-white"
            />
            <label htmlFor="email" className="font-white">
              Password
            </label>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
