import React from 'react';
import './styleroom.css'

const StyleRoom = () => {
  return (
    <div className='main-style'>
      <h5>Want inspiration? Visit The Style Room for styling tips and fashion trends.</h5>
      <div className="container1">
        <div className="image-div">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-ASICS-SEPTOCT2024-TSR-NEW._FMwebp_.jpg" alt="style-img" />
            <div>
                <p>Flowy dresses with sporty kicks? It’s a yes! Unexpected pairings are all the rage.</p>
                <p>Shop ASICS</p>
            </div>
        </div>
        <div className="image-div">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-FAVORITEPAIRINGS2-SEPTOCT2024-TSR._FMwebp_.jpg" alt="style-img" />
            <div>
                <p>What happens when go-to pieces find their perfect partners? Style magic.</p>
                <p>Shop Favorite Pairings</p>
            </div>
        </div>
        <div className="image-div">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-SAMEDELMAN-SEPTOCT2024-TSR-NEW._FMwebp_.jpg" alt="style-img" />
            <div>
                <p>Introduce effortless fall appeal into your wardrobe with our top picks.</p>
                <p>Shop Sam Edelman</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StyleRoom
