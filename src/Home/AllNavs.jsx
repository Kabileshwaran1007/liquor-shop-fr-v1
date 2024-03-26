import React from 'react'
import './AllNavs.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../image/icon.png';
import { Link } from 'react-router-dom';
export const AllNavs = () => {
    return (
        <div> <Navbar className='Nav' expand="lg" variant="dark">
            <Container fluid>
                <Link to='/' className='jd'>
                    <Navbar.Brand className='brand ms-2 fw-bold fs-2'><img src={icon} alt="icon" width="55" height="55" className="d-inline-block align-top me-2 " />JD SHOP</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className='mt-1 ms-4 li'>
                            <Link className='link text-white mr-2 ms-4 ' to='/'>HOME</Link>
                            <Link className='link text-white mr-2 ms-4' to='/beer'>BEER</Link>
                            <Link className='link text-white mr-2 ms-4' to='/wine'>WINE</Link>
                            <Link className='link text-white mr-2 ms-4' to='/spirits'>SPIRITS</Link>
                        </div>
                    </Nav>
                    <Link to='/login'>
                        <button className='btn btn-light'>Login</button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar></div>
    )
}
