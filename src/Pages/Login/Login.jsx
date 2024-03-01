import React, { useEffect, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import { MDBTextArea } from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Login({register}) {

  const registerForm = register? true : false

  const [dob, setDOB] = useState(null);

  const handleDateChange = (date) => {
    setDOB(date);
  };
  
  const [userDetails, setUserDetails] = useState({
    name:"",
    phone:"",
    username:"",
    password:"",
    date_of_birth:"",
    address:"",
    profile_picture:""
  })
  console.log(userDetails);

  //to hold image url
  const [image, setImage] = useState("")  

  useEffect(()=>{
    if (userDetails.profile_picture) {
      //convert project image into url
      setImage(URL.createObjectURL(userDetails.profile_picture))
    } 
  },[userDetails.profile_picture])
    

  return (
    <>
    {/* Back to Home */}
    <div className='m-5 ps-5'>
      <Link to={'/'} style={{textDecoration:'none'}} className='text-primary'><i class="fa-solid fa-backward me-2"></i>Back to Home</Link>
    </div>

    <div className='container mb-5 pb-5 d-flex justify-content-center align-items-center'>

      <Row className='mx-5'>
        <Col>

          {/* Card */}
          <div className="card p-3 shadow border border-3 border-groove">
            <Row>

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='d-flex justify-content-center align-items-center'>
                <img src="https://pitchmark.net/client/images/img-12.png" width={'100%'} alt="" />
              </Col>

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='d-flex justify-content-center flex-column text-center py-5'>
                <h1 className='text-primary'>Welcome Back!</h1>
                <h4 className='text-warning mb-4'>
                  {
                    registerForm? 'Sign up to your Account' : 'Sign in to your Account'
                  }
                </h4>
                <form className='mx-5'>
                  {
                    registerForm && 
                    <div>
                      <MDBInput value={userDetails.name} onChange={e=>setUserDetails({...userDetails,name:e.target.value})} label='Your name' type='text' className='mb-3' />
                    <div className='d-flex justify-content-between gap-3 mb-3'>
                      <Col><MDBInput value={userDetails.phone} onChange={e=>setUserDetails({...userDetails,phone:e.target.value})} label='Phone no' type='text'/></Col>
                      <Col value={userDetails.date_of_birth} onChange={e=>setUserDetails({...userDetails,date_of_birth:e.target.value})}><DatePicker
                        className='dob'
                        selected={dob}
                        onChange={handleDateChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        placeholderText="Select Date of Birth"
                      /></Col>
                    </div>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label className='d-flex text-start text-dark'>Upload your profile photo:</Form.Label>
                        <Form.Control onChange={e=>setUserDetails({...userDetails,profile_picture:e.target.files[0]})} type="file" />
                      </Form.Group>
                    </Form>
                    <MDBTextArea value={userDetails.address} onChange={e=>setUserDetails({...userDetails,address:e.target.value})} label='Address' className='mb-3' />
                    </div>
                  }
                  <MDBInput value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} label='Username' type='text' className='mb-3'/>
                  <MDBInput value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} label='Password' type='text' />
                  {
                    registerForm ?
                    <div>
                    <div className="text-center my-4">
                      <button id='button' className='btn btn-primary'>Register</button>
                    </div>
                    <p>Already have an Account? <Link to={'/login'} className='text-decoration-none'>Please Login Here</Link></p>
                    </div>
                    :
                    <div>
                    <div className="text-center my-4">
                      <button id='button' className='btn btn-primary'>Login</button>
                    </div>
                    <p>New to here? <Link to={'/register'} className='text-decoration-none'>Please Register!</Link></p>
                    </div>
                  }
                </form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

    </div>
    </>
  )
}

export default Login