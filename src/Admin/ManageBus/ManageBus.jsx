import React, { useEffect, useState } from 'react'
import './ManageBus.css'
import Header from '../../Components/Header/Header'
import { useLocation } from 'react-router-dom';
import { Col, Container, Row,Button } from 'react-bootstrap';
import SearchItem from '../../Components/SearchItem/SearchItem'
import Form from 'react-bootstrap/Form';
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import chair from '../../assets/Chair-icon.png'
import { admindeletebus, getbus } from '../../Services/allAPIs';
import Swal from 'sweetalert2';
import AdminHeader from '../Header/AdminHeader';


function ManageBus() {

    const [date, setDate] = useState("");
    const [dateinfo, setDateinfo] = useState({});
    const[buses,setBuses]=useState([])
  
    useEffect(() => {
      let mindate = new Date().toISOString().split("T")[0];
      let maxdate = new Date().toISOString().split("T")[0];
      // console.log(mindate, maxdate);
      setDate(mindate);
      setDateinfo({
        ...dateinfo,
        mindate: mindate,
        maxdate: maxdate,
      });
    }, []);
  
    const [isAcSelected, setIsAcSelected] = useState(false);
    const [isNonAcSelected, setIsNonAcSelected] = useState(false);
    const [isSleeperSelected, setIsSleeperSelected] = useState(false);
    const [isSeaterSelected, setIsSeaterSelected] = useState(false);
  
    const handleAcClick = () => {
      setIsAcSelected(true);
      setIsNonAcSelected(false);
    };
  
    const handleNonAcClick = () => {
      setIsAcSelected(false);
      setIsNonAcSelected(true);
    };
  
    const handleSleeperClick = () => {
      setIsSleeperSelected(true);
      setIsSeaterSelected(false);
    };
  
    const handleSeaterClick = () => {
      setIsSleeperSelected(false);
      setIsSeaterSelected(true);
    };

    const handlegetbus=async ()=>{
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Authorization": `Token ${token}`
      }
      const result = await getbus(reqHeader)
      console.log(result)
      setBuses(result.data)
    }
    useEffect(()=>{
      handlegetbus()
    },[])

    const handleDeletebus=async(id)=>{
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Authorization": `Token ${token}`
      }
      const result = await admindeletebus(id,reqHeader)
      console.log(result)
      if(result.status===204){
          Swal.fire({
       
              title: ` successfull`,
              text: `Bus has been deleted successfully`,
              icon: "success"
            });
            handlegetbus()
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
    <Container className="listContainer">
      <Row className="listWrapper">

      <Col className="listSearch p-4">
        <div>

          <div className='filter d-flex justify-content-between'>
            <h3 className="lsTitle">Filter</h3>
            <h6 className='clearall mt-2'>Clear all</h6>
          </div>

          {/* Source and Destination */}
          <Form className='d-flex justify-content-between gap-3'>
            <Form.Group className="mb-3">
              <label>Source</label>
              <Form.Control type="text" placeholder="Source" />
            </Form.Group>
            <Form.Group className="mb-3">
              <label>Destination</label>
              <Form.Control type="text" placeholder="Destination" />
            </Form.Group>
          </Form>
          <Form>
              <label>Date</label>
              <Form.Control type="date" value={date} min={dateinfo.mindate} onChange={(e) => setDate(e.target.value)} />
          </Form>

          {/* AC */}
          <div className='mt-3'>
            <div>
              <label></label>
            </div>
            <MDBBtnGroup className='gap-3'>
              <MDBRadio
                btn
                btnColor={isAcSelected ? 'primary' : 'secondary'}
                id='btn-radio-ac'
                wrapperTag='span'
                label={<><i className="fas fa-snowflake me-2"></i> AC</>}
                onClick={handleAcClick}
              />
              <MDBRadio
                btn
                btnColor={isNonAcSelected ? 'primary' : 'secondary'}
                id='btn-radio-non-ac'
                wrapperTag='span'
                label={<><i className="fas fa-sun me-2"></i> Non-AC</>}
                onClick={handleNonAcClick}
              />
            </MDBBtnGroup>
          </div>

          {/* Seat Type */}
          <div className='mt-3'>
            <div>
              <label>Seat Type</label>
            </div>
            <MDBBtnGroup className='gap-3'>
              <MDBRadio
                btn
                btnColor={isSleeperSelected ? 'primary' : 'secondary'}
                id='btn-radio-sleeper'
                wrapperTag='span'
                label={<><i class="fa-solid fa-bed me-2"></i>Sleeper</>}
                onClick={handleSleeperClick}
              />
              <MDBRadio
                btn
                btnColor={isSeaterSelected ? 'primary' : 'secondary'}
                id='btn-radio-seater'
                wrapperTag='span'
                label={<><i class="fa-solid fa-couch me-2"></i>Seater</>}
                onClick={handleSeaterClick}
              />
            </MDBBtnGroup>
          </div>
      
          <div className="text-center mt-4 mb-3">
            <button className='lsOptionBtn'>Search</button>
          </div>
        </div>
      </Col>

      <Col xs={8} className="listResult">
       
       {buses?.length>0?
       buses.map((item)=>( <div className="listcard shadow p-3 w-100 mb-4">
       <Row>
        <div className='d-flex'>
           <Col xs={4}>
             <h4 className='fw-bolder'>{item.name}</h4>
             <p>{item.category}</p>
             {/* <p className='text'>Contact no: 9874563210</p> */}
             <p className='rating ps-1'><i style={{fontSize:'12px'}} class="fa-solid fa-star me-1"></i>4.6</p>
           </Col>
   
           <Col xs={5} className='d-flex justify-content-center mt-3'>
              <Row className='time'>
             <Col lg={5} className='text-center'>
               <p className='textclr fw-bolder fs-9 ' style={{lineHeight:'1rem'}}>{item.boarding_point}</p>
               <p className='textclr fw-bolder'>{item.boarding_time}</p>
             </Col>
             <Col lg={2} className='mt-3'>
               <p className='fw-bolder fs-5'>to</p>
             </Col>
             <Col lg={5} className='text-center'>
               <p className='textclr fw-bolder fs-9' style={{lineHeight:'1rem'}}>{item.dropping_point}</p>
               <p className='textclr fw-bolder'>{item.dropping_time}</p>
             </Col>
             
           </Row>
           </Col>
   
           <Col xs={3} className='text-end mt-2'>
             <h3 className='text-danger fw-bolder'><i style={{fontSize:'25px'}} class="fa-solid fa-indian-rupee-sign me-2"></i>{item.price}</h3>
             <div className='text-end mt-5'>
               <Button className='btn btn-danger' onClick={()=>handleDeletebus(item.id)}>Delete</Button>
             </div>
           </Col>
        </div>
       </Row>
       
       <Row>
         <Col>
           {/* <Collapse in={open}>
             <div id="example-collapse-text">
               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
               terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
               labore wes anderson cred nesciunt sapiente ea proident.
             </div>
           </Collapse> */}
         </Col>
       </Row>
     </div>))
        : <p>nothing to  show</p> }
      </Col>
      </Row>
    </Container>
    </>
  )
}

export default ManageBus