import React from 'react'
import bgImage from './assets/bg4feedback.png'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Feedback() {
  return (
    <>
      <div style={{
        backgroundColor: '#fff4df',
        width: '100%',
        minHeight:'100vh',
        height: '100%'
        }}>

        <div className='d-flex justify-content-center '>
          <img style={{ width: '33%', marginTop: '-20px' }} src={bgImage} alt="" /> </div>
        <div className='row' style={{ marginTop: '-100px' }}>

          <div className='col-lg-3 mt-4 mb-5' >
            <div className='ms-5 p-2 pt-0' style={{ backgroundColor: 'whitesmoke', borderRadius: '20px', width: '360px',height:'110px',borderStyle:'solid',borderColor:''}}>
               <Box className="ms-5" style={{marginTop:'-30px'}}>
              <Fab className='bg-primary'  disabled aria-label="like">
                <FormatQuoteIcon className='fs-1' style={{color:'white'}}/>
              </Fab>
            </Box>
              <h3 className='text-center fs'>Bus Name</h3>
              <p><span className='fs-7 fw-bold' style={{color:"#4da6ff"}}> @username</span> 
               <span className='me-2'>:</span> 
               <span className='fs-10'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic omnis in necessit</span></p>
            </div>
          </div> 

        </div>
      </div>
    </>
  )
}

export default Feedback