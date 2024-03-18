import React, { useState } from 'react'
import './userprofile.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon,MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Userprofile() {

    const [modalShow, setModalShow] = useState(false)


    const handleBookClick = () => {
        setModalShow(true);
    };
  return (
    <div className='d-flex justify-content-center align-items-center profile' style={{height:'100vh'}} >
          <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  <MDBCardText>description</MDBCardText>
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
          <h4 className='text-center'>Add Categories of Your Bus </h4>
          <div className='d-flex justify-content-center'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" className='img-fluid' height={'100px'} width={'100px'} alt="" />
          </div>
          <MDBContainer fluid>
        <Form>

          <MDBRow className='justify-content-center align-items-center m-5 shadow'>

            <MDBCard>
              <MDBCardBody className='px-4'>

               





                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label=' Name' size='lg' id='form1' type='text' />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Phone ' size='lg' id='form2' type='text'  />
                  </MDBCol>

                </MDBRow>
                <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form3' type='text-area'  />
                <MDBInput wrapperClass='mb-4' label='description' size='lg' id='form3' type='text'  />
                <MDBInput wrapperClass='mb-4' label='website' size='lg' id='form4' type='text'  />
                <MDBInput wrapperClass='mb-4' label='email' size='lg' id='form4' type='email'  />

                
               
           
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
        <button className='btn btn-success'  >ADD</button>

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
                        <MDBTypography tag="h6">addres</MDBTypography>
                        <MDBCardText className="text-muted">lansdkma</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">website</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
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
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Userprofile