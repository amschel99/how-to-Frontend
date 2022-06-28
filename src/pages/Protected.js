import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import Order from './Order'

const Protected = () => {
    const location= useLocation()
const {auth}= useAuth()
  return (
    <>
   <Order/>
  {
auth?.user?<Outlet/>:<Navigate to ="/login" state={{from:location}} replace/>
  }
    </>

  )
}

export default Protected