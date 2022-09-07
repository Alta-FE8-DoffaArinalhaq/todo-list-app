import React from 'react';
import '../style/NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbrand">MOVIES</Navbar.Brand>
          <Nav className="me-auto ">
            <Link to="/" className="home">
              Home
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
