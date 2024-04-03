import React from 'react'
import image from '../assets/5203299.jpg'
import { Link } from 'react-router-dom'


function Pagenotfounf() {
    return (
        <div className='mdiv d-flex justify-content-center align-items-center' style={{ height: '70vh' }}  >

            <div style={{height:"400px",width:'50%'}}>
                <img className='img-fluid' src={image} height={'300px'} alt="" />
                <h3 className='text-center text-danger fw-bold'>oops....Page Not Found</h3>
                
                <div className='d-flex justify-content-center'>
                    <Link to={'/'}><button className='btn btn-success'>Home</button></Link>
                </div>

            </div>

        </div>
    )
}

export default Pagenotfounf