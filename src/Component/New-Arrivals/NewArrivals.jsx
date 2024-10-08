import React, { useState } from 'react'
import './Arrivals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons'

const NewArrivals = () => {

  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isCircle1Hovered, setIsCircle1Hovered] = useState(false)
  const [isCircle2Hovered, setIsCircle2Hovered] = useState(false)
  const [isHoverShoes2, setIsHoverShoes2] = useState(false)                                         
  const [textHover ,setTextHover] = useState(false)
  const [text2, setText2] = useState(false)
  const [ text3, setText3] = useState(false)

  const [bag1, setBag1]= useState(true)
  const [bag2, setBag2]= useState(false)
  const [bag3, setBag3]= useState(false)
  const [bag4, setBag4]= useState(false)
  const [bag5, setBag5]= useState(false)
  const [bag6, setBag6]= useState(false)

  // texting
  const [isText1, setIsText1] = useState(false)
  const [isText2, setIsText2] = useState(false)
  const [isText3, setIsText3] = useState(false)
  const [isText4, setIsText4] = useState(false)
  const [isText5, setIsText5] = useState(false)
  const [isText6, setIsText6] = useState(false)
  return (
    
      <div className="arrival-component">
        <div className="arrival">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/NEW-ARRIVALS-FEED-658x916_13._FMwebp_.jpg" alt="New Arrival image" />
        </div>
        <div className='arrival'>
            <div className='set-heart'>
            <div className='heart-icon'>
                <FontAwesomeIcon className='icon' icon={faHeart} />
            </div>
            </div>
          {isCircle1Hovered && (<div  onMouseEnter={()=>setIsHovered1(true)} onMouseLeave={()=>setIsHovered1(false)} >
            
          {!isHovered1 && (<img  src="https://m.media-amazon.com/images/I/615gLv0troL._AC_SR768,1024_.jpg" alt="img1" />) }
          {isHovered1 && (<img src="https://m.media-amazon.com/images/I/619sPsk9y8L._AC_SR768,1024__FMwebp_.jpg" alt="img2" />)} 
          </div>)}
         {!isCircle1Hovered &&   ( <div onMouseEnter={()=>setIsHovered1(true)} onMouseLeave={()=>setIsHovered1(false)}>
            {!isHovered1 && (<img src="https://m.media-amazon.com/images/I/61GIOp1IouL._AC_SR768,1024_.jpg" alt="img1" />)}
           {isHovered1 && ( <img src="https://m.media-amazon.com/images/I/71P-V+jMSVL._AC_SR768,1024_.jpg" alt="img2" />)}
          </div>)}
        
            <div className='circle'>
                <div onMouseEnter={()=>setIsCircle1Hovered(true)} onMouseOverCapture={()=>{setTextHover(true)}} onMouseLeave={()=>setTextHover(false)}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27571/9993463/6525158.webp" alt="sample-guide" /></div>
                
                <div onMouseEnter={()=>setIsCircle1Hovered(false)} onMouseOverCapture={()=>{setTextHover(true)}} onMouseLeave={()=>setTextHover(false)}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27571/9993463/6525159.webp" alt="sample-guide" /></div>
            </div>
        
          {(textHover && isCircle1Hovered) && ( 
           <span>Black Suede</span>
           )}
          {(textHover && !isCircle1Hovered)&& ( <div id="text-area1" style={{marginLeft: "50px"}}>
           <span>Brown Suede</span>
           </div>)}
            
            <div>
            <p><b>Steve Madden</b><br />Lenya</p>
            <p>Women's</p>
            <p>$179.95</p>
            </div>
           
        </div>
        <div className="arrival">
        <div className='set-heart'>
            <div className='heart-icon'>
                <FontAwesomeIcon className='icon' icon={faHeart} />
            </div>
            </div>
            {(isCircle2Hovered ) && (<div onMouseEnter={()=>setIsHovered2(true)} onMouseLeave={()=>setIsHovered2(false)}>
            {!isHovered2 && (<img src="https://m.media-amazon.com/images/I/71fOstbVqQL._AC_SR768,1024_.jpg" alt="img1" />)}
            {isHovered2 && (<img src="https://m.media-amazon.com/images/I/71z4GLIU7PL._AC_SR768,1024__FMwebp_.jpg" alt="img1" />)}
            </div>)}
            {(!isCircle2Hovered && !isHoverShoes2 ) && (<div onMouseEnter={()=>setIsHovered2(true)} onMouseLeave={()=>setIsHovered2(false)}>
           {!isHovered2 && ( <img src="https://m.media-amazon.com/images/I/714xc0kuDOL._AC_SR768,1024_.jpg" alt="img1" />)}
            {isHovered2 && (<img src="https://m.media-amazon.com/images/I/71BYI4thPUL._AC_SR768,1024__FMwebp_.jpg" alt="img1" />)}
            </div>)}
            {(!isCircle2Hovered && isHoverShoes2) && ( <div onMouseEnter={()=>setIsHovered2(true)} onMouseLeave={()=>setIsHovered2(false)}>
            {!isHovered2 && (<img src="https://m.media-amazon.com/images/I/61nwnSRjZZL._AC_SR768,1024__FMwebp_.jpg" alt="img1" />)}
            {isHovered2 && (<img src="https://m.media-amazon.com/images/I/61srNuq5x3L._AC_SR768,1024__FMwebp_.jpg" alt="img1" />)}
            </div>)}
            <div className='circle'>
                <div onMouseEnter={()=>{setIsCircle2Hovered(true);setIsHoverShoes2(false); setText2(true)} } onMouseLeave={()=>{setText2(false)}}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27571/9977593/6478258.webp" alt="" /></div>
                <div onMouseEnter={()=>{setIsCircle2Hovered(false); setIsHoverShoes2(false); setText2(true)}} onMouseLeave={()=>{setText2(false)}}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27571/9977593/6478186.webp" alt="" /></div>
                <div onMouseEnter={()=>{setIsCircle2Hovered(false); setIsHoverShoes2(true);setText3(true) } } onMouseLeave={()=>{setText3(false)}}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27571/9977593/6478260.webp" alt="" /></div>
            </div>

            {(text2 && isCircle2Hovered) && (<span>Almond Taupe</span>)}
            {(text2 && !isCircle2Hovered ) && <div style={{marginLeft:"50px"}}>
                <span>Frontier Brown</span>
            </div>}
           {text3 && (<div style={{marginLeft: "80px"}}>
                <span>Chocolate Brown</span>
            </div>)}

           <div> <p><b>Steve Madden</b><br />Lenya</p>
            <p>Women's</p>
            <p>$179.95</p></div>
        </div>
        <div className="arrival">
        <div className='set-heart'>
            <div className='heart-icon'>
                <FontAwesomeIcon className='icon' icon={faHeart} />
            </div>
            </div>
          {bag1 && ( <div onMouseEnter={()=>setIsHovered3(true)} onMouseLeave={()=>setIsHovered3(false)}>
                {!isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/61Of4qULMOL._AC_SR768,1024__FMwebp_.jpg" alt="bag-white" />)}
                {isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/81jBBtnmvgL._AC_SR768,1024__FMwebp_.jpg" alt="bag-white" />)}
              
            </div>)}
            {bag2 && (<div onMouseEnter={()=>setIsHovered3(true)} onMouseLeave={()=>setIsHovered3(false)}>
                {!isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/71u-1d9vMIL._AC_SR736,920_.jpg" alt="bag-blue" />)}
                {isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/81mElKTIKhL._AC_SR736,920_.jpg" alt="bag-blue" />)}
            </div>)}
           {bag3 && ( <div onMouseEnter={()=>setIsHovered3(true)} onMouseLeave={()=>setIsHovered3(false)}>
                {!isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/71N0f+0X2cL._AC_SR768,1024__FMwebp_.jpg" alt="bag-pink" />)}
                {isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/71tmEg0NylL._AC_SR736,920_.jpg" alt="bag-pink" />)}
            </div>)}
           {bag4 && ( <div onMouseEnter={()=>setIsHovered3(true)} onMouseLeave={()=>setIsHovered3(false)}>
                {!isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/71MbRPvegWL._AC_SR736,920_.jpg" alt="bag-purple" />)}
                {isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/61XvaDmHz9L._AC_SR736,920_.jpg" alt="bag-purple" />)}
            </div>)}
           {bag5 && ( <div onMouseEnter={()=>setIsHovered3(true)} onMouseLeave={()=>setIsHovered3(false)}>
                {!isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/71PUwpLBrtL._AC_SR736,920_.jpg" alt="bag-brown" />)}
                {isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/713qJhUdDlL._AC_SR736,920_.jpg" alt="bag-brown" />)}
            </div>)}
          {bag6 && (  <div onMouseEnter={()=>setIsHovered3(true)} onMouseLeave={()=>setIsHovered3(false)}>
            {!isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/61c4+S77SIL._AC_SR736,920_.jpg" alt="bag-yellow" />)}
                {isHovered3 && (<img style={{height: "431.5px"}} src="https://m.media-amazon.com/images/I/61vi3oEpAOL._AC_SR736,920_.jpg" alt="bag-yellow" />)}
            </div>)}
            <div className='circle'>
                <div onMouseEnter={()=>{setBag1(true); setBag2(false); setBag3(false); setBag4(false); setBag5(false); setBag6(false); setIsText1(true)}} onMouseLeave={()=>setIsText1(false)} ><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27496/27538/9913641/6423586.webp" alt="sample1" /></div>
                <div onMouseEnter={()=>{setBag1(false); setBag2(true); setBag3(false); setBag4(false); setBag5(false); setBag6(false); setIsText2(true)}} onMouseLeave={()=>setIsText2(false)}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27496/27538/9913641/6315159.webp" alt="sample2" /></div>
                <div onMouseEnter={()=>{setBag1(false); setBag2(false); setBag3(true); setBag4(false); setBag5(false); setBag6(false); setIsText3(true)}} onMouseLeave={()=>setIsText3(false)}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27496/27538/9913641/6315215.webp" alt="sample3" /></div>
                <div onMouseEnter={()=>{setBag1(false); setBag2(false); setBag3(false); setBag4(true); setBag5(false); setBag6(false); setIsText4(true)}} onMouseLeave={()=>setIsText4(false)}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27496/27538/9913641/6315218.webp" alt="sample4" /></div>
                <div onMouseEnter={()=>{setBag1(false); setBag2(false); setBag3(false); setBag4(false); setBag5(true); setBag6(false); setIsText5(true)}} onMouseLeave={()=>setIsText5(false)}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27496/27538/9913641/6315156.webp" alt="sample5" /></div>
                <div onMouseEnter={()=>{setBag1(false); setBag2(false); setBag3(false); setBag4(false); setBag5(false); setBag6(true); setIsText6(true)}} onMouseLeave={()=>setIsText6(false)}><img src="https://swch-cl2.olympus.zappos.com/webp/fabric/27496/27538/9913641/6423471.webp" alt="sample6" /></div>
            </div>

            {isText1 && (<span>Parchment</span>)}
            <div style={{marginLeft:"20px"}}> 
            {isText2 && (<span>Aegean Teal</span>)}
            </div>
            <div style={{marginLeft:"40px"}}> 
            {isText3 && (<span>Timeless Taupe</span>)}
            </div>
            <div style={{marginLeft:"60px"}}> 
            {isText4 && (<span>Violet Mist</span>)}
            </div>
            <div style={{marginLeft:"80px"}}> 
            {isText5 && (<span>Cream</span>)}
            </div>
            <div style={{marginLeft:"100px"}}> 
            {isText6 && (<span>Summer Daffodil</span>)}
            </div>
            
            

           <div> <p><b>Steve Madden</b><br />Lenya</p>
            <p>Women's</p>
            <p>$179.95</p></div>
        </div>
      </div>
   
  )
}

export default NewArrivals
