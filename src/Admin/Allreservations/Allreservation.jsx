import React, { useEffect, useState } from 'react'
import { getBookings, getadminallReservations } from '../../Services/allAPIs'
import { Button, Table } from 'react-bootstrap'
import AdminHeader from '../Header/AdminHeader'

function Allreservation() {
    const[bookingdetails,setBookingdetails]=useState([])

    const getreservations = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Authorization": `Token ${token}`
        }
        const result = await getadminallReservations(reqHeader)
        console.log(result.data)
        setBookingdetails(result.data)
      }
    
      useEffect(() => {
        getreservations()
      }, [])
      console.log(bookingdetails)
  return (
    <>
    <AdminHeader/>
    <div className='ms-1 mt-5' style={{width:'100%'}}>
    <div className='fs-1 text-center' style={{marginTop:'7%'}}>All Reservations</div>
    <div className='p-5 ms-5 me-5' >
        <Table className='w-100 table' hover  responsive >
            <thead  >
                <tr style={{ backgroundColor:'' }} className='table-dark fw-bold  fs-8 text-center'>
                    <th>#</th>
                    <th>Date of Booking</th>
                    <th>Bus Name</th>
                    <th>Passenger Name</th>
                    <th>Contact</th>
                    <th>Boarding Place</th>
                    <th>Boarding time</th>
                    <th>Droping Place</th>
                    <th>Droping time</th>
                    <th>Seat Number </th>
                    <th>Reservation date&time</th>
                    <th>Reservation Status</th>
                    <th>Payment</th>
                    <th>Action</th>
                </tr>
            </thead>
        <tbody className='bg-light'>
               {bookingdetails?.length>0?
               bookingdetails.map((item,index)=>( 
                 <tr className=' m-3 fs-8 text-center'>
               <td>{index+1}</td>
               <td>{item.journey_date} </td>
               <td>{item.bus.name}</td>
               <td>{item.user.name}</td>
               <td>7897897799</td>
               <td>{item.bus.boarding_point} </td>
               <td>{item.bus.boarding_time}</td>
                <td>{item.bus.dropping_point}</td>
                <td>{item.bus.dropping_time}</td>
               <td>{item.seat_number}</td>
               <td>{item.reservation_time}</td>
               <td> {item.reservation_status}</td>
               <td>Done</td>
               <td> <i className='fa-solid fa-trash'></i> </td>
            </tr>))
                : <p>nothing to show</p>
              }
        </tbody>
        </Table>
    </div>
    </div>
</>
  )
}

export default Allreservation