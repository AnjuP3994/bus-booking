import React from 'react'
import './feature.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchTemp from './assets/searchTemp.png'
import ListTemp from './assets/listTemp.jpg'
import historyTemp from './assets/bookingHistoryTemp.png'
import profileTemp from './assets/profileTemp.jpg'
import { Link } from 'react-router-dom'


function Feature() {
  return (
    <>
      <div className='infogrid py-5'>
        <div className='coupon'>
          <span>save upto rs 150</span>
          <span className='offerImage'>
            <img src={img1} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className='coupon'>
          <span>save upto rs 150</span>
          <span className='offerImage'>
            <img src={img2} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className='coupon'>
          <span>save upto rs 150</span>
          <span className='offerImage'>
            <img src={img3} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
      </div>


      <Container>

        <Row>
          <Col xs={6} md={3}>
            <div className="m-3 mb-5">
              <div className="article-card">
                <div className="content">
                  <p className="title">Search Bus </p>
                </div>
                <Link to={'/buslist'}> <img src={SearchTemp} alt="article-cover" /> </Link>
              </div>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <div className="m-3 mb-5">
              <div className="article-card">
                <div className="content">
                  <p className="title"> Payment History </p>
                </div>
                <Link to={'/user/paymentHistory '}> <img src='https://img.freepik.com/free-vector/cash-payment-concept-illustration_114360-3320.jpg?t=st=1711537444~exp=1711541044~hmac=d5630167a8bf1e242676e414ca5873639c3ac55ba023024209bef559b74dc256&w=740' alt="article-cover" /></Link>
              </div>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <div className="m-3 mb-5">
              <div className="article-card">
                <div className="content">
                  <p className="title">Booking HIstory </p>
                </div>
                <Link to={'/bookinghistory'}> <img src={historyTemp} alt="article-cover" /> </Link>
              </div>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <div className="m-3 mb-5">
              <div className="article-card">
                <div className="content">
                  <p className="title ">Profile </p>
                </div>
                <Link to={'/profile'}> <img src={profileTemp} alt="article-cover" /></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Feature