
import React from 'react';
import Navbar from '../Components/Navbar.js';

const ContactUs =()=>{
    return(
<>
<Navbar/>
<div>
    <div class="background">
    <a class="navbar-brand" href="/"> <h1 id="SFtitle"> Sample Flowers</h1></a>
      </div>
      <h1 class ="contacttitle">Contact Us</h1>
      <div>
      <div id="contact_info">
        <h2>Address: 1111 Main st. Rosemont,CA 90023</h2> 
        <h2> Phone: (888)888-8888</h2>
        <h2> Email: rosemail@mail.com</h2>
      </div>
      <div class="colorful">
      <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-pink-flowering-plants-royalty-free-image-1709587708.jpg?crop=1.00xw:0.834xh;0,0.106xh&resize=980:*" alt="colorful"></img>
      </div>
      </div>
      </div>
</>
)};

export default ContactUs;