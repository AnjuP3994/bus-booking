import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Row,Col } from 'react-bootstrap'
import admin_img from '../../Pages/assets/836.jpg'
import { getadminprofile, updateadminprofile } from '../../Services/allAPIs'
import Swal from 'sweetalert2';
import { Await } from 'react-router-dom'
import AdminHeader from '../Header/AdminHeader'

function Profile() {
  const[adprofile,setAdprofile]=useState({
    name:"",
    username:"",
    email_address:"",
    phone_number:""
})
  const[updtprofile,setUpdtprofile]=useState({
    name:"",
    username:"",
    email_address:"",
    phone_number:""
  })

  console.log(adprofile)

  const handlegetprofile=async ()=>{
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Authorization": `Token ${token}`
    }
    const result = await getadminprofile(reqHeader)
    console.log(result)
    setAdprofile(result.data)
  }

  useEffect(()=>{
    handlegetprofile()
  },[])


  const handleupdate=async ()=>{
    const{name,username,email_address,phone_number}=adprofile
    if(!name || !username || !email_address || !phone_number ){
      Swal.fire({
        title: `incomplete form`,
        text: `Please fill the form completely`,
        icon: "warning"
      });

    }else{
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Token ${token}`
    };
    const result= await updateadminprofile(reqHeader,adprofile)
    console.log(result)
    if(result.status===200){
      Swal.fire({
        title: `successful`,
        text: `profile  updated successfully`,
        icon: "success"
      });

      handlegetprofile()

    }
    else{
      Swal.fire({
        title: `error`,
        text: `something went wrong`,
        icon: "error"
      });

      console.log(result.response.data)
    }
    }
  }
  return (
    <>
    <AdminHeader/>
        <div className='mt-4'>
            {/* <Row>
                <Col lg={6} sm={12}  >
                   <div className='d-flex justify-content-center align-items-center'> <img src={admin_img} height={'700px'} alt="" /></div>


                </Col>
                <Col lg={6} sm={12}>
              

                </Col>
            </Row> */}
             <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
    
                <div className="card bg-glass">
                  <div className="card-body px-4 py-5 px-md-5">
                    <form>
                       <div className='d-flex justify-content-center'> <img src={admin_img} alt="" height={'100px'} style={{borderRadius:'50%'}} /></div>
                      {/* <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" />
                            <label className="form-label text-light" htmlFor="form3Example1">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" />
                            <label className="form-label text-light" htmlFor="form3Example2">Last name</label>
                          </div>
                        </div>
                      </div> */}
                      <Row className='mt-5'>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <label className=" text-light"  htmlFor="form3Example3"> Name</label> 
                        <input type="text" id="form3Example3" value={adprofile.name} onChange={(e) => setAdprofile({ ...adprofile, name: e.target.value })} className="form-control text-light" />
                     
                      </div>

                        </Col>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <label className=" text-light" htmlFor="form3Example4">Username</label>
                        <input  type="text" id="form3Example4" value={adprofile.username} onChange={(e) => setAdprofile({ ...adprofile, username: e.target.value })} className="form-control text-light" />
                       
                      </div>

                        </Col>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <label className="form text-light" htmlFor="form3Example3">Email</label>
                        <input type="email" id="form3Example3" value={adprofile.email_address} onChange={(e) => setAdprofile({ ...adprofile, email_address: e.target.value })} className="form-control text-light" />
                       
                      </div>

                        </Col>
                        <Col lg={6} sm={12}>
                        <div className="form-outline mb-4">
                        <label className=" text-light" htmlFor="form3Example4">Phone</label>
                        <input  type="text" id="form3Example4" value={adprofile.phone_number} onChange={(e) => setAdprofile({ ...adprofile, phone_number: e.target.value })}className="form-control text-light" />
                       
                      </div>

                        </Col>
                      </Row>
                      
                   
    
                      
    
                     
    
                      <div className="form-check d-flex justify-content-center mb-4">
                        {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label className="form-check-label" htmlFor="form2Example33">
                          Subscribe to our newsletter
                        </label> */}
                        {/* <p className='text-light'>Already have a Account?Please login?</p> */}
                      </div>
    
                     <div className=' d-flex justify-content-center'>
                          <button type="button" className="btn btn-primary btn-block mb-4 w-50" onClick={handleupdate}>
                           Update
                          </button>
                     </div>
    
                     
                    </form>
                  </div>
                </div>
              </div>
               </div>

        </div>
    </>
  )
}

export default Profile