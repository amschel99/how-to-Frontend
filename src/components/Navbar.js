import React from 'react'
import "./css/navbar.css"
import logo from "./images/brand.svg"
import cartImg from "./images/shopping-cart.png"
import searchImg from "./images/magnifying-glass.png"
import account from "./images/add-friend.png"
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
  <nav className='nav'>
<section>

 <img className='logo' src={logo} alt="logo"/>
</section>
<section>
 
  <input 
  onChange={(e)=>{
    setValue(e.target.value)
     
  }}
  className='input' type="text" placeholder="what are you looking for"/>
<img className='search'  src={searchImg} alt="search" 
onClick={()=>{
   console.log(searchState.search)
  return  dispatch(search({search:value}))
 
}}
/>
 <select
 onChange={(e)=>{

 return dispatch(sort({sort:e.target.value}))


 }}
 >
      <option >SORT</option>
      <option 
     
      value="price" >sort from lowest to highest price</option>{/* by price*/ }
       <option 
       
       value="-price">sort from highest to lowest price</option>{/* by -price*/ }
       <option 
       
       value="rating">sort by rating</option>{/* by rating*/ }
    </select>
</section>
<section>

 
</section>
<section className='shopping-car'>
 
  <p 
  style={{
    color:'#fff',
    fontSize:"x-large",
    position:'relative',
    left:"25px",
    top:"10px"
  }}
   className='item-numbers'>{cart.totalItems}</p>
<Link to={activity} >
<img className='cart' src={cartImg} alt="shopping-cart"/>

</Link>

<Link className='account' to="/account"><img className='cart account' src={account} alt="shopping-cart"/>
 
  </Link>


</section>



  </nav>
  )
}

export default Navbar