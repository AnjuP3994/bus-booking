import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import { MDBTextArea } from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { loginAPI, registerAPI } from '../../Services/allAPIs';
import Swal from 'sweetalert2';


function Login({ register }) {

  const registerForm = register ? true : false
  const [img, setImg] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImg(file);
    setUserDetails((details) => ({
      ...details,
      profile_picture: file
    }))
  }

  const [dob, setDOB] = useState(null);
  const handleDateChange = (date) => {
    setDOB(date);
    setUserDetails({
      ...userDetails,
      date_of_birth: date.toLocaleDateString(),
    });
  };


  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    username: "",
    password: "",
    date_of_birth: "",
    address: "",
    profile_picture: ""
  })
  console.log(userDetails);

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, phone, username, password, date_of_birth, address, profile_picture } = userDetails;
    if (!name || !phone || !date_of_birth || !profile_picture || !address || !username || !password) {
      Swal.fire({
        title: "incomplete form",
        text: `please fill the form completely`,
        icon: "warning"
      });
      return;
    } 
    else {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("phone", phone);
      reqBody.append("username", username);
      reqBody.append("password", password);
      reqBody.append("date_of_birth", date_of_birth);
      reqBody.append("address", address);
      reqBody.append("profile_picture", profile_picture);

      const reqHeader = {
        "Content-Type": "multipart/form-data",
      };

      try {
        const result = await registerAPI(reqBody, reqHeader);
        console.log(result)
        if (result.status === 200) {
          Swal.fire({
            title: "Registration Successfull",
            text: `${result.data.name} has been Registered successfully`,
            icon: "success"
          });
          setUserDetails({
            name: "",
            phone: "",
            username: "",
            password: "",
            date_of_birth: "",
            address: "",
            profile_picture: ""
          })
          navigate('/login')
        } else {
          console.log(result.response.data);
          Swal.fire({
            title: "error",

            icon: "error"
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleLogin = async(e)=>{
    e.preventDefault();
    if (!userDetails.username || !userDetails.password) {
      Swal.fire({
        title: "incomplete form",
        text: `please fill the form completely`,
        icon: "warning"
      });
    } else {
        const result = await loginAPI(userDetails)
        console.log(result);
        if (result.status==200) {
          Swal.fire({
            title: "Login Successfull",
            icon: "success"
          });
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
            sessionStorage.setItem("token",result.data.token) //to set token into sessionStorage
            setUserDetails({
                username:"",
                password:""
            })
            navigate('/')
        } 
        else {
            alert("Login Failed.")
        }
    }
}


  return (
    <>
      {/* Back to Home */}
      <div className='m-5 ps-5'>
        <Link to={'/'} style={{ textDecoration: 'none' }} className='text-primary'><i class="fa-solid fa-backward me-2"></i>Back to Home</Link>
      </div>

      <div className="mx-5">
        <div className='container mb-5 pb-5 d-flex justify-content-center align-items-center'>

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
                    registerForm ? 'Sign up to your Account' : 'Sign in to your Account'
                  }
                </h4>
                <form className='mx-5'>
                  {
                    registerForm &&
                    <div>
                      <MDBInput value={userDetails.name} onChange={e => setUserDetails({ ...userDetails, name: e.target.value })} label='Your name' type='text' className='mb-3' />
                      <div className='d-flex justify-content-between gap-3 mb-3'>
                        <Col><MDBInput value={userDetails.phone} onChange={e => setUserDetails({ ...userDetails, phone: e.target.value })} label='Phone no' type='text' /></Col>
                        <Col><DatePicker
                          className='dob'
                          selected={dob}
                          value={userDetails.date_of_birth}
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
                          <Form.Control onChange={handleImageChange} type="file" />
                        </Form.Group>
                      </Form>
                      <MDBTextArea value={userDetails.address} onChange={e => setUserDetails({ ...userDetails, address: e.target.value })} label='Address' className='mb-3' />
                    </div>
                  }
                  <MDBInput value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} label='Username' type='text' className='mb-3' />
                  <MDBInput value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} label='Password' type='password' />
                  {
                    registerForm ?
                      <div>
                        <div className="text-center my-4">
                          <button onClick={handleRegister} id='button' className='btn btn-primary'>Register</button>
                        </div>
                        <p>Already have an Account? <Link to={'/login'} className='text-decoration-none'>Please Login Here</Link></p>
                      </div>
                      :
                      <div>
                        <div className="text-center my-4">
                          <button onClick={handleLogin} id='button' className='btn btn-primary'>Login</button>
                        </div>
                        <p>New to here? <Link to={'/register'} className='text-decoration-none'>Please Register!</Link></p>
                      </div>
                  }
                </form>
              </Col>
            </Row>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login