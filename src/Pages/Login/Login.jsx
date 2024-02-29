import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { MDBInput } from 'mdb-react-ui-kit';

function Login({register}) {

  const registerForm = register? true : false

  return (
    <>
    <div className='container p-5'>
    {/* Back to Home */}
    <div className='mt-4'>
      <Link to={'/'} style={{textDecoration:'none'}} className='fs-5 text-primary'><i class="fa-solid fa-backward me-2"></i>Back to Home</Link>
    </div>

      <Row className='mt-4 pt-5'>
        <Col className='d-flex justify-content-center align-items-center'>

          {/* Card */}
          <div className="card p-3 shadow border border-3 border-groove">
            <Row>

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
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
                    <div className='d-flex justify-content-between gap-3 mb-3'>
                      <MDBInput label='First Name' type='text' />
                      <MDBInput label='Last Name' type='text' />
                    </div>
                    <MDBInput label='Username' type='text' className='mb-3' />
                    <MDBInput label='Phone no' type='text' className='mb-3' />
                    </div>
                  }
                  <MDBInput label='Email' type='text' className='mb-3'/>
                  <MDBInput label='Password' type='text' />
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