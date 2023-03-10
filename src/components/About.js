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
                            I have spent the last 12 years playing professional rugby. This gave me the opportunity to represent my country, 
                            travel the world, and pursue my passion as a career. I always knew at some point 
                            this would come to an end, and I now look forward to what's next.
                            With my skills and experience I am eager to transition into a career in technology.<br></br><br></br> 
                            My background in Mechanical Engineering, combined with
                            the 16-week Professional Web Development Course with CodeClan I am currently studying
                            has helped me to develop a broad range of full-stack skills and I look forward to learning more.
                            I love the challenge of finding solutions to
                            problems with a combination of both the logical and creative approaches in coding.
                        </p>
                    </div>              
                    <div className="row">
                        <div className="column">
                            <img src={require("../LJ1.jpg")}></img>
                        </div>
                        <div className="column">
                            <img src={require("../LJ7.jpg")}></img>
                        </div>
                        <div className="column">
                            <img src={require("../LJ3.jpg")}></img>
                        </div>
                        <div className="column">
                            <img src={require("../LJ5.png")}></img>
                        </div>
                        <div className="column">
                            <img src={require("../LJ2.png")}></img>
                        </div>
                        <div className="column">
                            <img src={require("../LJ6.png")}></img>
                        </div>
                        <div className="column">
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
                        <b><p>Python ??? HTML & CSS ??? PostgreSQL ??? Flask ??? Javascript ??? React ??? Express.js ??? MongoDB ??? Java
                        ??? Spring ??? Git
                        </p></b>
                    </div>
                    <div className='icon-container'>
                        <i className="devicon-python-plain-wordmark colored"></i>
                        <i className="devicon-html5-plain-wordmark colored"></i>
                        <i className="devicon-css3-plain-wordmark colored"></i>
                        <i className="devicon-postgresql-plain-wordmark colored"></i>
                        <i id="white" className="devicon-flask-original-wordmark"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-react-original-wordmark colored"></i>
                        <i className="devicon-express-original-wordmark"></i>
                        <i className="devicon-mongodb-plain-wordmark colored"></i>
                        <i className="devicon-java-plain-wordmark colored"></i>
                        <i className="devicon-spring-plain-wordmark colored"></i>
                        <i className="devicon-git-plain-wordmark"></i>
                    </div>
                </div>
            </section>
            
            <Footer />
            </>
    )
}

export default About;