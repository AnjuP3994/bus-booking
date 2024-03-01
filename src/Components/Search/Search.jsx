import React, { useEffect, useState } from 'react'
import './search.css'
import { Container, Row, Col } from 'react-bootstrap'
import safetyplus from '../../assets/safetyplus.svg'

function Search() {

    const [destination, setDestination] = useState("");
    const [date, setdate] = useState("");
    const [dateinfo, setdateinfo] = useState({});

    useEffect(() => {
        let mindate = new Date().toISOString().split("T")[0];
        let maxdate = new Date().toISOString().split("T")[0];
        // console.log(mindate, maxdate);
        setdate(mindate);
        setdateinfo({
          ...dateinfo,
          mindate: mindate,
          maxdate: maxdate,
        });
      }, []);

  return (
    <>
    <div className="body">
    <Container>
        <Row>
            <Col className='d-flex justify-content-center'>
            <h2 className='heading'>India's No. 1 Online Bus Ticket Booking Site</h2>
            <div className="headerSearch">
                <span className="headerSearchItem">
                    <span>From:</span>
                    <input type="text" className="headerSearchInput" onChange={(e)=>setDestination(e.target.value)} placeholder="Source" />
                </span>

                <span className="headerSearchItem">
                    <span>To:</span>
                    <input type="text" className="headerSearchInput" onChange={(e)=>setDestination(e.target.value)} placeholder="Destination" />
                </span>

                <span className="headerSearchItem">
                    <input className='headerSearchInput' type="date" value={date} min={dateinfo.mindate} onChange={(e) => setdate(e.target.value)} />
                </span>
            </div>
            </Col>
        </Row>

        <div className='search'>
            <button id='btnn' className="btn btn-outline-light">Search</button>
        </div>
        
        {/* <Container className='safty px-5'>
        <Row className='row1'>
            <Col className='text-center d-flex justify-content-center align-items-center'>
                <img src="https://64c8934c58159a3cd96ff9cf--rococo-biscuit-257cba.netlify.app/static/media/safetyplus.4fa7f6d7d56075ecbdd06bbb424f0031.svg" alt="" />
            </Col>
            <Col className='text-center'>
                <h3>Introducing Safety+ Program</h3>
                <h5>A unique certification program that ensures safety in all buses</h5>
            </Col>
            <Col className='text-center d-flex justify-content-center align-items-center'>
                <MDBBtn color='danger'>Know more</MDBBtn>
            </Col>
        </Row>
        </Container> */}
        <div className='infodiv'>
          <div>
            <img src={safetyplus} alt="shield" />
          </div>
          <div>
            <h4>Introducing Safety+ Program</h4>
            <p>A unique certification program that ensures safety in all buses</p>
          </div>
          <div>
            <button>know More</button>
          </div>
        </div>
    </Container>
    </div>
    </>
  )
}

export default Search