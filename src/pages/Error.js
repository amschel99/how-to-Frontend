import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
   <div>
    <h1 style={{color:"red"}}>PAGE NOT FOUND</h1>
 <Link to="/"><button>GO BACK HOME</button></Link>   
    
   </div>
  )
}

export default Error