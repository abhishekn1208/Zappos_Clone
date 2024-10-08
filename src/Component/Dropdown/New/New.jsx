import React from 'react'
import './New.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const New = ({ setIsOpenNew}) => {
    const handleCloseX=()=>{
        setIsOpenNew(false)
    }
  return (
        <div className="main">
           <a href="#"><FontAwesomeIcon id="cross" icon={faXmark} onClick={handleCloseX} /></a>
        <div className="new">
            <div className="new-1">
                <h4>New by Category</h4>
                <ul>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Shop All New</a></li>
                </ul>
            </div>
            <div className="new-1">
                <h4>The Style Room</h4>
                <ul>
                    <li><a href="#">Birkenstock</a></li>
                    <li><a href="#">On</a></li>
                    <li><a href="#">Sam Edelman</a></li>
                    <li><a href="#">ASICS</a></li>
                    <li><a href="#">Favourite Pairings</a></li>
                    <li><a href="#">Shoes to Fall for</a></li>
                </ul>
            </div>
            <div className="new-1">
                <h4>New Brands</h4>
                <ul>
                    <li><a href="#">Allbirds</a></li>
                    <li><a href="#">Free Fly</a></li>
                    <li><a href="#">BILLY x Kodi Lee Sneakers</a></li>
                    <li><a href="#">Jessica Rich</a></li>
                    <li><a href="#">Dune London</a></li>
                    <li><a href="#">Saysh</a></li>
                </ul>
            </div>
            <div className="new-1">
                <h4>New & Now</h4>
                <ul>
                    <li><a href="#">25th Birthday Exclusives</a></li>
                    <li><a href="#">Best Merrell Hiking <br />Boots for Fall</a></li>
                    <li><a href="#">Best of ASICS</a></li>
                    <li><a href="#">Demure Shop</a></li>
                    <li><a href="#">Shop Birkenstock For <br />Fall</a></li>
                    <li><a href="#">Red Hot for Fall</a></li>
                    <li><a href="#">Fall Footwear Picks</a></li>
                </ul>
            </div>
           
            <div className='new-1'>
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/GLOBAL-NAV-JOIN-VIP-350x350.png" alt="VIP's" />
                <button>Join Zappos VIP</button></div>
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/APP-DOWNLOAD-CODE-INCENTIVE-GLOBAL-NAV-350x350.png" alt="discound" />
                <button>Download The Zappos App</button></div>
            </div>
        </div>
        </div>
  )
}

export default New
