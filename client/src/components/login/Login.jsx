import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Login.css'

const Login = () => {
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

    setFormState((prevFormState) => ({
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
    <main>
      <h1>Login</h1>
      <p>Unable to Find username/password. please try again</p>
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
          />
          <label htmlFor="user">User Name</label>
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
          />
          <label htmlFor="email">Password</label>
        </div>
      </form>
    </main>
  )
}

export default Login
