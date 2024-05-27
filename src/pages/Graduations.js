import React from 'react';
import '../Components/pages.css';
import Navbar from '../Components/Navbar.js';
import GradProducts from '../Components/GradProducts.js';

const Graduations =()=>{
    return(
        <>
      <Navbar/>
      <div>
      <a class="navbar-brand" href="/"> <h1 id="SFtitle"> Sample Flowers</h1></a>
        <h1 class="blahinfo">Graduations</h1>
        </div>
        <div class="blahinfo">
        <h2>
        <h2>You did it!</h2>
        
        </h2>
        <div>
          <div>
        
        </div>
        </div>
        </div>
        <GradProducts/>
    </>
    );
};

export default Graduations;