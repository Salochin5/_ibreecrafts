import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

const Header = () => {
 return (
  <header>
   <Navbar bg='light' variant='light' className='mb-3' collapseOnSelect>
    <Container>
     <Navbar.Brand href='/'>iBreeCrafts</Navbar.Brand>
     <Navbar.Offcanvas placement='end'>
      <Offcanvas.Header closeButton>
       <Offcanvas.Title>ibreecrafts</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <Nav className='justify-content-end flex-grow-1 pe-3'>
        <Nav.Link href='/cart'>
         <i className='fas fa-shopping-cart'></i> cart
        </Nav.Link>
        <Nav.Link href='/login'>
         <i className='fas fa-user'></i> sign-in
        </Nav.Link>
       </Nav>
      </Offcanvas.Body>
     </Navbar.Offcanvas>
    </Container>
   </Navbar>
  </header>
 );
};

export default Header;
