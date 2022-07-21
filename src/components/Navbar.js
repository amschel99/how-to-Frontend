import React from 'react'

import logo from "./images/brand.svg"
import cartImg from "./images/shopping-cart.png"
import searchImg from "./images/magnifying-glass.png"

import {Link} from "react-router-dom"
import {useAuth} from "../hooks/useAuth"
import { useSelector,useDispatch } from 'react-redux'
import {search} from "../feautures/search/searchSlice"
import {sort} from "../feautures/Sort/sortSlice"



const Navbar = () => {
  const dispatch= useDispatch()
  const cart= useSelector((state)=>state.cart)
  const searchState= useSelector((state)=>state.search)
  const[value, setValue]=React.useState("")



let activity="/activity"



 
  return (
  <nav className="flex items-center justify-between bg-primary flex-wrap w-screen " >
<section className='flex   lg:w-1/2 xlg:w-1/2 sm:w-screen md:w-3/4 w-screen justify-around '>

 <img className='h-20' src={logo} alt="logo"/>
 <section className='flex items-center lg:w-1/2 xlg:w-1/2 sm:w-3/4 md:w-3/4 w-3/4 '>
 
  <input 
  onChange={(e)=>{
    setValue(e.target.value)
     
  }}
  className='h-6 w-full bg-dodger  placeholder-white  outline-none border-0 text-white focus:cursor-text rounded-r-full' type="text" placeholder="search..."/>
<img className='h-6 relative right-6'  src={searchImg} alt="search" 
onClick={()=>{
   console.log(searchState.search)
  return  dispatch(search({search:value}))
 
}}
/>
 
</section>
<section className='flex mt-5 lg:w-32 xlg:w-32 md:w-22 sm:w-22 w-22  pr-10  justify-start  items-start '>
 
 
<Link to={activity} className='flex justify-between'>
 
<img className='h-10' src={cartImg} alt="shopping-cart"/>
<p className='relative bottom-4 right-4'>{cart.totalItems}</p>


</Link>




</section>

</section>
<section>

  <select
 className=' w-1/4 lg:static xlg:static sm:hidden md:hidden lg:block xlg:block hidden rounded-lg bg-dodger text-white text-sm lg:block none   '
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
</section>












  </nav>
  )
}

export default Navbar





