import React from 'react'
import "./css/navbar.css"
import logo from "./images/brand.svg"
import cart from "./images/shopping-cart.png"
import search from "./images/magnifying-glass.png"
import account from "./images/add-friend.png"
import {Link} from "react-router-dom"


const Navbar = () => {
  


 
  return (
  <nav className='nav'>
<section>

 <img className='logo' src={logo} alt="logo"/>
</section>
<section>
  <input className='input' type="text" placeholder="what are you looking for"/>
<img className='search'  src={search} alt="search" />
</section>
<section>
  <select>
    <option>KSH</option>
    <option>USD</option>
  </select>
</section>
<section>
  <Link to="/account"><img className='cart' src={account} alt="shopping-cart"/>
 
  </Link>
  

<img className='cart' src={cart} alt="shopping-cart"/>

</section>



  </nav>
  )
}

export default Navbar