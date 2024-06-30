import React from 'react'
import './Services.css';
import Glasses from "../Img/glasses.png";
import HeartEmoji1 from "../Img/glasses.png";
import Code from './Code';
import Humble from "../Img/humble.png";
import Resume from '../Img/Resume.pdf';
import { useContext } from 'react';
import { themeContext } from '../Context';
import {motion} from 'framer-motion'



function Services() {
  const transition ={duration:1,type:'spring'}
  const  theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='services' id='Services'>
    <div className='awesome'>
    <span style={{color:darkMode? 'white':''}}>My Awesome</span>
    <span>Services</span>
    <span>I Provide a Awesome Service like  a Shopping Website Maintaince <br/>the Website  I Build a Template 
    <br/>I Can Build a Comercial Website and Portfolio and also themes </span>
<a href={Resume} download>
    <button className='button s-button' id='btn1'>Download CV</button>
</a>
    <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

    </div>

    {/* right side */}


    <div className='cards'>
    <motion.div   id='card1'
    initial={{left:'25rem'}}
    whileInView={{left:'14rem'}}
    transition={transition}
    style={{left:"16rem"}}>
        <Code
            emoji={HeartEmoji1}
            heading={'Design'}
            detail={"Photoshop"}
        />
    </motion.div>

    {/* second card */}


    <motion.div  id='card2'
      // initial={{left:'-10rem'}}
      // whileInView={{left:'-2rem'}}
      // transition={transition}
      style={{top:"12rem",left:"-3rem"}}>
      <Code
        emoji={Glasses}
        heading={"Developer"}
        detail={"I m python Developer !"}
      />
    </motion.div>

    {/* third card */}

    
    <motion.div  id='card3'
    initial={{left:'25rem'}}
    whileInView={{left:'14rem'}}
    transition={transition}
     style={{top:"19rem",left:"14rem"}}>
    <Code
      emoji={Humble}
      heading={"UI"}
      detail={"HTML,CSS,JS,REACT JS"}
    />
    </motion.div>


    <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
    </div>
    </div>
  )
}

export default Services
