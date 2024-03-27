import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import Header from '../../Components/Header/Header';

function UserPayment() {
    return (
        <>
        <Header/>
        <div className='mt-5 pt-5'>

        
            <section  style={{ backgroundColor: "#eee" ,height:'100vh'}} >
                <MDBContainer className="py-5" style={{maxWidth:'700px'}}>
                    <MDBRow className="justify-content-center align-items-center ">
                     <MDBCol>
                     <MDBCard>
                     <MDBCardBody className="p-3">
                     <MDBRow>
                     <MDBCol lg="12">
                     <MDBCard className="bg-primary text-white rounded-3 p-4">
                     <MDBCardBody>
                     <div className="d-flex justify-content-between align-items-center mb-4">
                     </div>
                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-mastercard fa-2x me-2"/></a>
                        <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-visa fa-2x me-2"/></a>
                        <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-amex fa-2x me-2"/></a>
                        <a href="#!" type="submit" className="text-white"><MDBIcon fab icon="cc-paypal fa-2x me-2"/></a>
                <form className="mt-4">
                     <MDBInput className="mb-4" label="Cardholder's Name" placeholder="Cardholder's Name" type="text" size="lg" contrast />
                     <MDBInput className="mb-4" label="Card Number" type="text" size="lg" minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast/>
                     <MDBRow className="mb-4">
                     <MDBCol md="6">
                     <MDBInput className="mb-4" label="Expiration" type="text" size="lg"  minLength="6" maxLength="6" placeholder="MM/YY" contrast />
                     </MDBCol>
                     <MDBCol md="6">
                     <MDBInput className="mb-4" label="CVV" type="text" size="lg" minLength="3"  maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                     </MDBCol>
                     </MDBRow>
                </form>
                     <hr />
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Total(Incl. taxes):</p>
                    </div>
                    <Button variant="success" color="info" block size="lg" >
                     <div className="d-flex justify-content-between">
                        <span> Checkout{" "} <i className="fas fa-long-arrow-alt-right ms-2"></i> </span>
                    </div>
                    </Button>
                    </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    </MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
        </>
    )
}

export default UserPayment