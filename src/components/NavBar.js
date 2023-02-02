import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {


    return (
        <div className='nav-container' >
            <ul className='nav-ul'>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;