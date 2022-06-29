import {Route, Routes} from "react-router-dom"
import Welcome from "./pages/welcome/Welcome"
import Error from "./pages/Error"

import React from 'react'

import Register from "./pages/account/Register"
import Login from "./pages/account/Login"
import Protected from "./pages/Protected"
import PersistentLogin from "./components/PersistentLogin"
import Order from "./pages/Order"

const App = () => {
  return (

 <Routes>

<Route path="/" element={<Welcome/>}/>



  <Route path="account" element={<Register/>} />
    <Route path="login" element={<Login/>} />










   {/* we want to protect these routes */}



<Route element={ <PersistentLogin> <Protected/></PersistentLogin> }>  <Route path="activity" element={
<Order/>

}/>


</Route>
{/*done protecting them damn routes */}






  
  
  




<Route path="*" element={<Error/>} />
 </Routes>
  )
}

export default App