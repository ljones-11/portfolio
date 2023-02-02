import React, { require } from 'react'
import NavBar from '../components/NavBar';

const Home = () => {
    return (
            
            <section className='hero-container'>
                <div className='hero-info'>
                    <NavBar />
                    <h1>Lee Jones</h1>
                    <h2>Software Developer</h2>
                    <a>Download CV</a>
                </div>
            </section>
    )
}

export default Home;