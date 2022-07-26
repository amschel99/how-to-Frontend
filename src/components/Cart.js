import React from 'react'
import cartImg from "./images/shopping-cart.png"
import { useSelector,useDispatch } from 'react-redux'
import {Link} from "react-router-dom"

import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {sort} from "../feautures/Sort/sortSlice"


const Cart = () => {

   const dispatch= useDispatch()
  const cart= useSelector((state)=>state.cart)
  return (
    <div className='bg-sea-400   z-50 h-20 flex justify-evenly  fixed items-center w-screen flex-wrap'
   
    >

<a href="tel:+25477938563" className="flex"><FontAwesomeIcon icon={faPhone} className="cursor-pointer text-basic "/>
<p className="mx-2 text-xs">0777938563</p>
</a>
<select
 className=' w-12 bg-secondary '
 onChange={(e)=>{

 return dispatch(sort({sort:e.target.value}))


 }}
 >
      <option className='text-sm text-white' >SORT</option>
      <option 
     
      value="price" >sort from lowest to highest price</option>
       <option 
       
       value="-price">sort from highest to lowest price</option>
       <option 
       
       value="rating">sort by rating</option>
    </select>

<Link to='/activity' className='flex justify-between'>
 
<img className='h-10' src={cartImg} alt="shopping-cart"/>
<p className='relative bottom-4 right-4'>{cart.totalItems}</p>


</Link>

    </div>
  )
}

export default Cart