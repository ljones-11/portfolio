import React, { require } from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
            <>
                <section className='hero-container'>
                    <div className='hero-info'>
                        <NavBar />
                        <h1>Lee Jones</h1>
                        <hr id="hr-title"></hr>
                        <h2>Software Developer</h2><br></br>
                        <a href="mailto:ljones2806@gmail.com">E-mail me</a>
                    </div>
                </section>
                <Footer />
            </>
    )
}

export default Home;