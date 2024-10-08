import React from 'react'
import './Seasonal.css'

const SeasonalAutumn = () => {
  return (
    <div id='heading'>
    <h2 >That Autumn Feeling</h2>
    <div className='seasonal-component'>
        
      <div className="autumn">
        <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30/TRIPTYCH-1-HUNTER-896x896-NEW._FMwebp_.jpg" alt="image" />
       <div>
       <p>Waterproof picks made for what fall has in store.</p>
       <a href="#">Shop Hunter</a>
       </div>
      
       
      </div>
      <div className="autumn">
        <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/TRIPTYCH-2-NEW-BALANCE-896x896_1._FMwebp_.jpg" alt="image" />
        <p>Sport laid-back, classic kicks from brunch to <br />bonfire.</p>
        <a href="#">Shop Lifestyle Sneakers</a>
      </div>
      <div className="autumn">
        <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30/TRIPTYCH-3-LACE-UP-BOOTS-896x896-NEW._FMwebp_.jpg" alt="image" />
        <p>These lace-up beauts will complete every outfit.</p>
        <a href="#">Shop Lace-Up Boots</a>
      </div>
    </div>
    </div>
  )
}

export default SeasonalAutumn
