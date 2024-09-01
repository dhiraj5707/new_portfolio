import React from 'react'
import "./Work.css";
import Html from "../Img/html.png";
import Css from "../Img/CSS3.png";
import Developer from "../Img/developer.png";
import Js from "../Img/js.jpeg";
import ReactJs from "../Img/react.png";
import { useContext } from 'react';
import { themeContext } from '../Context';
import {motion} from 'framer-motion';


const Work = () => {
  const  theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className='works' id='Workrands'>
    <div className='awesome' id='ASW'>
      <span id='work' style={{color:darkMode? 'white':''}}>Works for All these</span>
      <span id='pw'>personal Website</span>
      <span id='text'>Python*: Ideal for automating tasks and building web apps with frameworks like Django, perfect for personal websites with dynamic features.
    <br/> <br/> 
JavaScript*: Essential for adding interactivity and dynamic content to your personal website, ensuring a responsive user experience.
<br/> <br/>   
Python: Powers dynamic and data-driven websites.
JavaScript: Adds interactivity and dynamic content to websites.
      </span>
      <button className='button s-button'id='btn'>Hire me</button>
      <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
    </div>


    {/* right side */}
    <div className='w-right' id='w-right' >
    <motion.div
        initial={{rotate:80}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5, type:'spring'}}
        className='w-mainCircle'>
      <div className='w-secCircle'>
        <img src={Html} alt=''/>
      </div>
      <div className='w-secCircle'>
        <img src={ReactJs} alt=''/>
      </div>
      <div className='w-secCircle'>
        <img src={Developer} alt=''/>
      </div>
      <div className='w-secCircle'>
        <img src={Css} alt=''/>
      </div>
      <div className='w-secCircle'>
        <img src={Js} alt=''/>
      </div>
      </motion.div>
      {/* Background Circle */}
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>

    </div>
    </div>
  )
}

export default Work
