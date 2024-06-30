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
    <div className='works' id='Workrands & '>
    <div className='awesome'>
      <span style={{color:darkMode? 'white':''}}>Works for All these</span>
      <span>personal Website</span>
      <span>My work in college day like project.
      <br/>As I am fresher, I dont  have experience, <br/>
       but I am quick learner and very hardworking person. <br/>
        I am ready to learn new things. 
    
      </span>
      <button className='button s-button'id='btn'>Hire me</button>
      <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
    </div>
    {/* right side */}
    <div className='w-right'>
    <motion.div
        initial={{rotate:50}}
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
