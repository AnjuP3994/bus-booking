import React, { useEffect, useState } from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {

  const [viewLogout, setViewLogout] = useState(false);
  const [logout, setLogout] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    if (sessionStorage.getItem("token")) {
      setLogout(sessionStorage.removeItem("token"))
      window.location.reload();
    } else {
      console.log("Existing user not found in sessionStorage");
    }
  }

  const checklogout=()=>{
    if(sessionStorage.getItem('token')){
      setViewLogout(true)
    }
    else{
      setViewLogout(false)
    }
  }

  useEffect(()=>{
    checklogout()
  },[])

  return (
    <>
    <Navbar className="nav py-2" expand="lg" fixed="top">
          <Container>

          <Navbar.Brand href="/home" className='fs-3'>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1036/1036175.png"
              width="50"
              className="d-inline-block align-top me-2"
            />{' '}
            <span className='bus'>Bus</span><span className='hub'>Hubb</span>
          </Navbar.Brand>

          <Navbar.Toggle />

          {viewLogout===false?<Link to={'/login'} className="justify-content-end">
            <button id='btnnn' className='btn btn-outline-light'>Login or Create Account</button>
          </Link>:
          
          <button id='btnnn' className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
        
          }

          </Container>
      </Navbar>
    </>
  )
}

export default Header