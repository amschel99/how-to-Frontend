import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import DashBoard from './DashBoard'

const Protected = () => {
    const location= useLocation()
const {auth}= useAuth()
  return (
    <>
    <DashBoard/>
  {
auth?.user?<Outlet/>:<Navigate to ="/login" state={{from:location}} replace/>
  }
    </>

  )
}

export default Protected