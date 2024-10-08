import React from 'react'
import './Offer.css'

const Offer = () => {
  return (
    <>    <div>
      <h5>Ways to Shop & Save!</h5>
      <div className="offerDiv">
        <div className="offer-image">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-2-VIP-896x300._FMwebp_.png" alt="offer-img" />
        </div>
        <div className="offer-image">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-1-PRIME-896x300._FMwebp_.png" alt="prime" />
        </div>
        <div className="offer-image">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-4-APP-COUPON-896x300._FMwebp_.png" alt="vip" />
        </div>
      </div>
    </div>
    <div className="main2">
        <div className="container3">
            <p>Join Our List, Get 10% Off</p>
            <p>Sign up for Zappos emails—new subscribers get 10% off a future order!* Plus, get early <br />access to sales, coupons, and more. (One code per email address.)</p>
            <div>
                <input type="email" placeholder='Email Address' />
                <button>Join the Party</button>
            </div>
        </div>
    </div>
    </>

  )
}

export default Offer
