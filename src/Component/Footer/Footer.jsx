import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  return (  
    <div className='f-main'>
        <div className="s-media">

       <a href="http://facebook.com/Zappos"><FontAwesomeIcon icon={faFacebook} /></a> 
        <a href="http://instagram.com/Zappos"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      <div className="content">
        <div className="e-content">
            <p>About Zappos</p>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Zappos ONE</a></li>
                <li><a href="#">Zappos for Good</a></li>
                <li><a href="#">Zappos at Work</a></li>
                <li><a href="#">Get the Zappos Mobile App</a></li>
                <li><a href="#">Amazon Prime Benefits</a></li>
                <li><a href="#">Zappos VIP Benefits</a></li>
                <li><a href="#">Coupons & Sales</a></li>
                <li><a href="#">Accessibility Statement</a></li>
            </ul>
        </div>
        <div className="e-content">
            <p>Customer Service</p>
            <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Info</a></li>
                <li><a href="#">¿Ayuda en español?</a></li>
                <li><a href="#">Shipping And Returns Policy</a></li>
                <li><a href="#">About Proposition 65</a></li>
            </ul>
        </div>
        <div className="e-content">
            <p>Resources</p>
            <ul>
                <li><a href="#">Measurement Guide</a></li>
                <li><a href="#">Size Conversion Chart</a></li>
                <li><a href="#">Measure Your Bra Size</a></li>
                <li><a href="#">Associates Program</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Press Kit & Brand Inquiries</a></li>
                <li><a href="#">Site Map</a></li>
                <li><a href="#">Take Survey</a></li>
                
            </ul>
        </div>
        <div className="e-content">
            <p>Explore Zappos</p>
            <ul>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Clothing</a></li>
                <li><a href="#">The Style Room</a></li>
                <li><a href="#">Eyewear</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Running</a></li>
                <li><a href="#">Jackets</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Zappos Adaptive</a></li>
                <li><a href="#">All Departments</a></li>
            </ul>
        </div>
      </div>
      <div className="hr"></div>
      <div className='f-bottom'>
        <p style={{fontSize:"12px"}}>© 2009–2024 - Zappos.com LLC or its affiliates</p>
        <p>Terms of Use/
Privacy Policy/
Fur Policy/
Interest-Based Ads/
24/7 Customer Service (800) 927-7671</p>
      </div>
    </div>
  )
}

export default Footer
