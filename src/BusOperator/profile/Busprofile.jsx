import React, { useEffect, useState } from 'react'
import './busprofile.css'
import { Row, Col } from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getoperatorprofile, updateaoperatorprofile } from '../../Services/allAPIs';
import { BASE_URL } from '../../Services/baseURL';
import Swal from 'sweetalert2';

function Busprofile() {
  const [modalShow, setModalShow] = useState(false)
  const [oprprofile, setOprprofile] = useState({
    username: "",
    email: "",
    phone: "",
    name: "",
    description: "",
    address: "",
    website: "",
    logo: ""
  })
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


  const handleBookClick = () => {
    setModalShow(true);
  };

  const handlegetprofile = async () => {
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      "Authorization": `Token ${token}`
    }
    const result = await getoperatorprofile(reqHeader)
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
  console.log(oprprofile)

  console.log(`${BASE_URL}${oprprofile.logo}`)

  const handleupdate = async () => {
    const { name, username, email, website, description, address, phone, logo } = oprprofile
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      "Authorization": `Token ${token}`
    };
    const reqBody = new FormData()
    reqBody.append("username", username)
    reqBody.append("email", email)
    reqBody.append("phone", phone)
    reqBody.append("name", name)
    reqBody.append("description", description)
    reqBody.append("address", address)
    reqBody.append("website", website)
    profileimg && reqBody.append('logo', bus_logo)

    const result= await updateaoperatorprofile(reqBody,reqHeader)
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




   



  return (


    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">

          {oprprofile ? <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={`${BASE_URL}${oprprofile.logo}`}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{oprprofile.name}</MDBTypography>
                  <MDBCardText>{oprprofile.description}</MDBCardText>
                  <i class="fa-regular fa-pen-to-square" onClick={handleBookClick}></i>

                  <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    {/* <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         BOOK NEEL
       </Modal.Title>
     </Modal.Header> */}
                    <Modal.Body>
                      <h4 className='text-center'>Update your Profile </h4>
                      <div className='d-flex justify-content-center'>
                        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" className='img-fluid' height={'100px'} width={'100px'} alt="" /> */}
                        <label htmlFor="img">


                          {oprprofile.logo == null || "" ? <img className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} src={profileimg ? profileimg : `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp`} alt="logo" />
                            : <img className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} src={profileimg ? profileimg : `${BASE_URL}${oprprofile.logo}`} alt="logo" />
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
                                    <MDBInput wrapperClass='mb-4' label=' Name' value={oprprofile.name} onChange={(e) => setOprprofile({ ...oprprofile, name: e.target.value })} size='lg' id='form1' type='text' />
                                  </MDBCol>

                                  <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Phone ' size='lg' id='form2' type='text' value={oprprofile.phone} onChange={(e) => setOprprofile({ ...oprprofile, phone: e.target.value })} />
                                  </MDBCol>

                                </MDBRow>
                                <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form3' type='text-area' value={oprprofile.address} onChange={(e) => setOprprofile({ ...oprprofile, address: e.target.value })} />
                                <MDBInput wrapperClass='mb-4' label='description' size='lg' id='form3' type='text' value={oprprofile.description} onChange={(e) => setOprprofile({ ...oprprofile, description: e.target.value })} />
                                <MDBInput wrapperClass='mb-4' label='website' size='lg' id='form4' type='text' value={oprprofile.website} onChange={(e) => setOprprofile({ ...oprprofile, website: e.target.value })} />
                                <MDBInput wrapperClass='mb-4' label='email' size='lg' id='form4' type='email' value={oprprofile.email} onChange={(e) => setOprprofile({ ...oprprofile, email: e.target.value })} />




                                <div className='d-flex justify-content-evenly'>
                                  <MDBBtn type='button' className='mb-4 btn-danger' size='lg'>Clear</MDBBtn>


                                </div>

                              </MDBCardBody>
                            </MDBCard>

                          </MDBRow>
                        </Form>
                      </MDBContainer>


                    </Modal.Body>
                    <Modal.Footer>
                      <button className='btn btn-success' onClick={handleupdate}  >ADD</button>

                      <Button onClick={() => setModalShow(false)}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">address</MDBTypography>
                        <MDBCardText className="text-muted">{oprprofile.address}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">website</MDBTypography>
                        <MDBCardText className="text-muted">{oprprofile.website}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6"></MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{oprprofile.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{oprprofile.phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    {/* <div className="d-flex justify-content-start">
                   <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                   <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                   <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                 </div> */}
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
            : <p>please login</p>}


        </MDBRow>
      </MDBContainer>
    </section>


  )
}

export default Busprofile