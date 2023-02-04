import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Projects = () => {

    return (
            <>
                <section className='about-container'>
                    <div className='hero-info'>
                        <NavBar />
                        <h1>Projects</h1>
                        <h2 id="blue">Gym Managment Application</h2>
                        <div className='text-container'>
                            <p> 
                                Full-stack web application developed for a local gym to 
                                efficiently manage memberships and class bookings 
                                as a first project. Includes full CRUD 
                                functionality for members and classes, 
                                enabling the ability to book members into classes, 
                                monitor class capacities, and view members booked 
                                into specific classes. 
                            </p>
                            </div>
                        <img></img>
                        <img></img>

                    </div>
                </section>
                <Footer />
            </>
    )
}

export default Projects;