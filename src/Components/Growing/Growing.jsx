import React from 'react'
import './growing.css'

function Growing() {
  return (
    <>
      <div className='globalPresenceContainer'>
        <div className='globalPresenceHeading'>
          THE NUMBERS ARE GROWING
        </div>
        <div className='counts'>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className='countryName'>customers</div>
            <div className='numbers'>23 M</div>
            <div className='para'>
              redBus is trusted by over 23 million happy customers globally
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className='countryName'>OPERATORS</div>
            <div className='numbers'>2600</div>
            <div className='para'>
              network of over 2600 bus operators worldwide
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "40px",
            }}
          >
            <div className='countryName'>BUS TICKETS</div>
            <div className='numbers'>180+ M</div>
            <div className='para'>
              Over 180 million trips booked using redBus
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Growing