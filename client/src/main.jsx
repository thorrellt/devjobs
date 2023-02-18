import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import Home from './components/home/Home'
import Job from './components/job/Job'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import PostJob from './components/postJob/PostJob'
import EditJob from './components/editJob/EditJob'
import EditJobs from './components/editJobs/EditJobs'
import DeleteJob from './components/deleteJob/DeleteJob'
import Project from './components/project/Project'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import NoPageFound from './components/not_found/NotFound'

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
      {
        path: '/devjobs/login',
        element: <Login />,
      },
      {
        path: '/devjobs/signup',
        element: <Signup />,
      },
      {
        path: '/devjobs/postjob',
        element: <PostJob />,
      },
      {
        path: '/devjobs/editjobs',
        element: <EditJobs />,
      },
      {
        path: '/devjobs/editjob/:id',
        element: <EditJob />,
      },
      {
        path: '/devjobs/deletejob',
        element: <DeleteJob />,
      },
      {
        path: '/devjobs/project',
        element: <Project />,
      },
      {
        path: '*',
        element: <NoPageFound />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
