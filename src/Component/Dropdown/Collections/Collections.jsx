import React from 'react'
import './Collections.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Collections = ({setIsOpenCollections}) => {
    const handleCloseX=()=>{
        setIsOpenCollections(false)
      }
  return (
    <div className="main-collection">
       <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
      <div className="collection-section">
        <div className="collection">
            <h4>Featured Shops</h4>
            <ul>
                <li><a href="#">Adaptive</a></li>
                <li><a href="#">Conscious Clothing & <br />Shoes</a></li>
                <li><a href="#">The Outdoor Shop</a></li>
                <li><a href="#">The Running Shop</a></li>
                <li><a href="#">The Wedding Shop</a></li>
            </ul>
        </div>
        <div className="collection">
            <h4>The Style Room</h4>
            <ul>
                <li><a href="#">Birkenstock</a></li>
                <li><a href="#">On</a></li>
                <li><a href="#">Sam Edelman</a></li>
                <li><a href="#">ASICS</a></li>
                <li><a href="#">Favorite Pairings</a></li>
                <li><a href="#">Shoes to Fall For</a></li>
            </ul>
        </div>
        <div className="collection">
            <h4>Trending Brands</h4>
            <ul>
                <li><a href="#">Kamik Footwear</a></li>
                <li><a href="#">VIONIC</a></li>
                <li><a href="#">Steve Madden</a></li>
                <li><a href="#">SOREL</a></li>
                <li><a href="#">Chaco</a></li>
                <li><a href="#">Madewell</a></li>
                <li><a href="#">Crocs</a></li>
                <li><a href="#">The North Face</a></li>
                <li><a href="#">Birkenstock</a></li>
                <li><a href="#">UGG®</a></li>
                <li><a href="#">Michael Kors</a></li>
                <li><a href="#">Allbirds</a></li>
            </ul>
        </div>
        <div className="collection">
            <h4>Get Inspired</h4>
            <ul>
                <li><a href="#">Red Hot for Fall</a></li>
                <li><a href="#">Real People, <br />Real Stories</a></li>
                <li><a href="#">Unique Finds</a></li>
                <li><a href="#">Fall Fashion Favorites</a></li>
                <li><a href="#">Demure Shop</a></li>
                <li><a href="#">How-to Articles</a></li>
                <li><a href="#">Zappos at Work</a></li>
                <li><a href="#">Learn More</a></li>
                <li><a href="#">Amazon Employees</a></li>
                <li><a href="#">ZAW Frequently Asked Questions</a></li>
                <li><a href="#">Work & Duty Shop</a></li>
                <li><a href="#">Gift Cards</a></li>
            </ul>
        </div>
        <div className="collection">
      
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/GN_WWW_350x350.jpg" alt="VIP's" />
                <button>Shop The Guide</button></div>
                <div><img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/February/ZGC-globalnav-010322.jpg" alt="discound" />
                <button>Shop Gift Cards</button></div>
        </div>
      </div>
      </div>
   
  )
}

export default Collections
