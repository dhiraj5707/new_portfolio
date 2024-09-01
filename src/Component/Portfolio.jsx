// import React from 'react'
// import './Portfolio.css';
// import {Swiper,SwiperSlide} from 'swiper/react'
// import 'swiper/css';
// import Portfolio1 from '../Img/portfolio1.jpg';
// import Portfolio2 from '../Img/portfolio2.jpg';
// import Portfolio3 from '../Img/portfolio3.jpg';
// import Portfolio4 from '../Img/portfolio4.jpg';
// import Portfolio5 from '../Img/portfolio5.jpg';
// import Portfolio7 from '../Img/portfolio7.jpg';
// import { useContext } from 'react';
// import { themeContext } from '../Context';

// const Portfolio = () => {
//   const  theme=useContext(themeContext);
//   const darkMode=theme.state.darkMode;
//   return (
//     <div className='portfolio' id='Portfolio'>
//     {/* heading */}
//     <span style={{color:darkMode? 'white':''}}>Recent Projects</span>
//     <span>Portfolio</span> 
//     {/* slider */}
//     <Swiper
//     spaceBetween={30}
//     slidesPerView={3}
//     grabCursor={true}
//     className='portfolio-slider' id='card' >

//       <SwiperSlide>
//         <img src={Portfolio4} alt=''/>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={Portfolio2} alt=''/>
//       </SwiperSlide> 
//       <SwiperSlide>
//         <img src={Portfolio5} alt=''/>
//       </SwiperSlide> 
//       <SwiperSlide>
//         <img src={Portfolio4} alt=''/>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={Portfolio3} alt=''/>
//       </SwiperSlide> 
//       <SwiperSlide>
//         <img src={Portfolio1} alt=''/>
//       </SwiperSlide> 
//       <SwiperSlide>
//         <img src={Portfolio7} alt=''/>
//       </SwiperSlide>

//     </Swiper>
//     </div>
//   )
// }
// export default Portfolio


import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../Img/portfolio3.jpg";
import Ecommerce from "../Img/portfolio2.jpg";
import MusicApp from "../Img/portfolio3.jpg";
import { themeContext } from "../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider" id="card">
        <SwiperSlide>
          <img src={Sidebar} alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Portfolio;

