import {Route, Routes} from "react-router-dom"
import Welcome from "./pages/welcome/Welcome"


import React from 'react'

import Register from "./pages/account/Register"
import Login from "./pages/account/Login"
const App = () => {
  return (

 <Routes>

<Route path="/" element={<Welcome/>}/>



  <Route path="account" element={<Register/>} />
    <Route path="login" element={<Login/>} />





 </Routes>
  )
}

export default App