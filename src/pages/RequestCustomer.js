import React from 'react';
import '../Components/pages.css';
import Navbar from '../Components/Navbar.js';

const RequestCustomer =()=>{
    return(
        <>
      <Navbar/>
      <h1 id="SFtitle"> Sample Flowers</h1>
        <h1 class="blahinfo">Customer Request</h1>
        <div>
        <div class="blahinfo"><h2></h2>
        <form>
  <label>
    Name:
    <input type="text" name="name" />
    Last Name:
    <input type="text" name="name"/>
    Email:
    <input type="email"/>
  <div></div>
     Customer Request:

   <textarea name= "postContent"/>
 </label></form>
 </div> 
 <div>
<input type="submit" value="Submit" class="submit"/>
   </div>
  
  </div>

      </>
);
};
export default RequestCustomer;