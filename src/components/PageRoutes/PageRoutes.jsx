import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'

const PageRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </div>
  )
}

export default PageRoutes