import React from 'react'
import "./css/navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
  <nav className='nav'>

<section className='logo'>
<h1>E-papers


</h1>
<span>explore ebooks, pay via M-pesa</span>

  
</section>

<div className='categories'>
<section className='category'>

    <select>
       <option>All</option>
      <option>Informational</option>
       <option>fictional</option>
    </select>

</section>
<section className="category">
<Link to="/seller">  <h5>Sell Ebooks</h5></Link>
  
</section >

</div>


  </nav>
  )
}

export default Navbar