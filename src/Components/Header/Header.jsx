import React from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="nav py-2" expand="lg" fixed="top">
          <Container>

          <Navbar.Brand href="/" className='fs-3'>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1036/1036175.png"
              width="50"
              className="d-inline-block align-top me-2"
            />{' '}
            <span className='bus'>Bus</span><span className='hub'>Hubb</span>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Link to={'/login'} className="justify-content-end">
            <button id='btnnn' className='btn btn-outline-light'>Login or Create Account</button>
          </Link>

          </Container>
      </Navbar>
    </>
  )
}

export default Header