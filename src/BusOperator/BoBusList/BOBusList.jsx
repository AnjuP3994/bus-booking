import React from 'react'
import { Button } from 'react-bootstrap'
import './boBusList.css'
import buslogo from './assets/bus.jpg'

function BOBusList() { 
  
  return (
    <>
 
        <div>
            <div className="courses-container">
                <div className="course">
                    {/* <div className="course-preview">
                        <img src={{buslogo}} alt="" />
                    </div> */}
					<div>
					<img style={{width:'70%'}} src={buslogo}  />
					</div>
                    <div className="course-info">
                        <div className="progress-container">
                            
                          
                        </div>
						<h6>Operator Name</h6>
                        <h2>Travels Name</h2>
                        <h4>Discription</h4>
						<h6>Address</h6>
						<h6>Website</h6>
                      
                    </div>
                </div>
            </div>

        

        </div>
    </>
  )
}

export default BOBusList