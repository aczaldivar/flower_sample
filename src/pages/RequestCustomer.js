import React from 'react';
import '../Components/pages.css';
import Navbar from '../Components/Navbar.js';


  
const RequestCustomer =()=>{
    return(
        <>
      <Navbar/>
      <a class="navbar-brand" href="/"> <h1 id="SFtitle"> Sample Flowers</h1></a>
        <h1 class="blahinfo">Customer Request Form</h1>
        <div>
        <div class="blahinfo"><h2></h2>
        <form>
  <label>
    
  <div></div>
  <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
  <div class="row mb-3">
 <div>
  
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Phone" aria-label="Phone"/>
  <div class="col-sm">
    <input type="email" class="form-control" id="colFormLabel" placeholder="Email"/>
  </div></div>
  </div>
  </div>
</div>

    
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Request: </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
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