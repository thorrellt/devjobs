import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import Home from './pages/Home'
import Job from './pages/Job'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

/********
  ROUTER
 ********/
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'job',
        element: <Job />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
