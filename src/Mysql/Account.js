import React from 'react'

import {Nav,Navbar,Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const Account = () => {
  return (
 <div>
  <Navbar  variant="dark" bg="dark" expand="sm">
<Container>
    <Navbar.Brand>CHITTY CHAT</Navbar.Brand>
    <Navbar.Collapse>

        <Nav className="me-auto">
<Nav.Link>Home</Nav.Link>
<Nav.Link>About</Nav.Link>
<Nav.Link>Contact</Nav.Link>

        </Nav>
    </Navbar.Collapse>

</Container>
  </Navbar>
  

 </div>
  )
}

export default Account