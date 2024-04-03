import React, { useEffect, useState } from 'react'
import './searchItem.css'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';
import { style } from '@mui/system';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { BookbusAPI, PaymentAPI } from '../../Services/allAPIs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";



function SearchItem({ bus,search,operatervalue }) {
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const [dateinfo, setDateinfo] = useState({});


  const [open, setOpen] = useState(false);
  const[resultsearch,setResultsearch]=useState(null)

  const [busdts, setBusdts] = useState([])
  const [bookdts, setBookdts] = useState({
    journey_date: date,
    seat_number: ""
  })

  const [collapseOpen, setCollapseOpen] = useState(false);
const [bId,setBid] = useState("")

  const [buttonColor, setButtonColor] = useState('');
  const handleClose = () => {
    setShow(false);
    setCollapseOpen(false);
  };

  useEffect(()=>{
    if(search){
      setResultsearch(search)
    }
  },[search])

  // console.log(resultsearch)
  const handleShow = () => setShow(true);

  const [reservedts, setReservedts] = useState([])
  // console.log(reservedts)
  
  const[paydts,setPaydts]=useState({
    name:"",
    card_number:"",
    expiration:"",
    cvv:""
  })


  useEffect(() => {
    let mindate = new Date().toISOString().split("T")[0];
    let maxdate = new Date().toISOString().split("T")[0];
    // console.log(mindate, maxdate);
    setDate(mindate);
    setDateinfo({
      ...dateinfo,
      mindate: mindate,
      maxdate: maxdate,
    });
  }, []);
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setBookdts({ ...bookdts, journey_date: selectedDate });
  };
  // console.log(bookdts)
  // console.log(date)

  useEffect(() => {
    setBusdts(bus)
  }, [])

  const handlebook = async (id) => {
    console.log("qwertyuio",id)
    const { seat_number, journey_date } = bookdts
    if (!seat_number || !journey_date) {
      Swal.fire({
        title: `incomplete form`,
        text: `Please fill the form completely`,
        icon: "warning"
      });
    } else {
      const token = sessionStorage.getItem('token')
      console.log(token)
      const reqHeader = {
        "Authorization": `Token ${token}`
      }
      console.log(id)
      const result = await BookbusAPI(bId, bookdts, reqHeader)
      console.log(result.data)
      if (result.status === 200) {
        setReservedts(result.data)
        toast("Reservation successfull!")

        setCollapseOpen(true);
      }
      else {
        console.log(result.response.data)
      }
    }


  };

  
  const handleClick = (index) => {
    // Example: Changing the button's color to red when clicked
    setBookdts({ ...bookdts, seat_number: index + 1 });




  }

  const handlePayment=async(id)=>{
    const{card_number,name,expiration,cvv}=paydts
    if(!card_number || !name || !expiration || !cvv  ){
      Swal.fire({
        title: `warning`,
        text: `Please fill the details completley`,
        icon: "warning"
      });


    }
    else{
      const token = sessionStorage.getItem('token')
      console.log(token)
      const reqHeader = {
        "Authorization": `Token ${token}`
      }
      const result = await PaymentAPI(id,reqHeader)
      // console.log(result.data)
      if(result.status===201){

        Swal.fire({
          title: `successfull`,
          text: `Payment successfull`,
          icon: "success"
        });
        setShow(false);
        setCollapseOpen(false);
        setReservedts([])
      }else{
        console.log(result.response.data)
        Swal.fire({
          title: `error`,
          text: `Something went wrong`,
          icon: "error"
        });

      }
      

    }

    

  }


  const Openclicked=(id)=>{
    setBid(id)
    setOpen(!open)
  }

  return (
    <>
      
          
        {resultsearch?.length > 0 ? (
  resultsearch.map((item,index) => (
    <div key={index} className="listcard shadow p-3 w-100 mb-4 mt-4">
        <div>

    <div>
                <Row>
                  <div className='d-flex'>
                   
                    <Col xs={3}>
                      <h4 className='fw-bolder'>{item.name}</h4>
                      <p>{item.category_name}</p>
                      
                   
                      <p className='rating ps-1'><i style={{ fontSize: '12px' }} class="fa-solid fa-star me-1"></i>4.6</p>
                      
                    </Col>
                    

                    <Col xs={3} className='d-flex justify-content-center mt-3'>
                      <Row className='time'>
                        <Col lg={5} className='text-center'>
                          <p className='textclr fw-bolder fs-9 ' style={{ lineHeight: '1rem' }}>{item.boarding_point}</p>
                          <p className='textclr fw-bolder'>{item.boarding_time}</p>
                        </Col>
                        <Col lg={2} className='mt-3'>
                          <p className='fw-bolder fs-5'>to</p>
                        </Col>
                        <Col lg={5} className='text-center'>
                          <p className='textclr fw-bolder fs-9' style={{ lineHeight: '1rem' }}>{item.dropping_point}</p>
                          <p className='textclr fw-bolder'>{item.dropping_time}</p>
                        </Col>

                      </Row>
                    </Col>

                    <Col xs={3} className='text-end mt-2'>
                      <h3 className='text-danger fw-bolder'><i style={{ fontSize: '25px' }} class="fa-solid fa-indian-rupee-sign me-2"></i>{item.price}</h3>
                      <h8>Duration:{item.duration}</h8>
                      <div className='text-end mt-5'>
                        <Button className='btn btn-info' onClick={() => setOpen(!open)} aria-expanded={open}>View Seats</Button>
                      </div>
                    </Col>
                  </div>
                </Row>

                <Row>
                  <Col>
                    <Collapse in={open}>
                      <div id="example-collapse-text">

                        <div>
                          {[...Array(item.capacity)].map((_, index) => (
                            <button
                              key={index}
                              className='btn btn-success ms-2 mt-2'
                              onClick={() => handleClick(index)}
                              style={{ backgroundColor: bookdts.seat_number === index + 1 ? 'red' : '' }}
                              value={index + 1}
                            >
                              {index + 1}
                            </button>
                          ))}
                        </div>
                        <button className='btn btn-info ' onClick={handleShow}  >BOOK</button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Confirm your details</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className='d-flex justify-content-center align-items-center'>
                              <button className='btn btn-info '>
                                {bookdts.seat_number}
                              </button>
                            </div>
                            <Form>
                              <Form>
                                <label>Date</label>
                                <Form.Control
                                  type="date"
                                  value={bookdts.journey_date}
                                  min={dateinfo.mindate}
                                  onChange={handleDateChange}
                                />
                              </Form>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
                            <Button variant="primary" onClick={() => handlebook(item.id)} >
                              proceed to reserve
                            </Button>
                          </Modal.Footer>
                          <Collapse in={collapseOpen}>
                            <div className=''>
                              <MDBContainer className="py-5" >
                                <MDBRow className=" ">
                                  <MDBCol>
                                    <MDBCard>
                                      <MDBCardBody className="p-3">
                                        <MDBRow>
                                          <MDBCol lg="12">
                                            <MDBCard className="bg-primary text-white rounded-3 p-4">
                                              <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                </div>
                                                <p className="small">Card type</p>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-mastercard fa-2x me-2" /></a>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-visa fa-2x me-2" /></a>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-amex fa-2x me-2" /></a>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-paypal fa-2x me-2" /></a>
                                                <form className="mt-4">
                                                  <MDBInput className="mb-4" label="Cardholder's Name" placeholder="Cardholder's Name" type="text" size="lg" contrast onChange={(e) => setPaydts({ ...paydts, name: e.target.value })} />
                                                  <MDBInput className="mb-4" label="Card Number" type="text" size="lg" minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast onChange={(e) => setPaydts({ ...paydts, card_number: e.target.value })} />
                                                  <MDBRow className="mb-4">
                                                    <MDBCol md="6">
                                                      <MDBInput className="mb-4" label="Expiration" type="text" size="lg" minLength="6" maxLength="6" placeholder="MM/YY" contrast onChange={(e) => setPaydts({ ...paydts, expiration: e.target.value })} />
                                                    </MDBCol>
                                                    <MDBCol md="6">
                                                      <MDBInput className="mb-4" label="CVV" type="text" size="lg" minLength="3" maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast onChange={(e) => setPaydts({ ...paydts, cvv: e.target.value })} />
                                                    </MDBCol>
                                                  </MDBRow>
                                                </form>
                                                {/* <hr /> */}
                                                <div className="d-flex justify-content-between">
                                                  <p className="mb-2">Total(Incl. taxes):<span className='text-danger fs-3 fw-bold'>{item.price}</span></p>
                                                </div>
                                                <Button variant="info" color="info" block size="lg" onClick={()=>handlePayment(reservedts.id)} >
                                                  Pay Now
                                                </Button>
                                              </MDBCardBody>
                                            </MDBCard>
                                          </MDBCol>
                                        </MDBRow>
                                      </MDBCardBody>
                                    </MDBCard>
                                  </MDBCol>
                                </MDBRow>
                              </MDBContainer>

                            </div>
                          </Collapse>
                        </Modal>
                      </div>

                    </Collapse>
                  </Col>
                </Row>
              </div>
              </div>

      </div>
  ))
) :
 (
  bus?.length > 0 ? (

    bus.map((item, index) => (
      <div key={index} className="listcard shadow p-3 w-100 mb-4">
        <div>
      <div>
                <Row>
                  <div className='d-flex'>
                    <Col xs={4}>
                      <h4 className='fw-bolder'>{item.name}</h4>
                      <p>{item.category_name}</p>
                   
                      <p className='rating ps-1'><i style={{ fontSize: '12px' }} class="fa-solid fa-star me-1"></i>4.6</p>
                    </Col>

                    <Col xs={5} className='d-flex justify-content-center mt-3'>
                      <Row className='time'>
                        <Col lg={5} className='text-center'>
                          <p className='textclr fw-bolder fs-9 ' style={{ lineHeight: '1rem' }}>{item.boarding_point}</p>
                          <p className='textclr fw-bolder'>{item.boarding_time}</p>
                        </Col>
                        <Col lg={2} className='mt-3'>
                          <p className='fw-bolder fs-5'>to</p>
                        </Col>
                        <Col lg={5} className='text-center'>
                          <p className='textclr fw-bolder fs-9' style={{ lineHeight: '1rem' }}>{item.dropping_point}</p>
                          <p className='textclr fw-bolder'>{item.dropping_time}</p>
                        </Col>

                      </Row>
                    </Col>

                    <Col xs={3} className='text-end mt-2'>
                      <h3 className='text-danger fw-bolder'><i style={{ fontSize: '25px' }} class="fa-solid fa-indian-rupee-sign me-2"></i>{item.price}</h3>
                      <h8>Duration:{item.duration}</h8>
                      <div className='text-end mt-5'>
                        <Button className='btn btn-info' onClick={() => Openclicked(item.id)} aria-expanded={open}>View Seats</Button>
                      </div>
                    </Col>
                  </div>
                </Row>

                <Row>
                  <Col>
                    <Collapse in={open}>
                      <div id="example-collapse-text">

                        <div>
                          {[...Array(item.capacity)].map((_, index) => (
                            <button
                              key={index}
                              className='btn btn-success ms-2 mt-2'
                              onClick={() => handleClick(index)}
                              style={{ backgroundColor: bookdts.seat_number === index + 1 ? 'red' : '' }}
                              value={index + 1}
                            >
                              {index + 1}
                            </button>
                          ))}
                        </div>
                        <button className='btn btn-info ' onClick={handleShow}  >BOOK</button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Confirm your details</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className='d-flex justify-content-center align-items-center'>
                              <button className='btn btn-info '>
                                {bookdts.seat_number}
                              </button>
                            </div>
                            <Form>
                              <Form>
                                <label>Date</label>
                                <Form.Control
                                  type="date"
                                  value={bookdts.journey_date}
                                  min={dateinfo.mindate}
                                  onChange={handleDateChange}
                                />
                              </Form>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
                            <Button variant="primary" onClick={() => handlebook(item.id)} >
                              proceed to reserve
                            </Button>
                          </Modal.Footer>
                          <Collapse in={collapseOpen}>
                            <div className=''>
                              <MDBContainer className="py-5" >
                                <MDBRow className=" ">
                                  <MDBCol>
                                    <MDBCard>
                                      <MDBCardBody className="p-3">
                                        <MDBRow>
                                          <MDBCol lg="12">
                                            <MDBCard className="bg-primary text-white rounded-3 p-4">
                                              <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                </div>
                                                <p className="small">Card type</p>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-mastercard fa-2x me-2" /></a>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-visa fa-2x me-2" /></a>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-amex fa-2x me-2" /></a>
                                                <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-paypal fa-2x me-2" /></a>
                                                <form className="mt-4">
                                                  <MDBInput className="mb-4" label="Cardholder's Name" placeholder="Cardholder's Name" type="text" size="lg" contrast onChange={(e) => setPaydts({ ...paydts, name: e.target.value })}  />
                                                  <MDBInput className="mb-4" label="Card Number" type="text" size="lg" minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast  onChange={(e) => setPaydts({ ...paydts, card_number: e.target.value })} />
                                                  <MDBRow className="mb-4">
                                                    <MDBCol md="6">
                                                      <MDBInput className="mb-4" label="Expiration" type="text" size="lg" minLength="6" maxLength="6" placeholder="MM/YY" contrast onChange={(e) => setPaydts({ ...paydts, expiration: e.target.value })}  />
                                                    </MDBCol>
                                                    <MDBCol md="6">
                                                      <MDBInput className="mb-4" label="CVV" type="text" size="lg" minLength="3" maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast onChange={(e) => setPaydts({ ...paydts, cvv: e.target.value })}  />
                                                    </MDBCol>
                                                  </MDBRow>
                                                </form>
                                                {/* <hr /> */}
                                                <div className="d-flex justify-content-between">
                                                  <p className="mb-2">Total(Incl. taxes):<span className='text-danger fs-3 fw-bold'>{item.price}</span></p>
                                                </div>
                                                <Button variant="info" color="info" block size="lg" onClick={()=>handlePayment(reservedts.id)} >
                                                  Pay Now
                                                </Button>
                                              </MDBCardBody>
                                            </MDBCard>
                                          </MDBCol>
                                        </MDBRow>
                                      </MDBCardBody>
                                    </MDBCard>
                                  </MDBCol>
                                </MDBRow>
                              </MDBContainer>

                            </div>
                          </Collapse>
                        </Modal>
                      </div>

                    </Collapse>
                  </Col>
                </Row>
              </div>

              </div>
              </div>
    ))
  ) : (
    <p>Nothing to show</p>
  )
)}

        

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
    </>
  )
}

export default SearchItem