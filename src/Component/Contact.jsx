import React, { useState } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useContext } from 'react';
import { themeContext } from '../Context';
const Contact = () => {
    const  theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    
    
      const form = useRef();
      const[done, setDone]=useState(false);
    
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xwzw69p', 'template_k83htjj', form.current, '2DQoeLfQX6aIoie55')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };   

  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome' id='aws'>
                <span style={{color:darkMode? 'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div 
                    className='blur s-blurl' style={{background:"#abf1ff94"}}>
                </div>
            </div>
           
        </div>  
        <div className=' c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name'/>
                <input type='email' name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message' />
                <input type='submit' value="Send" className='button'/>
                <span>{done && "Thanks for contacting me!"}</span>
                <div  
                    className='blue c-blurl'
                    style={{background:"var( --purple)"}}>
                </div>
            </form>

        </div>    
    </div>
  )
}

export default Contact
