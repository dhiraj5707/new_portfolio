import React from 'react'
import "./Footer.css"

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkdine from '@iconscout/react-unicons/icons/uil-linkedin'
import Youtube from '@iconscout/react-unicons/icons/uil-youtube'
import Wava from '../Img/wave.png';

const Footer = () => {
  return (
    <div className='footer'>
    <img src={Wava} alt='' style={{width:"100%"}}/>
    <div className='f-content'>
    <span>dhirajkumar02bgs@gmail.com</span>
        <div className='f-icon'>
                <a href='https://instagram.com/dhiraj_love_prajapati_07?igshid=MzNlNGNkZWQ4Mg=='><Insta color="white" size="3rem"/> </a>                
                <a href='https://www.facebook.com/dhirajkumar.dk.75?mibextid=ZbWKwL'><Facebook color="white" size="3rem"/></a>
                <a href='https://www.linkedin.com/in/dhiraj-kumar-4aa26b262'><Linkdine color="white" size="3rem"/></a>
                <a href='https://youtube.com/@dkprajapati707'><Youtube color="white" size="3rem"/></a>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
