import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'




const Protected = () => {
 
    const location= useLocation()
const {auth}= useAuth()
  return (
    <>
 <h1>Okay mofo, you are logged IN, HAPPY NOW?</h1>

  {
auth?.user?<Outlet/>:<Navigate to ="/login" state={{from:location}} replace/>
  }
    </>

  )
}

export default Protected