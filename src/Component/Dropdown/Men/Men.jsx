import React from 'react'
import './Men.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Men = ({setIsOpenMen}) => {
    const handleCloseX=()=>{
        setIsOpenMen(false)
      }
  return (
    <div className="main-men">
       <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
      <div className="men-section">
        <div className="men">
            <h4>Shoes</h4>
            <ul>
                <li><a href="#">All Men's Shoes</a></li>
                <li><a href="#">Sneakers & Athletic</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Loafers</a></li>
                <li><a href="#">Oxfords</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Slippers</a></li>
                <li><a href="#">Hiking</a></li>
                <li><a href="#">Work & Safety <br />Sneakers</a></li>
                <li><a href="#">Work & Duty Boots</a></li>
                <li><a href="#">Adaptive</a></li>
                <li><a href="#">Wide</a></li>
            </ul>
        </div>
        <div className="men">
            <h4>Clothing</h4>
            <ul>
                <li><a href="#">All Men's Clothing</a></li>
                <li><a href="#">Shirts & Tops</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Coats & Outerwear</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Hoodies & Sweatshirts</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Big & Tall</a></li>
                <li><a href="#">Activewear</a></li>
                <li><a href="#">Work & Duty Apparel</a></li>
                <li><a href="#">Swimwear</a></li>
             
            </ul>
        </div>
        <div className="men">
            <h4>Accessories & More</h4>
            <ul>
                <li><a href="#">All Men's Accessories</a></li>
                <li><a href="#">Hats</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Belts</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Sunglasses & Eyewear</a></li>
                <li><a href="#">Wallets</a></li>
                <li><a href="#">Gloves</a></li>
               
            </ul>
        </div>
        <div className="men">
            <h4>Activities</h4>
            <ul>
                <li><a href="#">Running</a></li>
                <li><a href="#">Training & Gym</a></li>
                <li><a href="#">Athleisure</a></li>
                <li><a href="#">Tennis & Pickleball</a></li>
                <li><a href="#">Yoga</a></li>
                <li><a href="#">Hiking</a></li>
                <li><a href="#">Golf</a></li>
              
            </ul>
        </div>
        <div className="men">
            <h4>Trending Brands</h4>
            <ul>
                <li><a href="#">Naot</a></li>
                <li><a href="#">ASICS</a></li>
                <li><a href="#">HOKA</a></li>
                <li><a href="#">Levi's Mens</a></li>
                <li><a href="#">Brooks</a></li>
                <li><a href="#">New Balance</a></li>
                <li><a href="#">Kamik</a></li>
                <li><a href="#">On</a></li>
                <li><a href="#">Shop By</a></li>
                <li><a href="#">All Mens</a></li>
                <li><a href="#">Bestsellers</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">5-Star-Rated Styles</a></li>
                <li><a href="#">Sale</a></li>
                <li><a href="#">Gift Cards</a></li>
            </ul>
        </div>
        <div className="men">
    
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/LOBAL-NAV-THOROGOOD-MENS-350x350.jpeg" alt="VIP's" />
                <button>Shop Men's <br />Thorogood</button></div>
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/GLOBAL-NAV-MMK-MENS-350x350.jpg" alt="discound" />
                <button>Shop Men's <br />MICHAEL <br />Michael Kors</button></div>
        </div>
      </div>
    </div>
  )
}

export default Men
