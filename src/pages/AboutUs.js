import React from 'react';
import '../Components/pages.css';
import Navbar from '../Components/Navbar.js';

const AboutUs =()=>{
    return(
        <>
      <Navbar/>
      <div>
      <a class="navbar-brand" href="/"> <h1 id="SFtitle"> Sample Flowers</h1></a>
        <h1 class="blahinfo">About Us</h1>
        </div>
        <div class="blahinfo">
        <h2>We are located in Southern California.
        <h2>We decided to pursue our vocation to become flower bouquet
          designers.</h2> 
        <h2>We hope you like our designs.</h2>
        </h2>
        <div>
          <div>
         <img src="https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x1280/products/1241/2902/167398L__04164.1557610883.jpg?c=2" class="pic1" alt="pinkbouquet"></img>
        </div>
        </div>
        </div>
    </>
    );
};

export default AboutUs;