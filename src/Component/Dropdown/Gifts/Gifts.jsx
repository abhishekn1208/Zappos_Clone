import React from 'react';
import "./gifts.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Gifts = ({setIsOpenGifts}) => {
  const handleCloseX=()=>{
    setIsOpenGifts(false)
  }
  return (
    <div className="main-gift">
       <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
    <div className='gift-section'>
      <div className="gift">
        <h4>Gifts For Her</h4>
        <ul>
            <li><a href="#">Runner’s Must-Haves</a></li>
            <li><a href="#">Fashionista Finds</a></li>
            <li><a href="#">Stylish Sneakers</a></li>
            <li><a href="#">Handbag Upgrade</a></li>
            <li><a href="#">Jewelry Gifts</a></li>
            <li><a href="#">Cozy Slippers</a></li>
            <li><a href="#">Giftable Accessories</a></li>
            <li><a href="#">Sleepwear</a></li>
        </ul>
      </div>
      <div className="gift">
        <h4>Gifts For Him</h4>
        <ul>
            <li><a href="#">Athlete’s Most-Wanted</a></li>
            <li><a href="#">Cool Sneakers</a></li>
            <li><a href="#">Outdoor & Adventure <br />Styles</a></li>
            <li><a href="#">Men's Fashion Finds</a></li>
            <li><a href="#">Coats & Jackets</a></li>
            <li><a href="#">Cozy Slippers</a></li>
            <li><a href="#">Sleepwear</a></li>
            
        </ul>
      </div>
      <div className="gift">
        <h4>Holiday Gifts By Price</h4>
        <ul>
            <li><a href="#">Gifts $50 & Under</a></li>
            <li><a href="#">Sneakers 50% off or <br />More</a></li>
            <li><a href="#">Coats 50% off or More</a></li>
            <li><a href="#">Slippers 50% off or <br />More</a></li>
            <li><a href="#">Luxe Fashion Gifts</a></li>
           
        </ul>
      </div>
      <div className="gift">
        <h4>Our Favorite Gifting <br />Brands</h4>
        <ul>
            <li><a href="#">UGG</a></li>
            <li><a href="#">New Balance</a></li>
            <li><a href="#">SOREL</a></li>
            <li><a href="#">Marc Jacobs</a></li>
            <li><a href="#">Hoka</a></li>
            
        </ul>
      </div>
      <div className="gift">
        <h4>Get Inspired</h4>
        <ul>
            <li><a href="#">Fall Birkenstock Guide</a></li>
            <li><a href="#">5 Star Shoes</a></li>
            <li><a href="#">Kids' Character Shoes</a></li>
            <li><a href="#">Women's Loungewear</a></li>
            <li><a href="#">PJs & Robes for the <br />Family</a></li>
       
        </ul>
      </div>
      <div className="gift">
      <div><img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/February/ZGC-globalnav-010322.jpg" alt="VIP's" />
                <button>Shop Gift Cards</button></div>
      </div>
    </div>
    </div>
  )
}

export default Gifts
