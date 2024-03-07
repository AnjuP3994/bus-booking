import React, { useState } from 'react'
import './searchItem.css'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function SearchItem() {

  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="listcard shadow p-3 w-100 mb-4">
      <Row>
        <Col xs={4}>
          <h4 className='fw-bolder'>Surya Travels</h4>
          <p>Bharat Benz A/C Semi Sleeper</p>
          <p className='text'>Contact no: 9874563210</p>
          <p className='rating ps-1'><i style={{fontSize:'12px'}} class="fa-solid fa-star me-1"></i>4.6</p>
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
          <h3 className='text-danger fw-bolder'><i style={{fontSize:'25px'}} class="fa-solid fa-indian-rupee-sign me-2"></i>350</h3>
          <div className='text-end mt-5'>
            <Button onClick={() => setOpen(!open)} aria-expanded={open}>View Seats</Button>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default SearchItem