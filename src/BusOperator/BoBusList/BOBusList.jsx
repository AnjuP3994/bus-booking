import React from 'react'
import { Button } from 'react-bootstrap'
import './boBusList.css'
import buslogo from './assets/bus.jpg'
import BoHeader from '../BoHeader/BoHeader'

function BOBusList() { 
  
  return (
    <>
    <BoHeader/>
<div style={{marginTop:'100px'}}>


         
                <div className="bus mt-5 ms-5" >
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
                    </div>

					<div className="bus mt-5 ms-5">
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
                    </div>
</div>
					
                
    </>
  )
}

export default BOBusList