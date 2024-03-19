import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Table } from 'react-bootstrap';
import bgImage  from "./assets/manage-user-bg.jpg"
import profileImage  from "./assets/user_img.jpg"
import './mangeUser.css'
import AdminHeader from '../Header/AdminHeader';

function ManageUser() {

    return (
        <>
            <AdminHeader/>
            <div style={{
                backgroundImage:`url(${bgImage})`,
                width:'100%',height:'100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment:'fixed',
                overflow:'hidden'
            }} >
                <div  style={{padding:'8%'}}>
                <div style={{background: '#ffffff' ,border:'1px',borderRadius:'30px',opacity:'0.85'}}>
                <h1 className='d-flex fw-bolder ms-5 ps-5 pt-5  '>Manage User</h1>
                <div className='containter' style={{ height: '50vh', overflowY: 'auto'}}>
                    <div className='p-5 ms-5 me-5' >
                        <Table bordered hover style={{borderColor:'black'}} >
                            <thead>
                                <tr style={{backgroundColor:'#0095a9'}}  className='table-info fw-bold fs-3'>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Mobile No</th>
                                    <th>Username</th>
                                    <th>DOB</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='fs-3'>
                                    <td>1</td>
                                    <td  className='d-flex'>
                                         <Stack direction="row" >
                                         <Avatar  alt="Remy Sharp" src={profileImage} sx={{ width: 35, height: 35 }} /> </Stack>
                                         <p className='ms-5 mt-2'> Mark </p>
                                    </td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>01/01/2001</td>
                                    <td>asdf 620555</td>
                                    <td className=' text-center'><i className="fa-solid fa-trash "></i></td>
                                </tr>
                                <tr className='fs-3'>
                                    <td>2</td>
                                    <td  className='d-flex'>
                                         <Stack direction="row" >
                                         <Avatar  alt="Remy Sharp" src={profileImage} sx={{ width: 35, height: 35 }} /> </Stack>
                                         <p className='ms-5 mt-2'> Jacob </p>
                                    </td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>02/02/2002</td>
                                    <td>asdf 620555</td>
                                    <td  className=' text-center'><i class="fa-solid fa-trash"></i></td>
                                </tr>
                                <tr className='fs-3'>
                                    <td>3</td>
                                    <td  className='d-flex'>
                                         <Stack direction="row" >
                                         <Avatar  alt="Remy Sharp" src={profileImage} sx={{ width: 35, height: 35 }} /> </Stack>
                                         <p className='ms-5 mt-2'> Jacob </p>
                                    </td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>02/02/2002</td>
                                    <td>asdf 620555</td>
                                    <td className=' text-center'><i className="fa-solid fa-trash"></i></td>
                                </tr>
                                <tr className='fs-3'>
                                    <td>4</td>
                                    <td  className='d-flex'>
                                         <Stack direction="row" >
                                         <Avatar  alt="Remy Sharp" src={profileImage} sx={{ width: 35, height: 35 }} /> </Stack>
                                         <p className='ms-5 mt-2'> Jacob </p>
                                    </td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>02/02/2002</td>
                                    <td>asdf 620555</td>
                                    <td className=' text-center'><i className="fa-solid fa-trash"></i></td>
                                </tr>
                                <tr className='fs-3'>
                                    <td>5</td>
                                    <td  className='d-flex'>
                                         <Stack direction="row" >
                                         <Avatar  alt="Remy Sharp" src={profileImage} sx={{ width: 35, height: 35 }} /> </Stack>
                                         <p className='ms-5 mt-2'> Jacob </p>
                                    </td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>02/02/2002</td>
                                    <td>asdf 620555</td>
                                    <td className=' text-center'><i className="fa-solid fa-trash" ></i></td>
                                </tr>
                                <tr className='fs-3'>
                                    <td>6</td>
                                    <td  className='d-flex'>
                                         <Stack direction="row" >
                                         <Avatar  alt="Remy Sharp" src={profileImage} sx={{ width: 35, height: 35 }} /> </Stack>
                                         <p className='ms-5 mt-2'> Jacob </p>
                                    </td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>02/02/2002</td>
                                    <td>asdf 620555</td>
                                    <td className=' text-center'><i className="fa-solid fa-trash"></i></td>
                                </tr>
                                <tr className='fs-3'>
                                    <td>7</td>
                                    <td  className='d-flex'>
                                         <Stack direction="row" >
                                         <Avatar  alt="Remy Sharp" src={profileImage} sx={{ width: 35, height: 35 }} /> </Stack>
                                         <p className='ms-5 mt-2'> Jacob </p>
                                    </td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>02/02/2002</td>
                                    <td>asdf 620555</td>
                                    <td className=' text-center'><i className="fa-solid fa-trash"></i></td>
                                </tr>
                               
                              
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ width: '100%', height: '30px' }}>
                    <div className=' col-lg-2'>

                    </div>
                </div>
   </div>
   </div> 
   </div>
         

        </>
    )
}

export default ManageUser
