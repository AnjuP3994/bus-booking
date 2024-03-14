import React from 'react'
import { Button, Table } from 'react-bootstrap'
import './booking.css'
import  bgImage from './assets/bg4booking.jpg'

function Booking() {
    return (
        <>
          <div style={{
                backgroundImage:`url(${bgImage})`,
                width:'100%',height:'100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment:'fixed',
                overflow:'hidden',
               
                filter: 'blur(3px)'
                
            }} >
</div>
        
        <div className='w-100 pt-5' style={{height:'100vh',marginTop:'-100vh',opacity:'.99'}}>
       
            <div className='ms-5' style={{width:'90%'}}>
            <div className='fs-1 mt-5 text-center'>My Bookings</div>
            <div className='p-5 ms-5 me-5' >
                <Table className='w-100' hover  responsive >
                    <thead  >
                        <tr style={{ backgroundColor:'' }} className='table-dark fw-bold  fs-4 text-center'>
                            <th>#</th>
                            <th>Date</th>
                            <th>Bus Name</th>
                            <th>Username</th>
                            <th>Seat Number </th>
                            <th>time</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className='bg-light'>
                        <tr className=' m-3 fs-4 text-center'>
                            <td>1</td>
                            <td>01/01/2001 </td>
                            <td>Fly travels</td>
                            <td>max</td>
                            <td>03</td>
                            <td>14:00</td>
                            <td><div> <Button style={{backgroundColor:'#f2f0f0',color:'#00e313' }}>Active</Button></div> </td>
                            <td>Done</td>
                            <td> <i className='fa-solid fa-trash'></i> </td>
                        </tr>
                        <tr className=' m-3 fs-4 text-center'>
                            <td>1</td>
                            <td>01/01/2001 </td>
                            <td>Fly travels</td>
                            <td>max</td>
                            <td>03</td>
                            <td>14:00</td>
                            <td><div> <Button style={{backgroundColor:'#f2f0f0',color:'#00e313' }}>Active</Button></div> </td>
                            <td>Done</td>
                            <td> <i className='fa-solid fa-trash'></i> </td>
                        </tr>
                        
                         </tbody>
                </Table>
            </div>
            </div>
            </div>
            
        </>
    )
}

export default Booking