import React from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import cardImg from './assets/busLoGo.jpg';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function BoBookingHistory() {
    const [value, setValue] = React.useState(3);
    // console.log(value );
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
<h1 style={{ marginTop: '100px' }} className='fw-bolder fs-1 text-center mb-5'> Booking History</h1>
      <div className='container'>
        <Card className="max-w-sm">
          <div className="row no-gutters">
            <div className="col-md-4">
              <Card.Img variant="top" src={cardImg} style={{ height: '23rem', width: '100%' }} />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {/* Noteworthy Travels */}
                </Card.Title>
                <Card.Text className="font-normal text-gray-700 ">
                  <div className="  p-3 w-100 mb-4">
                    <Row>
                      <Col >
                        <h4 className='fw-bolder '>Surya Travels</h4>
                        <p>Bharat Benz A/C Semi Sleeper</p>
                        <p className='text'>Contact no: 9874563210</p>
                        <h4 >Seat No : <span className='fw-bolder mb-3 me-5'> 33</span ></h4>
                        <p className='rating ps-1 p-2'><i style={{ fontSize: '12px' }} class="fa-solid fa-star me-1"></i>4.6</p>
                      </Col>

                      <Col className='d-flex justify-content-center mt-3'>
                        <Row className='time'>
                          <Col className='text-center'>
                            <p className='textclr fw-bolder fs-5'>Palakkad</p>
                            <p className='textclr fw-bolder'>8:30am</p>
                            <p className='fw-bolder fs-5'></p>
                          </Col>
                          <Col className='mt-3'>
                            <p className='fw-bolder fs-5'>to</p>

                          </Col>
                          <Col className='text-center'>
                            <p className='textclr fw-bolder fs-5'>Ernakulam</p>
                            <p className='textclr fw-bolder'>12:30pm</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col xs={3} className='text-end mt-2'>
                        <h3 className='text-danger fw-bolder mb-5'><i style={{ fontSize: '25px' }} class="fa-solid fa-indian-rupee-sign me-2 "></i>350</h3>
                        <p>Journey Date: 01/01/2022</p>

                        <div className='text-end mt-3 '>
                          <Button onClick={handleShow} >add Review</Button>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Add  Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Review

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <TextField id="standard-basic" label="Leave us a Review" variant="standard" />
                              </Box>
                              <Box
                                sx={{
                                  '& > legend': { mt: 2 },
                                }}
                              >
                                <Typography component="legend">Rate Us</Typography>
                                <Rating
                                  name="simple-controlled"
                                  value={value}
                                  onChange={(event, newValue) => {
                                    setValue(newValue);
                                  }}
                                />
                              </Box>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Cancel
                              </Button>
                              <Button variant="primary" type='submit'>Add Review</Button>
                            </Modal.Footer>
                          </Modal>
                        </div>

                        <p className='mt-2' style={{ fontSize: "10px" }}> Booking time: <span className='fw-bolder  '>  19:54:01</span ></p>
                      </Col>
                    </Row>

                    <Row>
                      {/* <Col>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </Col> */}
                    </Row>
                  </div>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default BoBookingHistory