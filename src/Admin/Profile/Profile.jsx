import React from 'react'
import './Profile.css'
import { Row,Col } from 'react-bootstrap'
import admin_img from '../../Pages/assets/836.jpg'

function Profile() {
  return (
    <>
        <div>
            {/* <Row>
                <Col lg={6} sm={12}  >
                   <div className='d-flex justify-content-center align-items-center'> <img src={admin_img} height={'700px'} alt="" /></div>


                </Col>
                <Col lg={6} sm={12}>
              

                </Col>
            </Row> */}
             <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
    
                <div className="card bg-glass">
                  <div className="card-body px-4 py-5 px-md-5">
                    <form>
                       <div className='d-flex justify-content-center'> <img src={admin_img} alt="" height={'100px'} style={{borderRadius:'50%'}} /></div>
                      {/* <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" />
                            <label className="form-label text-light" htmlFor="form3Example1">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" />
                            <label className="form-label text-light" htmlFor="form3Example2">Last name</label>
                          </div>
                        </div>
                      </div> */}
                      <Row className='mt-5'>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example3" className="form-control text-light" />
                        <label className="form-label text-light" htmlFor="form3Example3">First Name</label>
                      </div>

                        </Col>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <input  type="password" id="form3Example4" className="form-control text-light" />
                        <label className="form-label text-light" htmlFor="form3Example4">Last Name</label>
                      </div>

                        </Col>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control text-light" />
                        <label className="form-label text-light" htmlFor="form3Example3">Email</label>
                      </div>

                        </Col>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <input  type="password" id="form3Example4" className="form-control text-light" />
                        <label className="form-label text-light" htmlFor="form3Example4">Username</label>
                      </div>

                        </Col>
                      </Row>
                      
                   
    
                      
    
                     
    
                      <div className="form-check d-flex justify-content-center mb-4">
                        {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label className="form-check-label" htmlFor="form2Example33">
                          Subscribe to our newsletter
                        </label> */}
                        {/* <p className='text-light'>Already have a Account?Please login?</p> */}
                      </div>
    
                     <div className=' d-flex justify-content-center'>
                          <button type="submit" className="btn btn-primary btn-block mb-4 w-50">
                           Update
                          </button>
                     </div>
    
                     
                    </form>
                  </div>
                </div>
              </div>
               </div>

        </div>
    </>
  )
}

export default Profile