import React from 'react'
import NavBar from './NavBar';

const Contact = () => {

    return (
        <div className='contact-container'>
            <NavBar />
        <span className='icon-span'>
            <a href="https://github.com/ljones-11"><i class="fa-brands fa-github fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/lee-jones-6175854a/"><i class="fa-brands fa-linkedin fa-3x"></i></a>
            <a href="https://twitter.com/leejones11"><i class="fa-brands fa-twitter fa-3x"></i></a>
        </span>
    </div>
    )
}

export default Contact;