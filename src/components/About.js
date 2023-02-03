import React from 'react'
import NavBar from './NavBar';

const About = () => {

    return (
        <section className='hero-container'>
                <div className='hero-info'>
                    <NavBar />
                    <h1>About Me</h1>
                    <h2 id="blue">From professional rugby to the field of technology!</h2>
                    <div className="text-container">
                        <p>
                            I have spent the last 12 years playing professional rugby. This gave me the opporunity to represent my country 
                            travel the world, and do what I love everyday as a job. I always knew at some point, 
                            this would come to an end and here we are!
                            I am now eager to transition my skills and experience into a career in tech.<br></br><br></br> 
                            My background in Mechanical Engineering, combined with
                            the 16-week Professional Web Development Course with CodeClan I am currently studying
                            has given me experience with a range of full-stack skills.
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
                    <h2>CodeClan</h2>
                    <div className='text-container'>
                        <p>CodeClan is 16 week intensive SQA accredited course teaching the fundamentals of software development
                        across a range of languages and frameworks, using Agile methodologies, TDD and OOP to build
                        full-stack applications. Over 800 hours of instructor-led coding, pair programming and group
                        project experience which has significantly improved and expanded my previous programming
                        knowledge.</p>
                    </div>
                    </div>
                    <div className='hero-info'>
                    <h2>Skills and languages</h2>
                    <div className='text-container'>
                        <b><p>Python • HTML & CSS • PostgreSQL • Javascript • React • Express.js • MongoDB • Javascript
                        • Spring • Git • Restful Workflow
                        </p></b>
                    </div>
                </div>
            </section>
    )
}

export default About;