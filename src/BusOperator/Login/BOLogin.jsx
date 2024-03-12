import React, { useState } from 'react'
import './BOLogin.css'
import { Container, Row, Col, Toast } from 'react-bootstrap'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { bologinAPI, boregisterAPI } from '../../Services/allAPIs';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function BOLogin({registerpage}) {

    const BOregister = registerpage ? true : false

    const navigate = useNavigate()

    const [BODetails, setBODetails] = useState({
        name: "",
        phone: "",
        username: "",
        password: "",
        description: "",
        bus_img:"",
        address: "",
        website: ""
    })
    console.log(BODetails);

    const handleRegister = async(e)=>{
        e.preventDefault();
        const{name,phone,username,password,description,bus_img,address,website}=BODetails

        if (!BODetails.name || !BODetails.phone || !BODetails.website || !BODetails.address || !BODetails.description || !BODetails.username || !BODetails.password || !BODetails.bus_img ) {
            toast.error("Please fill the form with valid data.")

        }
         else {
            //to store the user data
            const reqHeader = {
                "Content-Type": "multipart/form-data",
            };
            const reqBody=new FormData()
            reqBody.append("name", name);
            reqBody.append("phone", phone);
            reqBody.append("username", username);
            reqBody.append("password", password);
            reqBody.append("description", description);
            reqBody.append("bus_img", bus_img);
            reqBody.append("address", address);
            reqBody.append("website", website);


            const result = await boregisterAPI(reqBody,reqHeader)
            console.log(result);
            if (result.status==200) {
                Swal.fire({
                    title: "Registered successfully",
                    text: `${result.data.username} has been registered.`,
                    icon: "success"
                  });
                setBODetails({
                    name:"",
                    phone:"",
                    website:"",
                    address:"",
                    description:"",
                    bus_img:"",
                    username:"",
                    password:""
                })
                navigate('/bologin')
            }
        }
    }

    const handleLogin = async(e)=>{
        e.preventDefault();
        if (!BODetails.username || !BODetails.password) {
            toast.error("Please fill the form with valid data.")
        } else {

           
            const result = await bologinAPI(BODetails)
            console.log(result);
            if (result.status==200) {
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                setBODetails({
                    username:"",
                    password:""
                })
                navigate('/bohomepage')
            } 
            else {
                toast.warning("Login Failed.")
            }
        }
    }

  return (
    <>
    <div className='body'>

        <Container className='center'>
            
            <div className="card1 shadow w-100">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='bgclr d-flex justify-content-center align-items-center'>                   
                        <div className='text-center text-dark p-5'>
                            <h1 className='fw-bolder'>Welcome Back!</h1>
                            { BOregister?
                            <div>
                                <h5>To keep connected with us please login with your personal info</h5>
                                <Link to={'/bologin'}><button className='btnlogin mt-3'>SignIn</button></Link>
                            </div>
                            :
                            <div>
                                <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor deserunt enim nihil hic alias aut provident nulla blanditiis quis dignissimos sapiente, amet libero voluptas magni adipisci doloremque, porro rem in!</h6>
                                <button className='btn btn-outline-dark mt-3'>Know more</button>
                            </div>
                            }
                            <div className='mt-4'>
                                <Link to={'/'}><h6>Back to Home</h6></Link>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='p-5'>
                        { BOregister?
                            <h2 className='fw-bolder mb-4'>Create an Account</h2>
                            :
                            <h2 className='fw-bolder mb-4'>SignIn to your Account</h2>
                        }
                        { BOregister &&
                            <div>
                                <div className='d-flex justify-content-between gap-4 mb-3'>
                                    <MDBInput value={BODetails.name} onChange={e => setBODetails({ ...BODetails, name: e.target.value })} label='Your Name' type='text' />
                                    <MDBInput value={BODetails.phone} onChange={e => setBODetails({ ...BODetails, phone: e.target.value })} label='Phone No' type='text' />
                                </div>
                                <MDBInput value={BODetails.website} onChange={e => setBODetails({ ...BODetails, website: e.target.value })} label='Your Website Link' type='text' />
                                <div className='d-flex justify-content-between gap-4 my-3'>
                                    <MDBTextArea value={BODetails.address} onChange={e => setBODetails({ ...BODetails, address: e.target.value })} label='Address' rows={3} />
                                    <MDBTextArea value={BODetails.description} onChange={e => setBODetails({ ...BODetails, description: e.target.value })} label='Description' rows={3} />
                                </div>
                                <MDBInput onChange={e => setBODetails({ ...BODetails, bus_img: e.target.files[0]})}  type='file' className='mb-3' />
                            </div>
                        }
                        <div className='text-center'>
                            <MDBInput value={BODetails.username} onChange={e => setBODetails({ ...BODetails, username: e.target.value })} label='Username' type='text' />
                            <MDBInput value={BODetails.password} onChange={e => setBODetails({ ...BODetails, password: e.target.value })} label='Password' className='mt-3 mb-4' type='password' />
                            { BOregister?
                                <button onClick={handleRegister} className='btnregis'>Register</button>
                                :
                                <div>
                                    <button onClick={handleLogin} className='btnregis'>Login</button>
                                    <p className='mt-4'>Don't have an account? <Link to={'/boregister'}>SignUp now</Link></p>
                                </div>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
            
        </Container>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce} />
    </div>
    </>
  )
}

export default BOLogin


