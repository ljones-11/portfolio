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
                        <div className='project-div'>
                            <h2 id="blue">Gym Managment Application</h2>
                            <div className="tools-div">
                                <i id="large-icon" class="devicon-python-plain-wordmark colored"></i>
                                <i id="large-icon-white" class="devicon-flask-original colored"></i>
                                <i id="large-icon" class="devicon-html5-plain-wordmark colored"></i>
                                <i id="large-icon" class="devicon-css3-plain-wordmark colored"></i>
                                <i id="large-icon" class="devicon-postgresql-plain-wordmark colored"></i>
                                
                            </div>
                        </div>

                            <hr></hr>

                            <div className="row project">
                                <div class="column project">
                                    <img src={require("../gym_project1.png")} alt="Homepage"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../gym_project2.png")} alt="Classes list"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../gym_project3.png")} alt="Member card"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../gym_project4.png")} alt="Class card"></img>
                                </div>
                            </div>
                        
                        <div className='text-container'>
                            <p> 
                                Full-stack web application developed for a local gym to 
                                efficiently manage memberships and class bookings. 
                                Includes full CRUD 
                                functionality for members and classes, 
                                enabling the ability to book members into classes, 
                                monitor class capacities, and view members booked 
                                into specific classes. The app was built as a first solo project over 5 days with a limitation on tools 
                                including no JS or pre-built libraries.<br></br><br></br>

                                <a href="https://github.com/ljones-11/dfgym_manager"><b>Github Link &nbsp;<i class="fa-solid fa-magnifying-glass"></i></b></a>
                            </p>
                            </div>
                    </div>
                    <div className='hero-info'>
                        <div className='project-div'>
                            <h2 id="blue">Pet Adoption Application</h2>
                            <div className="tools-div">
                            <i id="large-icon" class="devicon-javascript-plain colored"></i>
                            <i id="large-icon" class="devicon-react-original-wordmark colored"></i>
                            <i id="large-icon-white" class="devicon-express-original-wordmark"></i>
                            <i id="large-icon" class="devicon-mongodb-plain-wordmark colored"></i>
                                
                            </div>
                        </div>

                            <hr></hr>

                            <div className="row project">
                                <div class="column project">
                                    <img src={require("../pet_project1.png")} alt="Admin consol"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../pet_project2.png")} alt="Dog card"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../pet_project3.png")} alt="Adopt form"></img>
                                </div>
                            </div>
                        
                        <div className='text-container'>
                            <p> 
                                Full-stack web application intended for a local pet 
                                charity/shelter to streamline the adoption process and provide admin 
                                management functionality. The application features full CRUD 
                                functionality and filtering capabilities for managing pets and adoption 
                                requests. Users are allowed to scroll available pets and submit adoption requests, 
                                which can the be reviewed and managed by the charity admin. React libraries were 
                                used in order to improve UI with popup forms and alerts. <br></br><br></br>
                                <a href="https://github.com/ljones-11/pet-shelter-app"><b>Github Link &nbsp;<i class="fa-solid fa-magnifying-glass"></i></b></a>


                            </p>
                            </div>
                        </div>
                            < div className='hero-info'>
                                <div className='project-div'>
                                    <h2 id="blue">Calorie tracking application</h2>
                                <div className="tools-div">
                                    <i id="large-icon" class="devicon-java-plain-wordmark colored"></i>
                                    <i id="large-icon" class="devicon-spring-plain-wordmark colored"></i>
                                    <i id="large-icon" class="devicon-react-original-wordmark colored"></i>
                                    <i id="large-icon" class="devicon-bootstrap-plain colored"></i>
                                </div>
                            </div>

                            <hr></hr>

                            <div className="row project">
                                {/* <div class="column project">
                                    <img src={require("../macros2.png")} alt="Onboarding"></img>
                                </div> */}
                                <div class="column project">
                                    <img src={require("../macros3.png")} alt="Food diary"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../macros4.png")} alt="Macro charts"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../macros5.png")} alt="Journal"></img>
                                </div>
                                <div class="column project">
                                    <img src={require("../macros1.png")} alt="Onboarding"></img>
                                </div>
                            </div>
                        
                        <div className='text-container'>
                            <p> 
                                MacrOS is a full-stack calorie tracking application, 
                                with functionality allowing users set nutrition goals, 
                                track and view their daily food/calorie/macro intake and 
                                monitor their progress over time. Users are able to log food items
                                to daily meals, view current and past macro intake, search for food
                                items in an existing database and add custom items for future use.
                                Users are able to track progress towards fitness goals through the 
                                use of graphs and charts.
                                <br></br><br></br>
                                <a href="https://github.com/larrywongkahei/MacrOS"><b>Github Link &nbsp;<i class="fa-solid fa-magnifying-glass"></i></b></a>


                            </p>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                    </div>
                </section>
                <Footer />
            </>
    )
}

export default Projects;