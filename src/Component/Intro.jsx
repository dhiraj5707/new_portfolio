import React from 'react'
import './Intro.css'
import Facebook from '../Img/Facebookk.png.jpg';
import instagram from '../Img/instagramm.png.jpg';
import linkedin from '../Img/linkediin.png.jpg';
import boy from '../Img/boy.png';
import vector11 from '../Img/Vector1.png';
import vector22 from '../Img/Vector2.png';
import glassesimoji from '../Img/glassesimoji.png';
import thumbup from '../Img/thumbup.png';
import github from '../Img/github.jpg'
import crown from '../Img/crown.png';
import FloatingDiv from './FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../Context';
import {motion} from 'framer-motion';



const Intro = () => {
  const transition={duration : 2, type:'spring'}
  const  theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

 
  return (
    <div className='intro'>
    <div className='i-left'>
    <div className='i-name'>
    <span style={{color:darkMode? 'white':'' }}>Hi! I'm  </span>
    <span>Dhiraj Kumar</span>
    <span>
    Frontend Developer with high level of experience in web designing</span> 
    <span> and development,producting the Quality work.</span>
    </div>
    <button className='button i-button'>Hire me</button>
    <div className='i-icons'>
    <a href='https://www.facebook.com/dhirajkumar.dk.75?mibextid=ZbWKwL'><img src={Facebook} className='i-con' alt='foto' /></a>
    <a href='https://instagram.com/dhiraj_love_prajapati_07?igshid=MzNlNGNkZWQ4Mg=='><img src={instagram} className='i-con' alt='instagram'/></a>
    <a href='https://www.linkedin.com/in/dhiraj-kumar-4aa26b262'><img src={linkedin} className='i-con' alt='linkedin'/></a>
    <a href='https://github.com/dhiraj5707'><img src={github} className='i-con'  alt='github'/></a>
    </div>
    </div>
    <div className='i-right'>
    <img src={vector11} alt=''/>
    <img src={vector22} alt=''/>
    <img  id='boy' style={{width:'28rem', height:'27.28em', marginLeft:'-66px' ,top:'0.5px'}} 
   
    src={boy} alt=''/>

    <motion.img 
    initial={{left:'-36%'}}
    whileInView={{left:'-24%'}}
    transition={transition}
    src={glassesimoji} alt=''/>

    <motion.div
      initial={{top:'-4%',left:'74%'}}
      whileInView={{left:'68%'}}
      transition={transition}
      style={{top:'-4%' ,left:'68%'}}
      className='floating-div'>
      <FloatingDiv  id='dev' image={crown} text1='Web' text2='Developer'/>
    </motion.div>

    <motion.div 
      initial={{left:'9rem',top:'23.2rem'}}
      whileInView={{left:'0rem'}}       transition={transition}
      style={{top:'23.2rem',left:'1.2rem'}}
      className='floating-div'>
      <FloatingDiv image={thumbup}text1='Best Design' text2='Award'/>
    </motion.div>

    {/* blur divs */} 
    <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
    <div className='blur' style={{
      background:'#c1F5FF',
      top:'17rem',
      width:'21rem',
      height:'11rem',
      left:'-9rem'
      }}></div>
    </div>
    </div>
  )
}

export default Intro
