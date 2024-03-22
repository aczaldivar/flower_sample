import React from 'react';
import '../Components/pages.css';
import Navbar from '../Components/Navbar.js';

const AboutUs =()=>{
    return(
        <>
      <Navbar/>
      <div class="title" background-color= "pink">
        <h1 style={{color:'red'}} >About Us</h1>
        </div>
        <h2>This is Sample Flowers!</h2>
        
    </>
    );
};

export default AboutUs;