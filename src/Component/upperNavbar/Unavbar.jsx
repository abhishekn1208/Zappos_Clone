import { faBagShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import  './unavbar.css'

const Unavbar = () => {
  return (
    <div id='u-navbar'>
     
        <img src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="Logo" />
      
      <div className='search-box'>
        <FontAwesomeIcon icon={faSearch} id='magnifire'/>
        <input type="text" placeholder="Search for shoes, clother, etc." />
        <button>Search</button>
      </div>
      <div>
        <div id='font-box'>
      <FontAwesomeIcon icon={faUser} id='user'/> 
      <FontAwesomeIcon icon={faBagShopping} id='bag1'/>
      </div>
      </div>
    </div>
  )
}

export default Unavbar
