import {Route, Routes} from "react-router-dom"
import Welcome from "./pages/welcome/Welcome"
import HowToSell from "./pages/HowToSell"

import React from 'react'
import HowToSellHome from "./components/HowToSellHome"
import Register from "./pages/account/Register"
import Login from "./pages/account/Login"
const App = () => {
  return (

 <Routes>

<Route path="/" element={<Welcome/>}/>
<Route path='seller' element={<HowToSell/>}>
  <Route index element={<HowToSellHome/>}/>

  <Route path="account" element={<Register/>} />
    <Route path="login" element={<Login/>} />
</Route>




 </Routes>
  )
}

export default App