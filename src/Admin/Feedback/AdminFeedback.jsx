import React, { useEffect, useState } from 'react';
import bgImage from './assets/bg4feedback.png';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AdminHeader from '../Header/AdminHeader';
import { admingetfeedback } from '../../Services/allAPIs';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function AdminFeedback() {
  const [fdback, setFdback] = useState([]);

  const handlefdback = async () => {
    const token = sessionStorage.getItem('token');
    const reqHeader = {
      "Authorization": `Token ${token}`
    };
    try {
      const result = await admingetfeedback(reqHeader);
      console.log(result);
      if (result.status === 200) {
        setFdback(result.data);
      } else {
        console.log(result.response.data);
      }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  useEffect(() => {
    handlefdback();
  }, []);

  return (
    <>
      <AdminHeader />
      <div style={{
        backgroundColor: '#fff4df',
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        marginTop: '60px'
      }}>
        <div className='d-flex justify-content-center'>
          <img style={{ width: '33%', marginTop: '-30px' }} src={bgImage} alt="" />
        </div>
        <div className='row' style={{ marginTop: '-100px' }}>
          {fdback?.length > 0 ?
            fdback.map((item) => (
              <div className='col-lg-3 mt-4 mb-5'>
                <div className='ms-5 p-2 pt-0' style={{ backgroundColor: 'whitesmoke', borderRadius: '20px', width: 'auto', height: 'auto', borderStyle: 'solid', borderColor: '' }}>
                  <Box className="ms-5" style={{ marginTop: '-30px' }}>
                    <Fab className='bg-primary' disabled aria-label="like">
                      <FormatQuoteIcon className='fs-1' style={{ color: 'white' }} />
                    </Fab>
                  </Box>
                  <div className='d-flex justify-content-center'>
                    <h3 className='text-center fs'>{item.bus_name}</h3>
                  </div>
                  <p>
                    <span className='fs-7 fw-bold' style={{ color: "#4da6ff" }}> @{item.user_name}</span>
                    <span className='me-2'>:</span>
                    <span className='fs-10'>{item.comment}</span>
                  </p>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Typography component="legend"></Typography>
                    <Rating name={`rating-${item.id}`} value={item.rating} readOnly />
                  </Box>
                </div>
              </div>
            )) : <p>No feedbacks</p>
          }
        </div>
      </div>
    </>
  );
}

export default AdminFeedback;
