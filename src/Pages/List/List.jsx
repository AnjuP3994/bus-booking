import React, { useEffect, useState } from 'react'
import './list.css'
import Header from '../../Components/Header/Header'
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import SearchItem from '../../Components/SearchItem/SearchItem'
import Form from 'react-bootstrap/Form';
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import chair from '../../assets/Chair-icon.png'


function List() {

  const [date, setDate] = useState("");
  const [dateinfo, setDateinfo] = useState({});

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
              <label>AC</label>
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
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
      </Col>

      </Row>
    </Container>
    </>
  )
}

export default List