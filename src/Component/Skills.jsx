import React from 'react'
import "./Skills.css"
import { useContext } from 'react';
import { themeContext } from '../Context';


  function Testimonial() {
    const transition = {duration:1,type:'spring'}

    const  theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

      return (

        <div className='left'>
         <div className='myskill'>
        <p>TECHNICAL AND PROFESSIONAL</p>
        <h2>My Skills</h2>
          </div>
          <div className='Testimonial' id='Testimonial'>
          <div className='left-skill'>
          <h1>Technical</h1>
          <h2>Skills</h2>
          </div>
         

          <div className='skill'>
            <div className='container1'>
              <div className='skill-box'>
                <span className='title' style={{color:darkMode? 'white' :''}}>HTML</span>
                <div className='skill-bar'>
                    <span className='skill-per'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
              </div>
              <div className='skill-box'>
                <span className='title'style={{color:darkMode? 'white' :''}}>CSS</span>
                <div className='skill-bar'>
                    <span className='skill-per css'>
                        <span className='tooltip'>70%</span>
                    </span>
                </div>
              </div>
              <div className='skill-box'>
                <span className='title'style={{color:darkMode? 'white' :''}}>React js</span>
                <div className='skill-bar'>
                    <span className='skill-per react'>
                        <span className='tooltip'>75%</span>
                    </span>
                </div>
              </div>
              <div className='skill-box'>
                <span className='title'style={{color:darkMode? 'white' :''}}>Javascript</span>
                <div className='skill-bar'>
                    <span className='skill-per javascript'>
                        <span className='tooltip'>50%</span>
                    </span>
                </div>
              </div>
              <div className='skill-box'>
                <span className='title'style={{color:darkMode? 'white' :''}}>python</span>
                <div className='skill-bar'>
                    <span className='skill-per python'>
                        <span className='tooltip'>80%</span>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='right'>
          <div className='right-skill'>
            <h1>Professional</h1>
            <h2>Skills</h2>
          </div>
          <div className='container'>
          <span2>
            <div className='progress1' id='cl0' style={{style:"var(--i:90; --clr:#43f94a;" }}>
            <h3>90<span>%</span></h3>
            <h4>Team Work</h4>
            </div>
            <div className='progress1'id='cl1' style={{background:"var(--i:80; --clr:#2ccde9;"}}>
            <h3>80<span>%</span></h3>
            <h4>Creativity</h4>
            </div>
            </span2>
            <span1>
            <div className='progress1'id='cl2'style={{background:"var(--i:85; --clr:#fb297b;"}}>
            <h3>85<span>%</span></h3>
            <h4>Project Mangement</h4>
            </div>
            <div className='progress1'id='cl3'style={{background:"var(--i:60; --clr:#ffe047;"}}>
            <h3>60<span>%</span></h3>
            <h4>Cominication</h4> 
            </div>
            </span1>

          </div> 
        </div>  






      </div>
    )
  }
export default Testimonial


