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
<img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSY60hctfg52ekDupG31khPv6KhRzCoRT_M8ETWIsMR_tvTAD8T1Pv9NoIQE3DmmaWltXTy3dSrzjnCGD_Vxvlt-vx_E0Uv7JhUfl5-NfAMSDHE95XCw_iuoDu1mw0mxHxORyuG9lvsNEo&usqp=CAc"/>
      </>
);
};
export default RequestCustomer;