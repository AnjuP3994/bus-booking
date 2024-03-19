import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './dashboard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profile from '../../Pages/assets/836.jpg'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bus from '../../Pages/assets/group-buses-driving-along-road-sunset.jpg'
import user from '../../Pages/assets/take-look-text-message-i-have-received.jpg'
import payment from '../../Pages/assets/contactless-cashless-payment-through-mobile-banking.jpg'
import feedback from '../../Pages/assets/9834.jpg'
// import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import AdminHeader from '../Header/AdminHeader';



function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <AdminHeader/>
        <Carousel data-bs-theme="dark" className='rounded'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bus} style={{ height: '500px' }}
              alt="First slide"
            />
            <Carousel.Caption className='d-flex justify-content-center'>
              <div className='card' style={{ width: '15rem', backgroundColor: '#b9b6b6', height: '6rem' }}>
                <h4 className='text-dark'>Manage Bus</h4>
                <div className='d-flex justify-content-center'>  <button className='btn btn-success w-50'>Go</button></div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={user} style={{ height: '500px' }}
              alt="Second slide"
            />
            <Carousel.Caption className='d-flex justify-content-center'>
              <div className='card' style={{ width: '15rem', backgroundColor: '#b9b6b6', height: '6rem' }}>
                <h4 className='text-dark'>Manage user</h4>
                <div className='d-flex justify-content-center'>  <button className='btn btn-success w-50'>Go</button></div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={payment} style={{ height: '500px' }}
              alt="Third slide"
            />
            <Carousel.Caption className='d-flex justify-content-center'>
              <div className='card' style={{ width: '15rem', backgroundColor: '#b9b6b6', height: '6rem' }}>
                <h4 className='text-dark'>Manage Payment</h4>
                <div className='d-flex justify-content-center'>  <button className='btn btn-success w-50'>Go</button></div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row>
          {/* <Col lg={2} sm={12} className=' rounded ' style={{ height: '100vh', backgroundColor: '#005b97' }} >
            <div className='mt-5 text-light ms-3'>
              <h5><i class="fa-solid fa-chart-line me-2 mt-2" style={{ color: " #e8e8e8;" }}></i>Dashboard</h5>
              <h5><i class="fa-solid fa-user  me-2 mt-2 " style={{ color: " #bebfc1;" }}></i>Your Profile</h5>
              <h5><i class="fa-solid fa-users me-2 mt-2" style={{ color: " #c5c6c9;" }}></i> Manage Users</h5>
              <h5><i class="fa-solid fa-bus me-2 mt-2 " style={{ color: "#c8c9cb;" }}></i>Manage Bus</h5>
              <h5><i class="fa-solid fa-indian-rupee-sign me-2 mt-2" style={{ color: "#d5d7d8;" }}></i>Payment Status</h5>
              <h5><i class="fa-solid fa-comments me-2 mt-2" style={{ color: "#d6d6d6;" }}></i>Feedback</h5>
            </div>


          </Col> */}
          <Col lg={10} sm={12} className=' '>


            <Row>
              <Col lg={11} sm={12}>
                <div className='container bann rounded mt-3 ms-3 d-flex justify-content-center align-items-center' style={{ height: '350px', width: '100%', }}>
                  <Row>
                    <Col lg={4} sm={12} >
                    <div className="container">
                        <div className="section_our_solution">

                       
                            
                              <div className="solution_cards_box">
                                <div className="solution_card">
                                  <div className="solu_title">
                                    <h3 className='text-center'>Manage Bus</h3>
                                  </div>
                                  <div className="solu_description">
                                    <p style={{textAlign:'justify'}}>
                                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                   <div className='d-flex justify-content-center'> <button type="button" className="read_more_btn">View More</button></div>
                                  </div>
                                </div>

                              </div>
                           
                         

                        </div>
                      </div>
                    </Col>
                    <Col lg={4} sm={12}>
                    <div className="container">
                        <div className="section_our_solution">

                       
                            
                              <div className="solution_cards_box">
                                <div className="solution_card">
                                  <div className="solu_title">
                                    <h3 className='text-center'>Manage user</h3>
                                  </div>
                                  <div className="solu_description">
                                    <p>
                                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                    <div className='d-flex justify-content-center' ><button type="button" className="read_more_btn">View More</button></div>
                                  </div>
                                </div>

                              </div>
                           
                         

                        </div>
                      </div>
                    </Col>
                    <Col lg={4} sm={12}>
                      <div className="container">
                        <div className="section_our_solution">
                              <div className="solution_cards_box">
                                <div className="solution_card">
                                  <div className="solu_title">
                                    <h3 className='text-center'>Manage Payments</h3>
                                  </div>
                                  <div className="solu_description">
                                    <p>
                                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                    <div className='d-flex justify-content-center' ><button type="button" className="read_more_btn">View More</button></div>
                             
                                  </div>
                                </div>

                              </div>
      
                        </div>
                      </div>
                    </Col>
                  </Row>




                </div>



              </Col>
              <Col lg={1} sm={12}>
                <div className='mt-3 ms-2'>
                  <Card style={{ width: '18rem' }} className='shadow'>
                    <div className='d-flex justify-content-center'> <Card.Img variant="top" src={profile} style={{ height: '200px', width: '200px' }} /></div>
                    <Card.Body>
                      <Card.Title className='text-center'>ADMIN</Card.Title>
                      <div className='d-flex justify-content-center mt-2'>
                        <button className='btn btn-success' onClick={() => setOpen(!open)}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}><i class="fa-solid fa-arrow-down " style={{ color: "#c1c4c7;" }}></i>
                        </button>
                      </div>

                      <Collapse in={open}>
                        <div id="example-collapse-text">

                          <hr />
                          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cum, vitae non inventore ullam
                          </p>
                          <div className='d-flex justify-content-center'><Link to={'/admin/profile'}><Button variant="primary">View Profile</Button></Link></div>
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <div>

              </div>
            </Row>
          </Col>
        </Row>
        <div className='d-flex justify-content-center mb-5'>
          <img src={feedback} height={'250px'} alt="" />
        </div>
        <div className="container ">
        <Row>
          <Col lg={3} sm={12}>
          <blockquote className="blockquote blockquote-custom bg-white p-3 shadow rounded">
              <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
              <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.  <a href="#" className="text-info">@consequat</a>."</p>
              <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>


          </Col>
          <Col lg={3} sm={12}>
          <blockquote className="blockquote blockquote-custom bg-white p-3 shadow rounded">
              <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
              <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.  <a href="#" className="text-info">@consequat</a>."</p>
              <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>


          </Col>
          <Col lg={3} sm={12}>
          <blockquote className="blockquote blockquote-custom bg-white p-3 shadow rounded">
              <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
              <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.  <a href="#" className="text-info">@consequat</a>."</p>
              <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>


          </Col>
          <Col lg={3} sm={12}>
          <blockquote className="blockquote blockquote-custom bg-white p-3 shadow rounded">
              <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
              <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.  <a href="#" className="text-info">@consequat</a>."</p>
              <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>


          </Col>
         <div className='d-flex justify-content-center mb-3'><a href="">View more</a></div>
        </Row>
       

        

            
          
         
      </div>


      </div>
      
     
   
      <Footer/>
    </>
  )
}

export default Dashboard