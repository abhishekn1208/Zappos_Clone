import React from 'react'
import './Women.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Women = ({setIsOpenWomen}) => {
  const handleCloseX=()=>{
    setIsOpenWomen(false)
  }
  return (
    <div className="main-women">
       <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
    <div className='women-section' >
      <div className="women">
        <h4>Shoes</h4>
        <ul>
            <li><a href="#">All Women's Shoes</a></li>
            <li><a href="#">Sneakers & Athletic</a></li>
            <li><a href="#">Boots & Booties</a></li>
            <li><a href="#">Clogs</a></li>
            <li><a href="#">Flats</a></li>
            <li><a href="#">Slippers</a></li>
            <li><a href="#">Mules</a></li>
            <li><a href="#">Loafers</a></li>
            <li><a href="#">Sandals</a></li>
            <li><a href="#">Cowboy Boots</a></li>
            <li><a href="#">Composite Toe</a></li>
            <li><a href="#">Safety Shoes</a></li>
            <li><a href="#">Work Shoes</a></li>
            <li><a href="#">Adaptive</a></li>
            <li><a href="#">Comfort</a></li>
            <li><a href="#">Heels</a></li>
        </ul>
      </div>
      <div className="women">
        <h4>Clothing</h4>
        <ul>
            <li><a href="#">All Women's Clothing</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Shirts & Tops</a></li>
            <li><a href="#">Jeans & Denim</a></li>
            <li><a href="#">Jumpsuits & Rompers</a></li>
            <li><a href="#">Shorts</a></li>
            <li><a href="#">Skirts</a></li>
            <li><a href="#">Swimwear & Cover <br /> Ups</a></li>
            <li><a href="#">Pants</a></li>
            <li><a href="#">Activewear</a></li>
            <li><a href="#">Coats & Outerwear</a></li>
            <li><a href="#">Plus Size</a></li>
            <li><a href="#">Work & Duty Apparel</a></li>
            
        </ul>
      </div>
      <div className="women">
        <h4>Accessories & More</h4>
        <ul>
            <li><a href="#">All Women's <br />Accessories</a></li>
            <li><a href="#">Handbags</a></li>
            <li><a href="#">Backpacks</a></li>
            <li><a href="#">Wallets</a></li>
            <li><a href="#">Sunglasses</a></li>
            <li><a href="#">Hats</a></li>
            <li><a href="#">Scarves</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Gloves</a></li>
            <li><a href="#">Belts</a></li>
            
        </ul>
      </div>
      <div className="women">
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
      <div className="women">
        <h4>Trending Brands</h4>
        <ul>
            <li><a href="#">Sam Edelman</a></li>
            <li><a href="#">Birkenstock</a></li>
            <li><a href="#">Dolce Vita</a></li>
            <li><a href="#">Madewell</a></li>
            <li><a href="#">Hoka</a></li>
            <li><a href="#">kate spade new york</a></li>
            <li><a href="#">Shop By</a></li>
            <li><a href="#">All Womens</a></li>
            <li><a href="#">Bestsellers</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Red Hot for Fall</a></li>
            <li><a href="#">The Style Room: <br />Women's Fashion</a></li>
            <li><a href="#">Demure Shop</a></li>
            <li><a href="#">Fall Favorites</a></li>
            <li><a href="#">5-Star-Rated Styles</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Gift Cards</a></li>
        </ul>
      </div>
      <div className="women">
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/GLOBAL-NAV-STEVE-MADDEN-WOMENS-350x350.jpg" alt="VIP's" />
                <button>Shop Women's <br />Steve Madden</button></div>
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/GLOBAL-NAV-MMK-WOMENS-350x350.jpg" alt="discound" />
                <button>Shop Women's <br />MICHAEL <br />Michael Kors</button></div>
          
      </div>
    </div>
    </div>
  )
}

export default Women
