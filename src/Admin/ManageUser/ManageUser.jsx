import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Table } from 'react-bootstrap';
import bgImage  from "./assets/manage-user-bg.jpg"
import profileImage  from "./assets/user_img.jpg"
import Swal from 'sweetalert2';

import './mangeUser.css'
import { deleteUser, getUser } from '../../Services/allAPIs';
import { BASE_URL } from '../../Services/baseURL';
import AdminHeader from '../Header/AdminHeader';

function ManageUser() {
    const [users,setUsers]=useState([])


    
    const handleuser = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Authorization": `Token ${token}`
        }
        const result = await getUser(reqHeader)
        console.log(result)
        setUsers(result.data)
      }
    
      useEffect(() => {
        handleuser()
      }, [])
      console.log(users)

    //  console.log(`${BASE_URL}${users[0].profile_picture}`)

    const handleDelete=async(id)=>{
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Authorization": `Token ${token}`
        }
        const result = await deleteUser(id,reqHeader)
        console.log(result)
        if(result.status===204){
            Swal.fire({
         
                title: ` successfull`,
                text: `User has been deleted successfully`,
                icon: "success"
              });
              handleuser()
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

                        <Table bordered hover style={{borderColor:'black',fontSize: '1.5rem'}} >
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
                               { users?.length>0?
                               users.map((item,index)=>(<tr className='fs-3'>
                               <td>{index+1}</td>
                               <td  className='d-flex'>
                                    <img src={`${BASE_URL}${item.profile_picture}`} alt="" />
                                    <p className='ms-5 mt-2'>{item.name}</p>
                               </td>
                               <td>{item.phone}</td>
                               <td>{item.username}</td>
                               <td>{item.date_of_birth}</td>
                               <td>{item.address}</td>
                               <td className=' text-center'><i className="fa-solid fa-trash " onClick={()=>handleDelete(item.id)}></i></td>
                               {/* <img src={`${BASE_URL}${item.profile_picture}`} alt="" /> */}
                           </tr>
                           ))
                                : <p>nothing to show</p> }
                                
                               
                              
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
