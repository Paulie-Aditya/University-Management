import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default Routes