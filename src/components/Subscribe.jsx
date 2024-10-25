import React from 'react'
import subImg from '../assets/2D.png'

const Subscribe = () => {
  return (
    <div className='sub-container'>
      <div className='subscribe'>
        <div className='img-container'>
          <img src={subImg} alt="subscribe" />
        </div>
        <div>
          <div className='sub-title'>
            <h3> Stay up to date with latest crypto news and events. Subscribe to our newsletter </h3>
          </div>
          <div className='input-sub-btn'>
            <input
              type="text"
              placeholder='Enter your Email Address'
            />
            <button>Subscribe &#11208;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;