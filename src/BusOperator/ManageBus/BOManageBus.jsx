import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import updateImg from './assets/updatebg.jpg'
import BoHeader from '../BoHeader/BoHeader';

function BOManageBus() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <BoHeader />
            <div className='d-flex'>
                <div style={{ height: '100vh', width: '11%', position: 'fixed', backgroundColor: '#10a0b0', marginTop: '90px' }}>
                    <h3 className=' ms-1 mt-3 text-center text-dark fs-2'> Manage BUS</h3><br />
                    <div className=' ms-5 fs-5 '>
                        <Button className='mt-2 pe-4 ' style={{ color: '#ffffff' }}> <i className="fas fa-snowflake ms-3 me-2  "></i> AC</Button> <br />
                        <Button className='mt-3' style={{ color: '#ffffff' }}> <i class="fa-solid fa-ban"></i> Non A/C</Button> <br />
                        <Button className='mt-3' style={{ color: '#ffffff' }}><i class="fa-solid fa-couch"></i>  Seater</Button><br />
                        <Button className='mt-3' style={{ color: '#ffffff' }}><i class="fa-solid fa-bed"></i> Sleeper</Button> <br />
                    </div>
                </div>
                <div className='mt-5' style={{ width: '100%', marginLeft: '15%' }}>
                    <div style={{ marginTop: '70px' }}>
                        <p className='text-center fs-1 me-5 pe-5' >  Your Buses </p>
                        <Row>
                            <Col lg={10} xs={10} md={4}>
                                <div className="listcard shadow p-4 w-100 ">
                                    <Row>
                                        <Col xs={4}>
                                            <h4 className='fw-bolder'>Surya Travels</h4>
                                            <p>Bharat Benz A/C Semi Sleeper</p>
                                            <p className='text'>Contact no: 9874563210</p>
                                            <p className='rating ps-1'><i style={{ fontSize: '12px' }} class="fa-solid fa-star me-1"></i>4.6</p>
                                        </Col>

                                        <Col xs={5} className='d-flex justify-content-center mt-3'>
                                            <Row className='time'>
                                                <Col className='text-center'>
                                                    <p className='textclr fw-bolder fs-5'>Palakkad</p>
                                                    <p className='textclr fw-bolder'>8:30am</p>
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
                                            <h3 className='text-danger fw-bolder'><i style={{ fontSize: '25px' }} class="fa-solid fa-indian-rupee-sign me-2"></i>350</h3>
                                            <div className='text-end mt-5'>
                                                <Button onClick={handleShow} >Manage Bus</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                                        <Modal.Header closeButton>
                                            <Modal.Title className='text-dark'>Update Bus Details</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                            <Container>
                                                <Row className="justify-content-md-center">
                                                    <Col xs lg="6">
                                                        <img src={updateImg} alt="" style={{ width: '200px', height: '200px' }} />
                                                        <input className='mt-2' type="file" />
                                                    </Col>
                                                    <Col xs lg="6">
                                                        Travels Name :
                                                        <Form.Control type="text" placeholder="Normal text" />
                                                        Bus Name :
                                                        <Form.Control type="text" placeholder="Normal text" />
                                                        <div className='d-flex mt-3 mb-3'>
                                                            From
                                                            <Form.Control className='ms-1' type="text" placeholder="Normal text" />
                                                            Time
                                                            <Form.Control className='ms-1 ' type="time" placeholder="Normal text" /> </div>
                                                        <div className='d-flex mt-3 mb-3'>
                                                            To
                                                            <Form.Control className='ms-4' type="text" placeholder="Normal text" />
                                                            Time
                                                            <Form.Control className='ms-1 ' type="time" placeholder="Normal text" /> </div>
                                                        Contact :
                                                        <Form.Control type="text" placeholder="Normal text" />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button type='submit' variant="primary">Update</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BOManageBus