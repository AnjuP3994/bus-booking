import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getadminuserpayment } from '../../Services/allAPIs';
import { useEffect } from 'react';
import AdminHeader from '../Header/AdminHeader';

function AdpaymentHistory() {
    const [payment, setPayment] = useState([])


    const handlepayment = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            "Authorization": `Token ${token}`
        }
        const result = await getadminuserpayment(reqHeader)
        console.log(result)
        setPayment(result.data)
    }
    useEffect(() => {
        handlepayment()
    }, [])
    return (
        <div>
            <AdminHeader/>
            <div >
                <h2 className='text-center' style={{marginTop:'7%',marginBottom:'1%'}}>  all Payment History</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Bus Name</th>
                            <th>Journey date and Time</th>
                            <th>Boarding Point</th>
                            <th>Boarding Time</th>
                            <th>Droping Point</th>
                            <th>Droping time </th>
                            <th>Amount</th>
                            <th>Payment Date and time </th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {payment?.length > 0 ?
                            payment.map((item, index) => (<tr>
                                <td>{index + 1}</td>
                                <td>{item.user}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>df</td>
                                <td>sf</td>
                                <td>sfd</td>
                                <td>sf</td>
                                <td>{item.amount}</td>
                                <td>
                                    {/* Splitting payment_time into date and time components */}
                                    {item.payment_time.split('T')[0]} {/* Date Component */}
                                    {' '}
                                    {item.payment_time.split('T')[1].slice(0, -1)} {/* Time Component */}
                                </td>
                                <td>{item.payment_status}</td>
                            </tr>)) : <p>no payment history for you</p>}

                    </tbody>
                </Table>
            </div></div>
    )

}

export default AdpaymentHistory