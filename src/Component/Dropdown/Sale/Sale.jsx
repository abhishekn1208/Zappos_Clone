import React from 'react'
import './Sale.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Sale = ({setIsOpenSale}) => {
    const handleCloseX=()=>{
        setIsOpenSale(false)
      }
  return (
    <div className="main-sale">
       <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
    <div className='sale-section'>
        <div className="sale">
            <h4>Women's Sale</h4>
            <ul>
                <li><a href="#">All Women's Sale</a></li>
                <li><a href="#">Sneakers & Athletic</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Blouses</a></li>
                <li><a href="#">Coats & Outerwear</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Heels</a></li>
                <li><a href="#">Shoes $50 & Under</a></li>
                <li><a href="#">Apparel $100 & Under</a></li>
            </ul>
        </div>
        <div className="sale">
            <h4>Men's Sale</h4>
            <ul>
                <li><a href="#">All Men's Sale</a></li>
                <li><a href="#">Sneakers & Athletic</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Hoodies & Sweatshirts</a></li>
                <li><a href="#">Loafers</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Coats & Outerwear</a></li>
                <li><a href="#">Slippers</a></li>
                <li><a href="#">Shoes $50 & Under</a></li>
                <li><a href="#">Apparel $100 & Under</a></li>
                
            </ul>
        </div>
        <div className="sale">
            <h4>Kids' Sale</h4>
            <ul>
                <li><a href="#">All Kids' Sale</a></li>
                <li><a href="#">Sneakers & Athletic</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Clogs</a></li>
                <li><a href="#">Coats & Outerwear</a></li>
                <li><a href="#">Kids' Sets</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Slippers</a></li>
                <li><a href="#">Shoes $50 & Under</a></li>
                <li><a href="#">Apparel $50 & Under</a></li>
                
            </ul>
        </div>
        <div className="sale">
            <h4>Brands on Sale</h4>
            <ul>
                <li><a href="#">HOKA</a></li>
                <li><a href="#">SOREL</a></li>
                <li><a href="#">Native Shoes</a></li>
                <li><a href="#">LEVI’S®</a></li>
                <li><a href="#">Brooks</a></li>
                <li><a href="#">Hey Dude</a></li>
                <li><a href="#">Crocs</a></li>
                <li><a href="#">New Balance</a></li>
                <li><a href="#">ASICS</a></li>
                
            </ul>
        </div>
        <div className="sale">
            <h4>Going, Going, Gone</h4>
            <ul>
                <li><a href="#">All Final Sale</a></li>
                <li><a href="#">Women's Final Sale</a></li>
                <li><a href="#">Men's Final Sale</a></li>
                <li><a href="#">Final Sale $50 & Under</a></li>
                <li><a href="#">Unique Finds</a></li>
                <li><a href="#">Just-In: New <br />Markdowns</a></li>
               
            </ul>
        </div>
        <div className="sale">
        <div>
            <img src="https://m.media-amazon.com/images/I/710W9BdSvNL._AC_SR330,340_SR350,350,1,B_BR-10_.jpg" alt="VIP's" />
                <button>Shop Sneakers<br />& Athletic Shoes <br />On Sale</button></div>
                <div><img src="https://m.media-amazon.com/images/I/61-NxMDkS5L._AC_SR330,340_SR350,350,1,B_BR-10_.jpg" alt="discound" />
                <button>Shop Heels On<br />Sale</button></div>
        </div>
      
    </div>
    </div>
  )
}

export default Sale
