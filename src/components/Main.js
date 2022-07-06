import React from 'react'
import axios from "axios"
import { useQuery, } from 'react-query'
import {  useDispatch } from 'react-redux'
import {itemAdded} from "../feautures/cart/cartSlice"
import Loader from './Loader'

import "./css/Main.css"



const Main = () => {
  
  

  const dispatch= useDispatch()

  const addtoCart= (product)=>{
    const{name, price,image}=product
 
 
dispatch((itemAdded({name,price,image})))


  }
  
const fetchProducts= async ()=>{
const response= await axios.get("https://amschel-products.herokuapp.com/")

return await response.data
}
const{isLoading, isError,data}= useQuery("products", fetchProducts)
if(isLoading){
  return <>
  <Loader/>
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
          <h3 className='name'>{product.name.substring(0,20)}</h3>
          <h2 className='price'>{product.price} $</h2>
          <button className='btn-cart' onClick={()=>addtoCart(product)}>Add To Cart</button>
       
        </div>
       })}
         
    </div>

  )
}

export default Main