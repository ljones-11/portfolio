import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {


    return (
        <div className='nav-container' >
            <ul className='nav-ul'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Projects</Link>
                </li>
                <li>
                <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;