import React from 'react'
import './Bodycomponent.css'
import Navbar from '../Navbar/Navbar'
import TrendingComponent from '../Trending Page/TrendingComponent'
import SeasonalAutumn from '../Seasonal Component/SeasonalAutumn'
import PrimeMember from '../Prime-Member component/PrimeMember'
import GuideComponent from '../Guide-Component/GuideComponent'
import NewArrivals from '../New-Arrivals/NewArrivals'
import StyleRoom from '../Style Room/StyleRoom'
import Offer from '../Offers Component/Offer'

const Bodycomponent = () => {
  return (
    <>
    <div className="container">
        
    <Navbar/>
    <hr style={{ opacity: "0.3", width : '100%' }}  />
    <div id='bg-image'>
    </div>
    <div className='bottom'>
      <p>Head-to-Toe Fall</p>
      <p>Shop Women's Fall Favourites</p>
    </div>
    </div>
    <div className="trending-page">
    <h2>Trending Now</h2>
    <TrendingComponent/>
    </div>
    <div className="seasonalDiv">
      <SeasonalAutumn/>
    </div>
   <div className="prime-member">
   <PrimeMember/>
   </div>
   <div className="guide-component">
    <GuideComponent/>
   </div>
   <div className="arrivalDiv">
    <NewArrivals/>
   </div>
 <div >
 <StyleRoom/>
 </div>
 <div>
  <Offer/>
 </div>
    </>
  )
}

export default Bodycomponent
