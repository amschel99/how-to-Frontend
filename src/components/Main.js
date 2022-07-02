import React from 'react'
import axios from "axios"
import { useQuery, useQueryClient } from 'react-query'
import {motion} from "framer-motion"
import "./css/Main.css"


const Main = () => {
  
const fetchProducts= async ()=>{
const response= await axios.get("https://amschel-products.herokuapp.com")
console.log(response)
return await response.data
}
const{isLoading, isError,data}= useQuery("products", fetchProducts)
if(isLoading){
  return <>
  <h5>loading ... Be patient</h5>
  </>
}
if(isError){
  return <>

<h5>An error occured, our engineers are working on it</h5>
</>

}


  return (
    <div className='caraousel'>
 

       {data.map((product)=>{
        return <div className='product' key={product.image} >
        
          <img  src={product.image} alt="product"/>
          <h5>{product.name.substring(0,20)}</h5>
          <h6>{product.price}</h6>
       
        </div>
       })}
         
    </div>

  )
}

export default Main