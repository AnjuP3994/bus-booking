import React,{ useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function AdminHeader() {
    
  const [viewLogout, setViewLogout] = useState(false);
  const [logout, setLogout] = useState("");
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();
    if (sessionStorage.getItem("token")) {
      setLogout(sessionStorage.removeItem("token"))
      // window.location.reload();
      navigate ('/admin/login')
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

          <Navbar.Brand /* href="/home" */ className='fs-3'>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1036/1036175.png"
              width="50"
              className="d-inline-block align-top "
            />
          <Link to={'/admin'} className='bus w-75'>Bus<span  style={{color:'brown'}}/* className='hub' */ className='ms-2 '>Hubb</span></Link>
          <p  className='ms-5 mt-3 ps-5 text-center' style={{color:'black'}}> 
         <Link to={'/managebus'} className='ms-5'  style={{color:'black',fontSize:'14px'}}>Manage Bus </Link>
         <Link to={'/manageuser'} className='ms-4' style={{color:'black',fontSize:'14px'}}>Manage User </Link>
         <Link to={'/admin/profile'} className='ms-4' style={{color:'black',fontSize:'14px'}}>Manage Profile</Link>
         <Link to={'/admin/operator'} className='ms-4' style={{color:'black',fontSize:'14px'}}>Manage Bus Operators</Link>
         <Link to={'/admin/paymentHistory'} className='ms-4' style={{color:'black',fontSize:'14px'}}>Payments</Link>
         <Link to={'/admin/allreservations'} className='ms-4' style={{color:'black',fontSize:'14px'}}>Reservations</Link>
         <Link to={'/admin/feedback'} className='ms-4' style={{color:'black',fontSize:'14px'}}>Feedback</Link>
          </p>
          </Navbar.Brand>
          {/* <Navbar.Toggle/> */}
          {viewLogout===false?<Link to={'/admin/login'} className="justify-content-end">
            <button id='btnnn' className='btn btn-outline-light'>Login or Create Account</button>
          </Link>:
          <button id='btnnn' className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
          }
          </Container>
      </Navbar>
    </>
  )
}

export default AdminHeader