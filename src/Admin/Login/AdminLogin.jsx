import React, { useState } from 'react'
import './adminLogin.css'
import Swal from 'sweetalert2';
import { adminloginAPI } from '../../Services/allAPIs';
import { useNavigate } from 'react-router';


function AdminLogin() {

  const [admindts,setAdmindts]=useState({
    username:"",
    password:""
  })
  console.log(admindts)
  const navigate=useNavigate()
 

  const handleLogin=async ()=>{
    const{username,password}=admindts
    if(!username || !password){
      Swal.fire({
        title: `incomplete form`,
        text: `Please fill the form completely`,
        icon: "warning"
      });
    }else{
      const reqBody=admindts
      const result=await adminloginAPI(reqBody)
      console.log(result)
      if(result.status===200){
        sessionStorage.setItem("token",result.data.token)
        Swal.fire({
         
          title: `Login successfull`,
          text: `admin logged in successfully`,
          icon: "success"
        });
        setTimeout(() => {
          navigate('/admin')
        }, 10);
      }else{
        Swal.fire({
          title: `error`,
          text: `Incorrect Username or Password`,
          icon: "error"
        });
        console.log(result.response.data)
      }
    }
  }

  return (
    <div>
      <section style={{height:'100vh'}} className='background-radial-gradient overflow-hidden'>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Hello Admin <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>Welcome back...Please Login</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
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

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control text-light"  onChange={(e) => setAdmindts({ ...admindts, username: e.target.value })} />
                    <label className="form-label text-light" htmlFor="form3Example3">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input  type="password" id="form3Example4" className="form-control text-light" onChange={(e) => setAdmindts({ ...admindts, password: e.target.value })} />
                    <label className="form-label text-light" htmlFor="form3Example4">Password</label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label className="form-check-label" htmlFor="form2Example33">
                      Subscribe to our newsletter
                    </label> */}
                    {/* <p className='text-light'>Already have a Account?Please login?</p> */}
                  </div>

                  <button type="button" className="btn btn-primary btn-block mb-4 " onClick={handleLogin}>
                    Sign In
                  </button>

                  <div className="text-center">
                    <p className='text-light'>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1 text-danger">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1 text-danger">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1 text-danger">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1 text-danger ">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

    </div>
  )
}

export default AdminLogin