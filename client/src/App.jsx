import { useState, useContext, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Searchbar from './components/home/searchbar/Searchbar'
import { Outlet, useLocation } from 'react-router-dom'
import {
  DisplayContextProvider,
  DisplayContext,
} from './context/DisplayContext'
import { isActiveAuth } from './data/api'

const App = () => {
  const [darkMode, setTestState] = useState(true)
  return (
    <DisplayContextProvider>
      <Page />
    </DisplayContextProvider>
  )
}

const Page = () => {
  const { darkMode, logOut, setLoggedIn } = useContext(DisplayContext)
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userName = localStorage.getItem('userName')
    if (token && userName) {
      console.log('token found')

      const checkLogin = async () => {
        await isActiveAuth({ token: token })
          .then((res) => {
            console.log('res:: ' + res)
            const favorites = JSON.parse(res.response).favorites
            console.log(favorites)
            if (res.status === 200) {
              console.log('logged in')
              setLoggedIn()
              localStorage.setItem('favorites', favorites)
            }
            if (res.status === 401) {
              console.log('logged out')
              logOut()
            }
          })
          .catch(() => {
            console.log('logged out')
            logOut()
          })
      }

      checkLogin()
    } else {
      logOut()
    }
  }, [])

  return (
    <div
      className={`App flex-container ${
        darkMode ? 'bg-midnight' : 'bg-gray-300'
      }`}
    >
      <Navbar />
      <Outlet />
    </div>
  )
}

export { App }
