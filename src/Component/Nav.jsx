import React,{useState}from 'react'
import './Nav.css'

const Navbar = () => {
    const[active,setActive]=useState('nav_menu');
    const [toggleIcon,setToggleIcon] =useState('nav_toggler')
    const nav_Toggle=()=>{
        active ==='nav_menu' 
        ?setActive('nav_menu nav_active') 
        : setActive('nav_menu');

        toggleIcon==='nav_toggler'
        ? setToggleIcon('nav_toggler toggle')
        :setToggleIcon ('nav_toggler');
    };
  return (
    <div className='nav'>
        <a href='#' className='nav_brand'>Dhiraj
        
        </a>

        <ul className={active}>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Home</a>
            </li>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Services</a>
            </li>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Experience</a>
            </li>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Skills</a>
            </li>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Portfolio</a>
            </li>
        </ul>
        <div onClick={nav_Toggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>



        </div>
     
    </div>
  )
}

export default Navbar