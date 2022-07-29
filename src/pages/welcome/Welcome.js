import React from 'react'
import "./welcome.css"
import Navbar from '../../components/Navbar'

import Main from "../../components/Main"

const Welcome = ({products, setProducts}) => {

  return (
    <>
    <Navbar/>
   <Main products={products} setProducts={setProducts}/>
    
    </>
  )
}

export default Welcome