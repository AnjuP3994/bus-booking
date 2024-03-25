import React from 'react'
import './footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
    <MDBFooter className='footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='text-light'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <div>  <h5 className='d-flex text-uppercase fw-bold mb-4'>
                <img src="https://cdn-icons-png.flaticon.com/512/1036/1036175.png" width={'50px'} alt="" />
               <p className='bus'>Bus<span className='hub'>Hubb </span></p>
              </h5> </div>
              <p>
              BusHubb is the India's largest online bus ticket booking service trusted by over 25 million happy customers. 
              BusHubb offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About BusHubb</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Contac us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Offers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Values
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Info</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  T&C
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Privacy policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Bus operator registration
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Popular Sites</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Goa
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Kochi
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Bangalore
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Delhi
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Chennai
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-light p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold text-decoration-none' href='/'>
          BusHubb.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer