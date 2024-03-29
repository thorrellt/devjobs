import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DisplayContext } from '../../context/DisplayContext'
import { loginUser } from '../../data/api'
import './Login.css'

const Login = () => {
  /*******
    HOOKS
   *******/
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
    errorMsg: '',
  })

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

  const setLoginValidityTo = (value) => {
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

  const areCredentialsValid = (event) => {
    if (
      formState.user.value === 'admin' &&
      formState.password.value === 'admin'
    )
      return true

    return false
  }

  const areInputFieldsValid = () => {
    let valid = true
    if (formState.user.value === '' && formState.password.value === '') {
      return true
    }
    for (const inputField in formState) {
      if (formState[inputField].value === '') {
        makeFieldInvalid(inputField)
        valid = false
      }
    }
    return valid
  }

  const updateErrorMsg = (message) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      errorMsg: message,
    }))
  }

  const onSubmitClick = async (event) => {
    event.preventDefault()

    const formIsValid = areInputFieldsValid()

    if (formIsValid) {
      let userCredentials =
        formState.user.value === '' && formState.password.value === ''
          ? { name: 'guest', password: 'guest' }
          : {
              name: formState.user.value,
              password: formState.password.value,
            }

      await loginUser(userCredentials).then((res) => {
        const status = res.request.status
        console.log('status:  ' + status)
        if (status === 200) {
          console.log(res.data)
          logIn({
            name: res.data.name,
            favorites: res.data.favorites,
            token: res.data.token,
            _id: res.data._id,
          })
          setLoginValidityTo(true)
          navigate('/devjobs/')
          return true
        }

        if (status === 401) {
          updateErrorMsg('Authorization Failed')
        }

        if (status === 500) {
          updateErrorMsg('Server Error')
        }
      })
    }

    setLoginValidityTo(false)
  }

  return (
    <main id="Login" className="flex-container">
      <div
        className={`form-container flex-container
      ${darkMode ? 'bg-blue-700' : 'bg-violet-500'}`}
      >
        {/* error message for invalid form */}
        <h1 className="font-white">Login</h1>
        {formState.valid == false && (
          <p className="font-white error-text">
            Invalid Login. please try again
          </p>
        )}

        {/* form fields */}
        <form className="flex-container">
          {/* user name */}
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

          {/* password */}
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

          {/* login submission button */}
          <button
            onClick={onSubmitClick}
            className={`sec-btn-light submit-btn
          ${darkMode ? 'sec-btn-dark' : 'sec-btn-light bg-white'}`}
          >
            {formState.user.value === '' && formState.password.value === ''
              ? 'Guest'
              : 'Login'}
          </button>
        </form>

        {/* sign up link */}
        <NavLink to={`/devjobs/signup`} className={`font-white sign-up-link`}>
          <p className="font-white ">Sign Up</p>
        </NavLink>
      </div>
    </main>
  )
}

export default Login
