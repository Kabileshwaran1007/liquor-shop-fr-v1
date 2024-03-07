import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../image/icon.png'
import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  return (
    <Navbar className='Nav' data-bs-theme="dark">
      <img src={icon} alt="icon" width="55" height="55" className="d-inline-block ms-3 align-top" />
      <Navbar.Brand href="#home" className='ms-2'>JD LIQUORSHOP</Navbar.Brand>
      <Container>
        <Nav className="me-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Link to='/login'><button className='btn btn-light '>Login</button></Link>
      </Container>
    </Navbar>
  )
}