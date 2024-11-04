// import { useNavigate } from 'react-router-dom'
// import React  from 'react'
// import farm from './Asset/img.png'

// import './Intro.css'
// const Intro = () => {
//   const navigate=useNavigate();
//   const handleclick=()=>{
     
//   }
//   return (
//     <div className="cover">
   
//     <div className="i">
   
//     <div className="i-left">
//       <div className="i-left-wrapper">
//       <div>
//       <div >
//       <div className="i-intro"><strong>Hey, welcome to</strong></div>
//       <div className="i-name">Job<span>Hunt</span></div>
//      </div></div>
//      <div class="wrapper">
//   <div class="static-txt"></div>
//   <ul class="dynamic-txts">
//     <li><span>Easy Apply</span></li>
//     <li><span>Posting new jobs</span></li>
//     <li><span>Job searching </span></li>
//     <li><span>Resume builder </span></li>
//   </ul>
// </div>
      
        
//           <div className="i-desc">
          
//           Connecting job seekers with opportunities and employers with talent. Discover jobs, apply seamlessly, and stay informed—all in one place.

//           </div>
//             <div>
//                 <button className='btn' onClick={handleclick}>Get Started</button>
//             </div>
         
//         </div>
      
//     </div>
//     <div className="i-right">
//       <div className="i-bg"></div>
//     <img src={farm} alt="" className="i-img"   />
//     </div>
//   </div>
    
//   </div>

   
    
//   )
// }

// export default Intro

// // https://static.pexels.com/photos/392018/pexels-photo-392018.jpeg
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import farm from './Asset/img.png'

import './Intro.css'
const Intro = () => {

  const navigate=useNavigate();
  const handleclick=()=>{
     
  };
  const textRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: ["Job searching", "Posting new jobs", "Easy Apply"],
      typeSpeed: 70,  // Speed of typing in milliseconds
      backSpeed: 40,   // Speed of backspacing in milliseconds
      backDelay: 1500, // Delay before starting to backspace
      loop: true,      // Loop the animation
      showCursor: true // Show the blinking cursor
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <div className="cover">
   
    <div className="i">
   
    <div className="i-left">
      <div className="i-left-wrapper">
      <div>
      <div >
      <div className="i-intro"><strong>Hey, welcome to</strong></div>
      <div className="i-name">Job<span>Hunt</span></div>
     </div></div>
     <div class="wrapper">
     <h4>
     <span ref={textRef}></span>
   </h4>
</div>
      
        
          <div className="i-desc">
          
          Connecting job seekers with opportunities and employers with talent. Discover jobs, apply seamlessly, and stay informed—all in one place.

          </div>
            <div>
                <button className='btn' onClick={handleclick}>Get Started</button>
            </div>
         
        </div>
      
    </div>
    <div className="i-right">
      <div className="i-bg"></div>
    <img src={farm} alt="" className="i-img"   />
    </div>
  </div>
    
  </div>

   
    
  )
}

export default Intro

// https://static.pexels.com/photos/392018/pexels-photo-392018.jpeg