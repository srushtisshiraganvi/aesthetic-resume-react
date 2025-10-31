import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Preview from './pages/Preview'

const App = () => {

  
  let router=createBrowserRouter([
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"home",
      element:<Create></Create>
    },
    {
      path:"preview",
      element:<Preview></Preview>
    },
    {
      path:"create",
      element:<Create></Create>
    }
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App