import React, { useState } from 'react'
import './BOHome.css'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import {  Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addcategory } from '../../Services/allAPIs'
import Swal from 'sweetalert2';
import BoHeader from '../BoHeader/BoHeader'


function BOHome() {
  const [modalShow, setModalShow] = useState(false);
  const[category,setCategory]=useState({
    name:""
  })
  console.log(category)
  const handleBookClick = (worker) => {
    setModalShow(true);
  };

  const categoryadd=async()=>{
    const{name}=category
    if(!name){
      alert('please select a category')
    }else{
      const token = sessionStorage.getItem('token')
      console.log(token)
        const reqHeader = {
         
          "Authorization": `Token ${token}`
        }
      
      const result=await addcategory(category,reqHeader)
      console.log(result)
      if(result.status===200){
        Swal.fire({
          title: ``,
          text: `${result.data.name} Categroy added successfully`,
          icon: "success"
        });
      }
      else{
        console.log(result.response.data)
      }
    }
  }
  return (
  <>
  <BoHeader/>
      <div style={{marginTop:'50px'}}>
        <section className="bg-dark py-5 top-banner" >
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-6">
                <div className="text-center my-5">
                  <h1 className="display-5 fw-bolder text-white mb-2">Welcome Bus operator</h1>
                  <p className="lead text-white-50 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut possimus libero commodi quas aperiam omnis cupiditate nostrum, reiciendis voluptate ipsum molestiae, enim, perspiciatis illum quidem dolorum vel maiores. Recusandae.</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <button className="btn btn-primary btn-lg px-4 me-sm-3" href="#features" style={{backgroundColor:'#0095A9'}}>Get Started</button>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-5 border-bottom" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:'#0095A9'}}><i className="bi bi-collection"></i></div>
                <h2 className="h4 fw-bolder"> Bookings</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus enim adipisci et esse quibusdam labore numquam dolorem perspiciatis animi corrupti molestiae, inventore unde similique, rem temporibus iste odit neque?</p>
                <Link to={'/bookingdetails'}>
                 
                    View
                    <i className="bi bi-arrow-right"></i>
                 
                </Link>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:'#0095A9'}}><i class="fa-solid fa-screwdriver-wrench" style={{color:"white"}}></i></div>
                <h2 className="h4 fw-bolder">Bus Management</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus enim adipisci et esse quibusdam labore numquam dolorem perspiciatis animi corrupti molestiae, inventore unde similique, rem temporibus iste odit neque?</p>
                <Link to={'/bomanagebus'}>
                    <a className="text-decoration-none" href="#!">
                      View
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </Link>
              </div>
              <div className="col-lg-4">
                <div className="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:'#0095A9'}}><i class="fa-regular fa-user" style={{color:'white'}}></i></div>
                <h2 className="h4 fw-bolder">Profile</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus enim adipisci et esse quibusdam labore numquam dolorem perspiciatis animi corrupti molestiae, inventore unde similique, rem temporibus iste odit neque?</p>
                <Link to={'/bus/profile'}>
                  <a className="text-decoration-none" href="#!">
                    View
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </Link>
              </div>
              <div className='d-flex mt-4'>
                {/* <div className=" col-lg-4">
                  <div className="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:'#0095A9'}}><i className="bi bi-toggles2"></i></div>
                  <h2 className="h4 fw-bolder">Profile</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus enim adipisci et esse quibusdam labore numquam dolorem perspiciatis animi corrupti molestiae, inventore unde similique, rem temporibus iste odit neque?</p>
                  <a className="text-decoration-none" href="#!">
                    View
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div> */}
  
  
                <div className=" col-lg-4 ">
                  <div className="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:'#0095A9'}}><i class="fa-solid fa-indian-rupee-sign" style={{color:'white'}}></i></div>
                  <h2 className="h4 fw-bolder">Payment status</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus enim adipisci et esse quibusdam labore numquam dolorem perspiciatis animi corrupti molestiae, inventore unde similique, rem temporibus iste odit neque?</p>
                  <Link to={'/bus/payments'}>
                    <a className="text-decoration-none" href="#!">
                      View
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
                <div className=" col-lg-4 ">
                  <div className="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:'#0095A9'}}><i class="fa-solid fa-bus-simple"  style={{color:'white'}} ></i></div>
                  <h2 className="h4 fw-bolder">Add Bus</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus enim adipisci et esse quibusdam labore numquam dolorem perspiciatis animi corrupti molestiae, inventore unde similique, rem temporibus iste odit neque?</p>
                  <Link to={'/addbus'}>
                    <a className="text-decoration-none" href="#!">
                      View
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>

                <div className=" col-lg-4 ">
                  <div className="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:'#0095A9'}}><i class="fa-solid fa-bus-simple"  style={{color:'white'}} ></i></div>
                  <h2 className="h4 fw-bolder">Add Category</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus enim adipisci et esse quibusdam labore numquam dolorem perspiciatis animi corrupti molestiae, inventore unde similique, rem temporibus iste odit neque?</p>
                  
                    <a className="text-decoration-none" href="#!" onClick={ handleBookClick}>
                      View
                      <i className="bi bi-arrow-right"></i>
                    </a>
                    <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            BOOK NEEL
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <h4 className='text-center'>Add Categories of Your Bus </h4>
         <Form>
         <Form.Select id='district'  aria-label="Default select example" className='mt-2' onChange={(e) => setCategory({ ...category, name: e.target.value })}>
              
              <option value="AC Seater ">AC Seater </option>
              <option value="Non AC Seater ">Non AC Seater </option>
              <option value="AC Sleeper">AC Sleeper</option>
              <option value="Non Ac Sleeper">Non Ac Sleeper</option>
              {/* <option value=" Sleeper">Sleeper</option>
              <option value="Non AC Sleeper"> Sleeper</option> */}
            </Form.Select>
         </Form>

        </Modal.Body>
        <Modal.Footer>
        <button className='btn btn-success' onClick={categoryadd} >ADD</button>

          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>


                </div>

                
              </div>
  
            </div>


           
          </div>
        </section>
        <div className='d-flex justify-content-center '>
          
          <div className='d-flex justify-content-center align-items-center  b-5  mt-5 feedback b w-50 flex-column' style={{height:'300px'}}>
         
               <Link to={'/bofeedback'}>
                  <button className='btn btn-info'>feedbacks</button>
                  </Link>
                </div>
              
        </div>
  
        {/* <section className="bg-light py-5 border-bottom">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h2 className="fw-bolder">Pay as you grow</h2>
              <p className="lead mb-0">With our no hassle pricing plans</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-6 col-xl-4">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-5">
                    <div className="small text-uppercase fw-bold text-muted">Free</div>
                    <div className="mb-3">
                      <span className="display-4 fw-bold">$0</span>
                      <span className="text-muted">/ mo.</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-check text-primary"></i>
                        <strong>1 users</strong>
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary"></i>
                        5GB storage
                      </li>
                     
                    </ul>
                    <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section> */}
  
        {/* <section className="py-5 border-bottom">
          <div className="container px-5 my-5 px-5">
            <div className="text-center mb-5">
              <h2 className="fw-bolder">Customer testimonials</h2>
              <p className="lead mb-0">Our customers love working with us</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                      <div className="ms-4">
                        <p className="mb-1">Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
                        <div className="small text-muted">- Client Name, Location</div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section> */}
  
        {/* <section className="bg-light py-5">
          <div className="container px-5 my-5 px-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
              <h2 className="fw-bolder">Get in touch</h2>
              <p className="lead mb-0">We'd love to hear from you</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-6">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                    <label htmlFor="name">Full name</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                
                  <div className="d-grid"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                </form>
              </div>
            </div>
          </div>
        </section> */}
        <Footer/>
      </div>
      
  </>
    
  )
}

export default BOHome