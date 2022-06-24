import React from 'react'
import {Outlet} from "react-router-dom"
import SellerNav from '../components/SellerNav'

const HowToSell = () => {
  return (

    <>
   <SellerNav/>
    <Outlet/>
    </>
  )
}

export default HowToSell