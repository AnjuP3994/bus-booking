import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import updateImg from './assets/updatebg.jpg'
import BoHeader from '../BoHeader/BoHeader';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import { deleteBusapi, getCatgory, getallbus, updateBus } from '../../Services/allAPIs';
import { BASE_URL } from '../../Services/baseURL';

function BOManageBus() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState([])
    const[categoryId,setCategoryId]=useState('')

    const [oprprofile, setOprprofile] = useState([])
    const [uptbus,setUptbus]=useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
        boarding_point: "",
        boarding_time: "",
        dropping_point: "",
        dropping_time: "",
        duration: "",
        capacity: "",

    })
      console.log(oprprofile)
      const [bus_logo, setBus_logo] = useState(null)
      console.log(bus_logo)
      const [profileimg, setProfileimg] = useState("")

      useEffect(() => {
        if (bus_logo) {
          setProfileimg(URL.createObjectURL(bus_logo))
        }
        else {
          setProfileimg("")
        }
      }, [bus_logo])
    
    
    //   const handleBookClick = () => {
    //     setModalShow(true);
    //   };
    
      const handlegetprofile = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Authorization": `Token ${token}`
        }
        const result = await getallbus(reqHeader)
        console.log(result)
        if (result.status === 200) {
          setOprprofile(result.data)
        }
        else {
          console.log(result.response.data)
        }
    
      }
    
    
    
      useEffect(() => {
        handlegetprofile()
      }, [])

      const categories = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Authorization": `Token ${token}`
        }
        const result = await getCatgory(reqHeader)
        console.log(result.data)
        setCategory(result.data)
      }
      useEffect(() => {
        categories()
    
      }, [])
      console.log(category)

      useEffect(() => {
        if (oprprofile.length > 0) {

            oprprofile.map((item)=>(setUptbus({
               
                name: item.name,
                description:item.description ,
                price: item.price,
                image: item.image,
                category: item.image,
                boarding_point: item.boarding_point,
                boarding_time: item.boarding_time,
                dropping_point: item.dropping_point,
                dropping_time:item.dropping_time ,
                
                capacity:item.capacity,
              })))
         
          
        }
      }, [oprprofile]);
      console.log(uptbus)
      const handleclear=()=>{
        if (oprprofile.length > 0) {

            oprprofile.map((item)=>(setUptbus({
               
                name: item.name,
                description:item.description ,
                price: item.price,
                image: item.image,
                category: item.image,
                boarding_point: item.boarding_point,
                boarding_time: item.boarding_time,
                dropping_point: item.dropping_point,
                dropping_time:item.dropping_time ,
                
                capacity:item.capacity,
              })))
         
          
        }
      }
    
    //   console.log(`${BASE_URL}${oprprofile.logo}`)
    
      const handleupdate = async (id) => {
        const { name,price,description,boarding_point,boarding_time,capacity,category,image,dropping_point,dropping_time } = uptbus
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Token ${token}`
        };
        const reqBody = new FormData()
        reqBody.append("name", name)
        reqBody.append("description", description)
        reqBody.append("price", price)
        profileimg ? reqBody.append('image', bus_logo) : reqBody.append('image', image)
        reqBody.append("category", category)
        reqBody.append("boarding_point", boarding_point)
        reqBody.append("boarding_time", boarding_time)
        reqBody.append("dropping_point", dropping_point)
        reqBody.append("dropping_time", dropping_time)
        
        
    
        const result= await updateBus(id,reqBody,reqHeader)
        console.log(result)
    
        if(result.status===200){
          Swal.fire({
            title: `successful`,
            text: `profile  updated successfully`,
            icon: "success"
          });
    
          
    
        }else{
          Swal.fire({
            title: `error`,
            text: `something went wrong`,
            icon: "error"
          });
    
          console.log(result.response.data)
        }
      }
    

      const handleDelete=async(id)=>{
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Authorization": `Token ${token}`
        }
        const result = await deleteBusapi(id,reqHeader)
        console.log(result)
        if(result.status===204){
            Swal.fire({
         
                title: ` successfull`,
                text: `User has been deleted successfully`,
                icon: "success"
              });
              handlegetprofile()
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
            <BoHeader />
            <div className='d-flex'>
                {/* <div style={{ height: '100vh', width: '11%', position: 'fixed', backgroundColor: '#10a0b0', marginTop: '90px' }}>
                    <h3 className=' ms-1 mt-3 text-center text-dark fs-2'> Manage BUS</h3><br />
                    <div className=' ms-5 fs-5 '>
                        <Button className='mt-2 pe-4 ' style={{ color: '#ffffff' }}> <i className="fas fa-snowflake ms-3 me-2  "></i> AC</Button> <br />
                        <Button className='mt-3' style={{ color: '#ffffff' }}> <i class="fa-solid fa-ban"></i> Non A/C</Button> <br />
                        <Button className='mt-3' style={{ color: '#ffffff' }}><i class="fa-solid fa-couch"></i>  Seater</Button><br />
                        <Button className='mt-3' style={{ color: '#ffffff' }}><i class="fa-solid fa-bed"></i> Sleeper</Button> <br />
                    </div>
                </div> */}
                <div className='mt-5' style={{ width: '100%', marginLeft: '15%' }}>
                    <div style={{ marginTop: '70px' }}>
                        <p className='text-center fs-1 me-5 pe-5' >  Your Buses </p>
                        <Row>
                           {oprprofile?.length>0?
                           oprprofile.map((item)=>(<Col lg={10} xs={10} md={4}>
                            <div className="listcard shadow p-4 w-100 ">
                                <Row>
                                <Col xs={2}>
                                      <div> <img className='img-fluid' src={`${BASE_URL}${item.image}`} alt="" /></div>
                                    </Col>
                                    
                                    <Col xs={3}>
                                        <h4 className='fw-bolder'>{item.name}</h4>
                                        <p>{item.category}</p>
                                        {/* <p className='text'>Contact no: {item.phone}</p> */}
                                        <p className='rating ps-1'><i style={{ fontSize: '12px' }} class="fa-solid fa-star me-1"></i>4.6</p>
                                    </Col>

                                    <Col xs={4} className='d-flex justify-content-center mt-3'>
                                        <Row className='time'>
                                            <Col lg={4} className='text-center'>
                                                <p className='textclr fw-bolder fs-5'>{item.boarding_point}</p>
                                                <p className='textclr fw-bolder'>{item.boarding_time}</p>
                                            </Col>
                                            <Col lg={2} className='mt-3'>
                                                <p className='fw-bolder fs-5'>to</p>
                                            </Col>
                                            <Col lg={4} className='text-center'>
                                                <p className='textclr fw-bolder fs-5'>{item.dropping_point}</p>
                                                <p className='textclr fw-bolder'>{item.dropping_time}</p>
                                            </Col>
                                            <p>Duration:{item.duration}</p>
                                        </Row>
                                    </Col>

                                    <Col xs={3} className='text-end mt-2'>
                                        <h3 className='text-danger fw-bolder'><i style={{ fontSize: '25px' }} class="fa-solid fa-indian-rupee-sign me-2"></i>{item.price}</h3>
                                        <div className='d-flex text-end mt-5'>
                                            <Button onClick={handleShow} >Manage Bus</Button>
                                            <Button className='btn btn-danger ms-3' onClick={()=>handleDelete(item.id)} >Delete</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}  >
                                    <Modal.Header closeButton>
                                        <Modal.Title className='text-dark'>Update Bus Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body >
                  <h4 className='text-center'>Update your Bus Details </h4>
                  <div className='d-flex justify-content-center'>
                   
                    <label htmlFor="img">
                         {/* <img src={`${BASE_URL}${uptbus.image}`} className='img-fluid' height={'100px'} width={'100px'} alt="" /> */}


                      {uptbus.image == null || "" ? <img className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} src={profileimg ? profileimg : `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp`} alt="logo" />
                        : <img className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} src={profileimg ? profileimg : `${BASE_URL}${uptbus.image}`} alt="logo" />
                      }
                    </label>
                    <input type="file" id='img' style={{ display: 'none' }} onChange={(e) => setBus_logo(e.target.files[0])} />
                  </div>
                  <MDBContainer fluid>
                    <Form>

                      <MDBRow className='justify-content-center align-items-center m-5 shadow'>

                        <MDBCard>
                          <MDBCardBody className='px-4'>







                            <MDBRow>

                              <MDBCol md='6'>
                                
                                <MDBInput wrapperClass='mb-4' label=' Name' value={uptbus.name} onChange={(e) => setUptbus({ ...uptbus, name: e.target.value })} size='lg' id='form1' type='text' />
                              </MDBCol>

                              <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='price ' size='lg' id='form2' type='text' value={uptbus.price} onChange={(e) => setUptbus({ ...uptbus, price: e.target.value })} />
                              </MDBCol>

                            </MDBRow>
                            <MDBRow>

                              <MDBCol md='6'>
                                
                                <MDBInput wrapperClass='mb-4' label=' boarding_point' value={uptbus.boarding_point} onChange={(e) => setUptbus({ ...uptbus, boarding_point: e.target.value })} size='lg' id='form1' type='text' />
                              </MDBCol>

                              <MDBCol md='6'>
                             
                                <MDBInput wrapperClass='mb-4' label='boarding_time ' size='lg' id='form2' type='time' value={uptbus.boarding_time} onChange={(e) => setUptbus({ ...uptbus, boarding_time: e.target.value })} />
                              </MDBCol>

                            </MDBRow>
                            <MDBRow>

                              <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label=' dropping_point'value={uptbus.dropping_point} onChange={(e) => setUptbus({ ...uptbus, dropping_point: e.target.value })} size='lg' id='form1' type='text' />
                              </MDBCol>

                              <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='dropping_time ' size='lg' id='form2' type='time' value={uptbus.dropping_time} onChange={(e) => setUptbus({ ...uptbus, dropping_time: e.target.value })} />
                              </MDBCol>

                            </MDBRow>
                            <label htmlFor="ctgr">Choose your category</label>

                <select id='ctgr' className="form-select mb-4" aria-label="Choose your category" onChange={(e) => setCategoryId( e.target.value)} >
                  {category?.length > 0 ? (
                    category.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  ) : (
                    <option disabled>No categories available yet</option>
                  )}
                </select>
                            <MDBInput wrapperClass='mb-4' label='description' size='lg' id='form3' type='text' value={uptbus.description} onChange={(e) => setUptbus({ ...uptbus, description: e.target.value })}/>
                            <MDBInput wrapperClass='mb-4' label='capacity' size='lg' id='form4' type='text' value={uptbus.capacity} onChange={(e) => setUptbus({ ...uptbus, capacity: e.target.value })} />
                            



                            <div className='d-flex justify-content-evenly'>
                              <MDBBtn type='button' className='mb-4 btn-danger' size='lg' onClick={handleclear}>Clear</MDBBtn>


                            </div>

                          </MDBCardBody>
                        </MDBCard>

                      </MDBRow>
                    </Form>
                  </MDBContainer>


                </Modal.Body>
                <Modal.Footer>
                  <button className='btn btn-success' onClick={()=>handleupdate(item.id)}  >ADD</button>

                  <Button onClick={() => handleClose(false)}>Close</Button>
                </Modal.Footer>
                                </Modal>
                            </div>
                        </Col>))
                            
                            : <p>nothing to show</p> }
                        </Row>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BOManageBus