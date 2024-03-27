import React, { useEffect, useState } from 'react'
import { Button, Row ,Col} from 'react-bootstrap'
import './manage.css'
import { admindeleteoperator, admingetgetoperators } from '../../Services/allAPIs'
import buslogo from '../../BusOperator/BoBusList/assets/bus.jpg'
import Swal from 'sweetalert2';
import AdminHeader from '../Header/AdminHeader'

function Mangeoperator() {
  const [operators,setOperators]=useState([])

  const handlegetopearators=async ()=>{
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Authorization": `Token ${token}`
    }
    const result = await admingetgetoperators(reqHeader)
    console.log(result)
    setOperators(result.data)
  }
  useEffect(()=>{
    handlegetopearators()
  },[])

  const handleDeleteoperator=async(id)=>{
    const token = sessionStorage.getItem('token')
    console.log(token)
    const reqHeader = {
      "Authorization": `Token ${token}`
    }
    const result = await admindeleteoperator(id,reqHeader)
    console.log(result)
    if(result.status===204){
        Swal.fire({
     
            title: ` successfull`,
            text: `Bus has been deleted successfully`,
            icon: "success"
          });
          handlegetopearators()
    } else{
        Swal.fire({
     
            title: ` error`,
            text: `something went wrong`,
            icon: "error"
          });

          console.log(result.response.data)

    } 
}



    

  return (
    <div>
       <AdminHeader />
         <Row className='mt-5 pt-5'>
        {operators?.length>0?
        operators.map((item)=>( 
        <Col lg={6} sm={12}>
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
              <button className='btn btn-danger' onClick={()=>handleDeleteoperator(item.id)}>Delete</button>
            </div>
              </Col>
            </Row>
            
           
          </div>
        </Col>))
         
        : <p>nothing to show</p>
        }


      </Row>
    </div>
  )
}

export default Mangeoperator