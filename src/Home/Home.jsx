import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../image/icon.png';
import { Link } from 'react-router-dom';
import './Home.css';
import Banner from '../image/Banner.png';
import Beer from '../image/Beer.png'
import Wine from '../image/Wine.png'
import whiskey from '../image/whiskey.png'

export const Home = () => {
  return (
    <div className='Home'>
      <Navbar className='Nav' expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className='brand ms-2 fw-bold fs-2'><img src={icon} alt="icon" width="55" height="55" className="d-inline-block align-top me-2" />JD LIQUORSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#beer">BEER</Nav.Link>
              <Nav.Link href="#wine">WINE</Nav.Link>
              <Nav.Link href="#spirits">SPIRITS</Nav.Link>
            </Nav>
            <Link to='/login'><button className='btn btn-light'>Login</button></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container-fluid back'>
        <div className='row'>
          <div className='col-lg-6 text-center text-lg-left mt-5'>
            <div className="page-title">
              <h1 className="text-black fw-bold font-weight-bold mb-3 mb-md-4">
                Order alcohol for delivery or pickup
              </h1>
            </div>
            <div className="banner-keywords mb-3 mb-md-4">
              <p className="text-black">
                Get your favorite beer, wine &amp; spirits from nearby liquor stores
              </p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='banner'>
              <img src={Banner} className="img-fluid" alt="Banner" />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid p-1'>
        <div className='row p-0 m-0'>
          <div className='col-3 mt-5 p-0'>
            <a href="">
              <img src={Beer}  width="370" height="370" className='img-fluid beer' alt='' />
            </a>
          </div>
          <div className='col-3 mt-5 p-0'>
            <a href="">
              <img src={Wine} width="370" height="370" className='img-fluid wine' alt='' />
            </a>
          </div>
          <div className='col-3 mt-5  p-0'>
            <a href="">
            <img src={whiskey} width="250" height="250" className='img-fluid whiskey ' alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
