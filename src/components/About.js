import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';

const About = () => {

    return (
        <>
        
        <section className='about-container'>
                <div className='hero-info'>
                    <NavBar />
                    <h1>About Me</h1>
                    <h2 id="blue">From professional rugby to the field of technology!</h2>
                    <hr></hr>
                    <div className="text-container">
                        <p>
                            I have been fortunate enough to have spent the last 12 years playing professional rugby. This gave me the opportunity to represent my country 
                            travel the world, and pursue my passion as a career.I always knew at some point, 
                            this would come to an end and I now look forward to what's next.
                            I am eager, with my skills and experience to transition into a career in technology.<br></br><br></br> 
                            My background in Mechanical Engineering, combined with
                            the 16-week Professional Web Development Course with CodeClan I am currently studying
                            has helped me to develop a broad range of full-stack skills and I look forward to learning more.
                            I love the challenge of finding solutions to
                            problems with a combination of both the logical and creative approaches in coding.
                        </p>
                    </div>              
                    <div class="row">
                        <div class="column">
                            <img src={require("../LJ1.jpg")}></img>
                        </div>
                        <div class="column">
                            <img src={require("../LJ7.jpg")}></img>
                        </div>
                        <div class="column">
                            <img src={require("../LJ3.jpg")}></img>
                        </div>
                        <div class="column">
                            <img src={require("../LJ5.JPG")}></img>
                        </div>
                        <div class="column">
                            <img src={require("../LJ2.JPG")}></img>
                        </div>
                        <div class="column">
                            <img src={require("../LJ6.JPG")}></img>
                        </div>
                        <div class="column">
                            <img src={require("../LJ4.jpg")}></img>
                        </div>
                        </div>
                    </div>
                <div className='hero-info'>
                    <h2 id="underline">CodeClan</h2>
                    <hr></hr>
                    <div className='text-container'>
                        <p>CodeClan is 16 week intensive SQA accredited course teaching the fundamentals of software development
                        across a range of languages and frameworks, using Agile methodologies, Test-Driven Development and Object-Oriented Programming to build
                        full-stack applications. Over 800 hours of instructor-led coding, pair programming and group
                        project experience which has significantly improved and expanded my previous programming
                        knowledge.</p>
                    </div>
                    </div>
                    <div className='hero-info'>
                    <h2 id="underline">Skills and languages</h2>
                    <hr></hr>
                    <div className='text-container'>
                        <b><p>Python • HTML & CSS • PostgreSQL • Flask • Javascript • React • Express.js • MongoDB • Java
                        • Spring • Git
                        </p></b>
                    </div>
                    <div className='icon-container'>
                        <i class="devicon-python-plain-wordmark colored"></i>
                        <i class="devicon-html5-plain-wordmark colored"></i>
                        <i class="devicon-css3-plain-wordmark colored"></i>
                        <i class="devicon-postgresql-plain-wordmark colored"></i>
                        <i id="white" class="devicon-flask-original-wordmark"></i>
                        <i class="devicon-javascript-plain colored"></i>
                        <i class="devicon-react-original-wordmark colored"></i>
                        <i class="devicon-express-original-wordmark"></i>
                        <i class="devicon-mongodb-plain-wordmark colored"></i>
                        <i class="devicon-java-plain-wordmark colored"></i>
                        <i class="devicon-spring-plain-wordmark colored"></i>
                        <i class="devicon-git-plain-wordmark"></i>
                    </div>
                </div>
            </section>
            
            <Footer />
            </>
    )
}

export default About;