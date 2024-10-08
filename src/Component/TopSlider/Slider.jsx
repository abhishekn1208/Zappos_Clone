import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import './slider.css'



const Slider = () => {
    const slide1 =useRef()
    const slide2 =useRef()
    const [ currentSlide, setCurrentSlide] = useState(0);

    const slides =[
        {ref : slide1 },
        {ref : slide2},
    ]

    useEffect(()=>{
     if(currentSlide===0){
     const Interval1 = setInterval(()=>{
        setCurrentSlide((prev)=>(prev+1)%slides.length)
      },3000)

      return()=>{
        clearInterval(Interval1)
      }
     }else{
      const Interval2 = setInterval(() => {
        setCurrentSlide((prev)=>(prev-1)%slides.length)
      }, 3000);

      return()=>{
        clearInterval(Interval2)
      }
     }
    },[])

    const handleNext=()=>{
        setCurrentSlide((prev)=>(prev+1)%slides.length)
    }
    
    const handlePrevious=()=>{
        setCurrentSlide((prev)=>(prev-1)%slides.length)
    }

  return (
    <div id='slideDiv'>
        <button id='btn1' style={{display : currentSlide===0? 'none' : 'flex'}} onClick={handlePrevious}> <FontAwesomeIcon icon={faChevronLeft}/></button>
      <div id='display1' ref={slide1} style={{display : currentSlide===0? 'block' : 'none'}}><p>10% off $100!+* <b style={{textDecoration:"underline"}}>Download & Open App TO Get Code</b></p></div>
      <div id='display2' ref={slide2} style={{display : currentSlide===1? 'block' : 'none'}}><p>Birkentstock for fall and beyond. <b style={{textDecoration:"underline"}}>Shop Birkenstock</b></p></div>
    
        <button id='btn2' style={{display : currentSlide===1? 'none' : 'flex'}} onClick={handleNext}> <FontAwesomeIcon icon={faChevronRight}/></button>
      
    </div>
  )
}

export default Slider
