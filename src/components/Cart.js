import React from 'react'
import cartImg from "./images/shopping-cart.png"
import { useSelector,useDispatch } from 'react-redux'
import {Link} from "react-router-dom"

import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {sort} from "../feautures/Sort/sortSlice"
import {ram} from "../feautures/ram/ramSlice"
import {os} from "../feautures/os/osSlice"
import {disk} from "../feautures/disk/diskSlice"


const Cart = () => {

   const dispatch= useDispatch()
  const cart= useSelector((state)=>state.cart)
  return (
    <div className='bg-sea-400   z-40 lg:h-[200px] xlg:h-[200px] sm:h-[200px] md:h-[200px] h-[200px] flex justify-evenly  fixed items-start w-screen  flex-wrap'
>

<a href="tel:+25477938563" className="flex mt-3"><FontAwesomeIcon icon={faPhone} className="cursor-pointer text-basic "/>
<p className="mx-2 text-xs">0777938563</p>
</a>


<select  className=' w-10 bg-secondary ml-1 mt-3 '
onChange={(e)=>{

 return dispatch(ram({ram:e.target.value}))


 }}
>
  <option>ram</option>
    <option value="4gb">4gb</option>
    <option value="8gb">8gb</option>
        <option value="16gb">16gb</option>
</select>

<select  className=' w-10 bg-secondary ml-1 mt-3'
onChange={(e)=>{

 return dispatch(disk({disk:e.target.value}))


 }}
>
  <option>disk</option>
    <option value="hdd">Hdd</option>
    <option value="ssd">ssd</option>
</select>
<select  className=' w-10 bg-secondary m1-1 mt-3 '
onChange={(e)=>{

 return dispatch(os({os:e.target.value}))


 }}
 >
  <option>os</option>
    <option value="windows">windows</option>
    <option value="chrome">Chrom OS</option>
    <option  value="mac">IOS</option>
</select>








<select
 className=' w-12 bg-secondary mt-3 '
 onChange={(e)=>{

 return dispatch(sort({sort:e.target.value}))


 }}
 >
      <option className='text-xs text-white' >sort</option>
      <option 
     
      value="price" >Lowest to highest Price </option>
       <option 
       
       value="-price"> Highest to lowest price</option>
    
    </select>

<Link to='/activity' className='flex justify-between mt-3'>
 
<img className='h-8' src={cartImg} alt="shopping-cart"/>
<p className='relative bottom-4 right-4'>{cart.totalItems}</p>


</Link>
<div className="flex w-screen justify-center items-start lg:ml-20 xlg:ml-20  flex-wrap">
<a href="https://wa.me/+254790569556" className='flex justify-start font-bold font-heading cursor-pointer'> 
Enquire now
 <img className="w-6 mx-2" src="https://img.icons8.com/ios-filled/50/228BE6/whatsapp--v1.png" alt="whatsapp"/></a>

<h3> Mpesa Paybill <span className='font-bold text-pink-400 font-heading'>23456789</span></h3>
</div>
    </div>
  )
}

export default Cart