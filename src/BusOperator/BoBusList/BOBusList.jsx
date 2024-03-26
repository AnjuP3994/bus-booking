import React, { useEffect, useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import './boBusList.css'
import buslogo from './assets/bus.jpg'
import BoHeader from '../BoHeader/BoHeader'
import { getOperator } from '../../Services/allAPIs'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../Services/baseURL'

function BOBusList() {
  const [operators, setOperators] = useState([])

  const getBuslist = async () => {
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Authorization": `Token ${token}`
    }
    const result = await getOperator(reqHeader)
    console.log(result.data)
    setOperators(result.data)
  }

  useEffect(() => {
    getBuslist()
  }, [])

  // console.log(`${BASE_URL}${operators[1].logo}`)

  return (
   



      <>
      <div className='mb-5 mt-3 pt-5'><BoHeader/></div>
          <div className='mt-5' > 
            
           <div className='mt-5' style={{marginTop:'5rem'}}>
              <Row >
                {operators?.length > 0 ?
                  operators.map((item, index) => (
                    <Col lg={6} sm={12} key={index}>
                      <div className="bus mt-5">
                        <Row className="align-items-center">
                          <Col lg={6} sm={12} className="mb-4 mb-lg-0 d-flex justify-content-center">
                            <img style={{ width: '100%', height: '250px' }} className='img-fluid' src={`${BASE_URL}/${item.logo}`} alt="Bus Logo" />
                          </Col>
                          <Col lg={6} sm={12}>
                            <div className="bus-info p-4">
                              <h4>{item.name}</h4>
                              <hr />
                              <h6>Description</h6>
                              <p>{item.description}</p>
                              <hr />
                              <h6>Address</h6>
                              <p>{item.address}</p>
                              <hr />
                              <h6>Website</h6>
                              <p>{item.website}</p>
                              <hr />
                              <Link to={`/buslist?operator=${item.name}`}><button className='btn btn-info'>View</button></Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  ))
                  : <p className="text-center">Nothing to show</p>
                }
              </Row>
           </div>
  
  
          
          </div>
      </>
     
  )
}

export default BOBusList