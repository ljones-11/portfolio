import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';

const Contact = () => {

    return (
        <>
            <section className='about-container'>
                <div className='hero-info'>
                    <NavBar />
                    <h1>Contact Me</h1>
                    <hr></hr>
                    <div className="contact-container">

                            <p className="contact-div">
                                <i id="med-icon" className="fa-sharp fa-solid fa-paper-plane"></i> <a href="mailto:ljones2806@gmail.com"> &nbsp; E-mail</a>
                            </p>
                            

                            <p className="contact-div">
                                <i  id="med-icon" className="devicon-linkedin-plain colored"></i> <a href="https://www.linkedin.com/in/leejones11"> &nbsp; linkedin.com/in/leejones11</a>
                            </p>
                        
                        
                            <p className="contact-div">
                                <i  id="med-icon-white" className="devicon-github-original-wordmark colored"></i><a href="https://www.github.com/ljones-11">&nbsp; github.com/ljones-11</a>
                            </p>
                        
                        
                            <p className="contact-div">
                                <i  id="med-icon" className="devicon-twitter-original colored"></i><a href="https://www.twitter.com/leejones11">@leejones11</a>
                            </p>
                       
                    </div>  
                </div>
            </section>
        <Footer />
    </>
    )
}

export default Contact;