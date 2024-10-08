import React from 'react'
import './Brands.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Brands = ({setIsOpenBrands}) => {
  const handleCloseX=()=>{
    setIsOpenBrands(false)
  }
  return (
    <div className="main-brand">
       <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
      <div className="brand-section">
        <div className="brand">
            <h4>Brand Index</h4>
            
            <ul>
                <li><a href="#">#</a></li>
                <li><a href="#">A</a></li>
                <li><a href="#">B</a></li>
                <li><a href="#">C</a></li>
                <li><a href="#">D</a></li>
                <li><a href="#">E</a></li>
                <li><a href="#">F</a></li>
                <li><a href="#">G</a></li>
                <li><a href="#">H</a></li>
                <li><a href="#">I</a></li>
                <li><a href="#">J</a></li>
                <li><a href="#">K</a></li>
                <li><a href="#">L</a></li>
                <li><a href="#">M</a></li>
                <li><a href="#">N</a></li>
                <li><a href="#">O</a></li>
                <li><a href="#">P</a></li>
                <li><a href="#">Q</a></li>
                <li><a href="#">R</a></li>
                <li><a href="#">S</a></li>
                <li><a href="#">T</a></li>
                <li><a href="#">U</a></li>
                <li><a href="#">V</a></li>
                <li><a href="#">W</a></li>
                <li><a href="#">X</a></li>
                <li><a href="#">Y</a></li>
                <li><a href="#">Z</a></li>
            </ul>
          
            <hr id='hr-brand' />
            <div className="brand-2">
                <h4>Featured Brands</h4>
                <div className='image-section'>
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/crocs-brand-index-logo.jpg" alt="crocks" />
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/drmartens-brand-index-logo.jpg" alt="Marlene" />
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/ON-BRAND-INDEX-75x55.png" alt="Brand-logo" />
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/Steve_Madden_1.png" alt="Steve-maden" />
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/Vionic-Brand-Index-Logo-75x55.png" alt="Vionic" />
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/Naturalizer-Brand-Index-75x55.png" alt="Naturalizer" />
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/Dansko_1.png" alt="Dansko" />
                <img src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/KOOLABURRA-Brand-Index-Logo-75x55.png" alt="Koolaburra" />
                </div>
            </div>
        </div>
      </div>
      </div>
  
  )
}

export default Brands
