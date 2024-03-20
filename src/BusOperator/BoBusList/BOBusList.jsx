import React, { useEffect, useState } from 'react'
import { Button, Row ,Col} from 'react-bootstrap'
import './boBusList.css'
import buslogo from './assets/bus.jpg'
import BoHeader from '../BoHeader/BoHeader'
import { getOperator } from '../../Services/allAPIs'

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

  return (
    <>
    <BoHeader/>
<div style={{marginTop:'100px'}}>


         
                <div className="bus mt-5 ms-5" >
      <Row>
        {operators?.length>0?
        operators.map((item)=>( <Col lg={6} sm={12}>
          <div className="bus mt-5 ">
            <Row>
              <Col lg={6} sm={12}  className='d-flex justify-content-center align-items-center'>
              <div>
              <img style={{ width: '100%', height: '250px' }} className='img-fluid' src={buslogo} />
            </div>
              </Col>
              <Col lg={6} sm={12}>
              <div className="bus-info p-4">
              <h4>{item.name}</h4>
              <hr />

              <h6>Discription</h6>
              <p>{item.description}</p>
              <hr />
              <h6>Address</h6>
              <p>{item.address}</p>
              <hr />
              <h6>Website</h6>
              <p>{item.website}</p>
              <hr />
              <button className='btn btn-info'>View</button>
            </div>
              </Col>
            </Row>
            
           
          </div>
        </Col>))
         
        : <p>nothing to show</p>
        }


      </Row>

      {/* <div className="bus mt-5 ms-5">
					<div>
					<img style={{width:'240px',height:'200px'}} src={buslogo}/>
					</div>
                    <div className="bus-info p-4">
						<h6>Operator Name</h6>
                        <h2>Travels Name</h2>
                        <h4>Discription</h4>
						<h6>Address</h6>
						<h6>Website</h6>
                         </div>
                    </div> */}


					{/* <div className="bus mt-5 ms-5">
					<div>
					<img style={{width:'240px',height:'200px'}} src={buslogo}/>
					</div>
                    <div className="bus-info p-4">
						<h6>Operator Name</h6>
                        <h2>Travels Name</h2>
                        <h4>Discription</h4>
						<h6>Address</h6>
						<h6>Website</h6>
                         </div>
                    </div> */}
</div>
</div>
                

    </>
  )
}

export default BOBusList