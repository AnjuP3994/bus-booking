import React from 'react'
import './busprofile.css'
import { Row, Col } from 'react-bootstrap'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio
} from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';

function Busprofile() {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>

            <div className='w-50 card shadow ' >
                <Row>
                    <Col lg={5} sm={12} className='bg-dark pf rounded'>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                            <h4>Joe Jacob</h4>

                        </div>

                    </Col>
                    <Col lg={7} sm={12}>
                       
        
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Busprofile