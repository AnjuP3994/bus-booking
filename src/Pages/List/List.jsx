import React, { useEffect, useState } from 'react'
import './list.css'
import Header from '../../Components/Header/Header'
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import SearchItem from '../../Components/SearchItem/SearchItem'
import Form from 'react-bootstrap/Form';
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import chair from '../../assets/Chair-icon.png'
import { searchBus, usergetbus } from '../../Services/allAPIs';
import Swal from 'sweetalert2';


function List() {

  const [date, setDate] = useState("");
  const [dateinfo, setDateinfo] = useState({});
  const [allbusdetials,setAllbusdetials]=useState([])

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
  const[searchvalue,setSearchvalue]=useState({
    from_location:"",
    to_location:"",
    category:""
  })
  const[searchResults,setSearchResults]=useState([])
  console.log(searchvalue)

  const handleAcClick = () => {
    setIsAcSelected(true);
    setIsNonAcSelected(false);
    setIsSleeperSelected(false)
    setIsSeaterSelected(false)
    
    // setSearchvalue({ ...searchvalue, from_location:'sfsf' })

  };

  const handleNonAcClick = () => {
    setIsAcSelected(false);
    setIsNonAcSelected(true);
    setIsSleeperSelected(false)
    setIsSeaterSelected(false)

  };

  const handleSleeperClick = () => {
    setIsSleeperSelected(true);
    setIsSeaterSelected(false);
    setIsAcSelected(false);
    setIsNonAcSelected(false);
  };

  const handleSeaterClick = () => {
    setIsSleeperSelected(false);
    setIsSeaterSelected(true);
    setIsAcSelected(false);
    setIsNonAcSelected(false);
  };


  const getallbus=async ()=>{
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Authorization": `Token ${token}`
    }
    const result = await usergetbus(reqHeader)
    console.log(result.data)
    setAllbusdetials(result.data)
  }
  useEffect(() => {
    getallbus()
  }, [])

  const handleSearch=async()=>{
    const{from_location,to_location,category}=searchvalue
    if(!from_location || !to_location || !category){
      Swal.fire({
        title: `Incomplete Fields`,
        text: `please fill the fields completely`,
        icon: "warning"
      });
    }else{
      const result=await searchBus(searchvalue)
      // console.log(result)
      if(result.status===200){
        setSearchResults(result.data)
        console.log(searchResults)
        setSearchvalue({
          from_location:"",
          to_location:"",
          category:""
        })
        setIsSleeperSelected(false);
    setIsSeaterSelected(false);
    setIsAcSelected(false);
    setIsNonAcSelected(false);

      }else if(result.status===203){
        Swal.fire({
          title: `No results`,
          
          icon: "error"
        });
        

      }
      else{
        Swal.fire({
          title: `something went wrong`,
          
          icon: "error"
        });

      }
      

  

    }
  }

  return (
    <>
    <Header/>

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
              <Form.Control type="text" placeholder="Source" value={searchvalue.from_location} onChange={(e)=>setSearchvalue({ ...searchvalue, from_location: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <label>Destination</label>
              <Form.Control type="text" placeholder="Destination" value={searchvalue.to_location}  onChange={(e)=>setSearchvalue({ ...searchvalue, to_location: e.target.value })}/>
            </Form.Group>
          </Form>
          <Form>
              {/* <label>Date</label>
              <Form.Control type="date" value={date} min={dateinfo.mindate} onChange={(e) => setDate(e.target.value)} /> */}
          </Form>

          {/* AC */}
          <div className='mt-3'>
            <div>
              <label>AC</label>
            </div>
            <MDBBtnGroup className='gap-3'>
              
              <MDBRadio
                btn
                btnColor={isAcSelected ? 'primary' : 'secondary'}
                id='btn-radio-ac'
                value={'AC Seater'}
                wrapperTag='span'
                label={<><i className="fas fa-snowflake me-2"></i>AC Seater</>}
                onClick={handleAcClick}
                onChange={(e)=>setSearchvalue({ ...searchvalue, category: e.target.value })}
                
              />
              <MDBRadio
                btn
                btnColor={isNonAcSelected ? 'primary' : 'secondary'}
                id='btn-radio-non-ac'
                wrapperTag='span'
                value={'AC Sleeper'}
                label={<><i className="fas fa-sun me-2"></i> AC Sleeper</>}
                onClick={handleNonAcClick}
                onChange={(e)=>setSearchvalue({ ...searchvalue, category: e.target.value })}
              />
              
            </MDBBtnGroup>
          </div>

          {/* Seat Type */}
          <div className='mt-3'>
            <div>
              <label>Non-Ac</label>
            </div>
            <MDBBtnGroup className='gap-3'>
              <MDBRadio
                btn
                btnColor={isSleeperSelected ? 'primary' : 'secondary'}
                id='btn-radio-sleeper'
                wrapperTag='span'
                value={'Non AC Sleeper'}
                label={<><i class="fa-solid fa-bed me-2"></i>Non AC Sleeper</>}
                onClick={handleSleeperClick}
                onChange={(e)=>setSearchvalue({ ...searchvalue, category: e.target.value })}
              />
              <MDBRadio
                btn
                btnColor={isSeaterSelected ? 'primary' : 'secondary'}
                id='btn-radio-seater'
                wrapperTag='span'
                value={'Non AC Seater'}
                label={<><i class="fa-solid fa-couch me-2"></i>Non Ac Seater</>}
                onClick={handleSeaterClick}
                onChange={(e)=>setSearchvalue({ ...searchvalue, category: e.target.value })}
              />
            </MDBBtnGroup>
          </div>
      
          <div className="text-center mt-4 mb-3">
            <button className='lsOptionBtn' onClick={handleSearch}>Search</button>
          </div>
        </div>
      </Col>

      <Col xs={8} className="listResult">
        <SearchItem bus={allbusdetials} search={searchResults}  />
       
      </Col>

      </Row>
    </Container>
    </>
  )
}

export default List