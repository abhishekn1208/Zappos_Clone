import React from 'react'
import './Kids.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Kids = ({setIsOpenKids}) => {
    const handleCloseX=()=>{
        setIsOpenKids(false)
      }
  return (
    <div className="main-kids">
       <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
      <div className="kids-section">
        <div className="kids">
            <h4>Boys</h4>
            <ul>
                <li><a href="#">All Boys</a></li>
                <li><a href="#">Sneakers</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Coats & Jackets</a></li>
                <li><a href="#">Shirts & Tops   </a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Pajamas</a></li>
                <li><a href="#">Adaptive</a></li>
            </ul>
        </div>
        <div className="kids">
            <h4>Girls</h4>
            <ul>
                <li><a href="#">All Girls</a></li>
                <li><a href="#">Sneakers</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Coats & Jackets</a></li>
                <li><a href="#">Shirts & Tops</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Pajamas</a></li>
                <li><a href="#">Adaptive</a></li>
            </ul>
        </div>
        <div className="kids">
            <h4>Accessories & More</h4>
            <ul>
                <li><a href="#">All Kids' Accessories</a></li>
                <li><a href="#">Backpacks</a></li>
                <li><a href="#">Hats</a></li>
            
            </ul>
        </div>
        <div className="kids">
            <h4>Shop By Size</h4>
            <ul>
                <li><a href="#">Big Kid (7-12 yrs.)</a></li>
                <li><a href="#">Little Kid (4-7 yrs.)</a></li>
                <li><a href="#">Toddler (9 mos.-4 yrs.)</a></li>
                <li><a href="#">Infant (0-9 mos.)</a></li>
                <li><a href="#">Shoe Size Conversion <br />Chart</a></li>
                <li><a href="#">At Home Shoe Sizer</a></li>
                
            </ul>
        </div>
        <div className="kids">
            <h4>New & Trending</h4>
            <ul>
                <li><a href="#">All New Arrivals</a></li>
                <li><a href="#">Kids' Athletic</a></li>
                <li><a href="#">Juniors & Teen</a></li>
                <li><a href="#">Easy On Shoes</a></li>
                <li><a href="#">Sports Cleats</a></li>
                <li><a href="#">Character Favorites</a></li>
                <li><a href="#">Kids' Sale</a></li>
                <li><a href="#">Trending Brands</a></li>
                <li><a href="#">Crocs</a></li>
                <li><a href="#">New Balance</a></li>
                <li><a href="#">SKECHERS</a></li>
                <li><a href="#">adidas</a></li>
            </ul>
        </div>
        <div className="kids">
      
                <div><img src="https://m.media-amazon.com/images/I/71Sy10U0llL._AC_SR330,340_SR350,350,1,B_BR-10_.jpg" alt="VIP's" />
                <button>Shop Polo Ralph <br />Lauren Kids</button></div>
                <div><img src="https://m.media-amazon.com/images/I/71pCkYDYu+L._AC_SR330,340_SR350,350,1,B_BR-10_.jpg" alt="discound" />
                <button>Shop Birkenstock</button></div>
        </div>
      </div>
    </div>
  )
}

export default Kids
