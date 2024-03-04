import React from 'react'
import './feature.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

function Feature() {
  return (
    <>
    <div className='infogrid py-5'>
        <div className='coupon'>
          <span>save upto rs 150</span>
          <span className='offerImage'>
            <img src={img1} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className='coupon'>
          <span>save upto rs 150</span>
          <span className='offerImage'>
            <img src={img2} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className='coupon'>
          <span>save upto rs 150</span>
          <span className='offerImage'>
            <img src={img3} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
      </div>
    </>
  )
}

export default Feature