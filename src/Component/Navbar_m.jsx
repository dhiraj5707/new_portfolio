import React from 'react'
import { links } from './data'
import {NavLink} from 'react-router-dom';
import './Navbar_m';

function Navbar_m() {
  return (
    <div className='nav'>
    <div className='nav__menu'>
    <ul className='nav__list'>
    {links.map(({name,icon,path},index) => {
        return(
            <li className='nav__item' key={index}>
                <NavLink to={path} className='nav__link'>
                    {icon}
                    <h3 className='nav__name'>{name}</h3>
                </NavLink>
            </li>
        )
    })}
    </ul>
    </div>
    <div className='nav__toggle1'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

    </div>
      
    </div>
  )
}

export default Navbar_m
