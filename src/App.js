import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Design from './components/Design';
import Contact from './components/Contact';
import SideNav from './components/SideNav';
import { useState } from 'react';
import Main from './components/Main';


function App() {

  return (
    <>
          <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/design' element={<Design />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Main />
            <SideNav/>
        {/* <Footer /> */}
        
    </>
  );
}

export default App;
