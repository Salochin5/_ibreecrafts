import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

const Header = () => {
 return (
  <header>
   <Navbar bg='light' variant='light' className='mb-3' collapseOnSelect>
    <Container>
     <LinkContainer to='/'>
      <Navbar.Brand>iBreeCrafts</Navbar.Brand>
     </LinkContainer>
     <Navbar.Offcanvas placement='end'>
      <Offcanvas.Header closeButton>
       <Offcanvas.Title>ibreecrafts</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <Nav className='justify-content-end flex-grow-1 pe-3'>
        <LinkContainer to='/cart'>
        <Nav.Link>
         <i className='fas fa-shopping-cart'></i> cart
        </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
        <Nav.Link>
         <i className='fas fa-user'></i> sign-in
        </Nav.Link>
        </LinkContainer>
       </Nav>
      </Offcanvas.Body>
     </Navbar.Offcanvas>
    </Container>
   </Navbar>
  </header>
 );
};

export default Header;
