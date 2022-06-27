import {Route, Routes} from "react-router-dom"
import Welcome from "./pages/welcome/Welcome"


import React from 'react'

import Register from "./pages/account/Register"
import Login from "./pages/account/Login"
import Protected from "./pages/Protected"
const App = () => {
  return (

 <Routes>

<Route path="/" element={<Welcome/>}/>



  <Route path="account" element={<Register/>} />
    <Route path="login" element={<Login/>} />


    <Route path="/user" element={<Protected/>}>
      
      <Route path="dashboard" element={<h1>Dashboard</h1>}/>



    </Route>





 </Routes>
  )
}

export default App