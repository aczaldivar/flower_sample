import React from 'react';
import '../Components/pages.css';
import Navbar from '../Components/Navbar.js';
import WedProducts from '../Components/WedProducts.js';

const Weddings =()=>{
    return(
        <>
      <Navbar/>
      <div>
        <h1 id="SFtitle"> Sample Flowers</h1>
        <h1 class="blahinfo">Weddings</h1>
        </div>
        <div class="blahinfo">
        <h2>
        <h2>Decorations for your beautiful wedding.</h2>
        <h2>We hope you like our designs.</h2>
        </h2>
        <div>
          <div>
         
        </div>
        </div>
        </div>
        <WedProducts/>
    </>
    );
};

export default Weddings;