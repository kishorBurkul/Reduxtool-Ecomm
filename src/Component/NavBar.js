import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () =>{


    //in the useSelector we getting data from store reducer property and cart is property name 
    const cartProduct = useSelector(state => state.cart);
  return (
 
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand >Shakti Cloth</Navbar.Brand>
         <Nav>
          <Nav.Link to="/" as={Link}>Product</Nav.Link>
          </Nav>

      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Toggle/>
        <Navbar.Text>
          <Nav.Link to="/cart" as={Link} >MY Bag{cartProduct.length} </Nav.Link>
          
        </Navbar.Text>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavBar