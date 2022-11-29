import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import Home from './components/home/Home'
import Job from './components/job/Job'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

/********
  ROUTER
 ********/
const router = createBrowserRouter([
  {
    path: '/devjobs',
    element: <App />,
    children: [
      {
        path: '/devjobs/',
        element: <Home />,
      },
      {
        path: '/devjobs/job/:id',
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
