import React, { useEffect } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import cardImg from './assets/busLoGo.jpg';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addFeedback, getUserReservations } from '../../Services/allAPIs';
import Swal from 'sweetalert2';



function Bookinghistory() {
  const [value, setValue] = React.useState(3);
  // console.log(value );

  const [show, setShow] = useState(false);
  const [reservations,setReservations]=useState([])
  const [feedback,setFeedback]=useState({
    rating:value,
    comment:''

  })
  useEffect(() => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      rating: value
    }));
  }, [value]);
  console.log(feedback)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handlegetreservations=async()=>{
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Authorization": `Token ${token}`
    }
    const result=await getUserReservations(reqHeader)
    // console.log(result)
    if(result.status===200){
      setReservations(result.data)
    }else{
      console.log(result.response.data)
    }
    
  }

  useEffect(()=>{
    handlegetreservations()
  },[])


  const handleFeedbackadd=async(id)=>{
    const{rating,comment}=feedback
    if(!comment || !rating){
      Swal.fire({
        title: `incomplete form`,
        text: `Please fill the form completely`,
        icon: "warning"
      });
    }else{
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Authorization": `Token ${token}`
      }
      const reqBody=feedback
      const result=await addFeedback(id,reqBody,reqHeader)
      console.log(result)
      if(result.status===200){
        Swal.fire({
          title: `Successfull`,
          text: `Feedback Posted Successfully`,
          icon: "success"
        });
        setFeedback({
          rating:value,
          comment:''
        })

      }else{
        console.log(result.response.data)

      }
    }
  }
  return (
    <>
      <h1 className='fw-bolder text-center'>Booking History</h1>
      
     <div className='d-flex justify-content-center'>
         <div className="listcard shadow p-3 w-75 mb-4">
        <Row>
       {reservations?.length>0?
       reservations.map((item)=>( <Col className='d-flex'>
        
       <Col lg={2} sm={12}>
           <div  className='d-flex justify-content-center align-items-center' ><img src={cardImg} className='img-fluid' height={'100%'} alt="" /></div>
         </Col>
         <Col lg={3} sm={12}>
           <h4 className='fw-bolder'>{item.bus.name}</h4>
           <p>{item.bus.category}</p>
           <p className='text'>Seat No: <span className='text-danger fw-bold'>{item.seat_number}</span></p>
           <p className='rating ps-1'><i style={{fontSize:'12px'}} class="fa-solid fa-star me-1"></i>4.6</p>
         </Col>
 
         <Col lg={4} sm={12} className='d-flex justify-content-center mt-3 flex-column'>
           <Row className='time'>
             <Col lg={5} className='text-center'>
               <p className='textclr fw-bolder fs-9 ' style={{lineHeight:'1rem'}}>{item.bus.boarding_point}</p>
               <p className='textclr fw-bolder'>{item.bus.boarding_time}</p>
             </Col>
             <Col lg={2} className='mt-3'>
               <p className='fw-bolder fs-5'>to</p>
             </Col>
             <Col lg={5} className='text-center'>
               <p className='textclr fw-bolder fs-9' style={{lineHeight:'1rem'}}>{item.bus.dropping_point}</p>
               <p className='textclr fw-bolder'>{item.bus.dropping_time}</p>
             </Col>
             
           </Row>
           <div>
           <p className='text-center'>STATUS:
  {item.reservation_status === 'Pending' ? 
    <span className='text-danger'>{item.reservation_status}</span> :
    <span className='text-success'>{item.reservation_status}</span>
  }
</p>

           </div>
         </Col>
 
         <Col lg={2} sm={12} className='text-end mt-2'>
           <h3 className='text-danger fw-bolder'><i style={{fontSize:'25px'}} class="fa-solid fa-indian-rupee-sign me-2"></i>{item.bus.price}</h3>
           <p>Journey Date: {item.journey_date}</p>
           <p className='mt-2' style={{ fontSize: "10px" }}>
  Date: {item.reservation_time.split('T')[0]} 
  <span className='fw-bolder  '>{item.reservation_time.split('T')[1].split('.')[0]}</span>
</p>
           <div className='text-end mt-3 '>
                         <Button onClick={handleShow} >add Review</Button>
                         <Modal
                           show={show}
                           onHide={handleClose}
                           backdrop="static"
                           keyboard={false}
                         >
                           <Modal.Header closeButton>
                             <Modal.Title>Add  Review</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                             Review

                             <Box
                               component="form"
                               sx={{
                                 '& > :not(style)': { m: 1, width: '25ch' },
                               }}
                               noValidate
                               autoComplete="off"
                             >

                               <TextField id="standard-basic" value={feedback.comment} onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })} label="Leave us a Review" variant="standard" />
                             </Box>
                             <Box
                               sx={{
                                 '& > legend': { mt: 2 },
                               }}
                             >
                               <Typography component="legend">Rate Us</Typography>
                               <Rating
                                 name="simple-controlled"
                                 value={value}
                                 onChange={(event, newValue) => {
                                   setValue(newValue);
                                 }}
                               />
                             </Box>
                           </Modal.Body>
                           <Modal.Footer>
                             <Button variant="secondary" onClick={handleClose}>
                               Cancel
                             </Button>
                             <Button variant="primary" type='submit' onClick={()=>handleFeedbackadd(item.bus.id)}>Add Review</Button>
                           </Modal.Footer>
                         </Modal>
                       </div>
         </Col>
    </Col>))
       
       
      
       : <p>nothing to show</p> }
        </Row>
        
        {/* <Row>
          <Col>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </Col>
        </Row> */}
      </div>
     </div>


    </>
  );
}

export default Bookinghistory;
