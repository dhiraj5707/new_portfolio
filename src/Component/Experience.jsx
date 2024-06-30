import React from 'react'
import "./Experience.css";
import { useContext } from 'react';
import { themeContext } from '../Context';


const Experience = () => {

  const  theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
    <div className='achivement'>
    
        <div className='circle' style={{color:darkMode? 'black' :''}}>6+</div>
        <span style={{color:darkMode? 'white' :''}}>Month</span>
        <span style={{color:darkMode? 'yellow' :''}}>Internship</span>
    </div>
    <div className='achivement'>
        <div className='circle'style={{color:darkMode? 'black' :''}}>5+</div>
        <span style={{color:darkMode? 'white' :''}}>Completed</span>
        <span style={{color:darkMode? 'yellow' :''}}>Projects</span>
    </div>
    <div className='achivement'>
        <div className='circle'style={{color:darkMode? 'black' :''}}>1+</div>
        <span style={{color:darkMode? 'white' :''}}>Programming</span>
        <span style={{color:darkMode? 'yellow' :''}}>Language</span>
    </div>
      
    </div>
  )
}

export default Experience
