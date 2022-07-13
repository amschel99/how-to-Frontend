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



const Navbar = () => {
  const dispatch= useDispatch()
  const cart= useSelector((state)=>state.cart)



let activity="/activity"



 
  return (
  <nav className='nav'>
<section>

 <img className='logo' src={logo} alt="logo"/>
</section>
<section>
  <input 
  onChange={(e)=>dispatch(search({search:e.target.value}))}
  className='input' type="text" placeholder="what are you looking for"/>
<img className='search'  src={searchImg} alt="search" />
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