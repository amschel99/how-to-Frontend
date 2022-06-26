import React from 'react'
import "./css/navbar.css"
import logo from "./images/brand.svg"
import cart from "./images/shopping-cart.png"

const Navbar = () => {
  return (
  <nav className='nav'>
<section>

 <img className='logo' src={logo} alt="logo"/>
</section>
<section>
  <input className='input' type="text" placeholder="what are you looking for"/>
</section>
<section>
  <select>
    <option>KSH</option>
    <option>USD</option>
  </select>
</section>
<section>
<img className='cart' src={cart} alt="shopping-cart"/>
</section>

  </nav>
  )
}

export default Navbar