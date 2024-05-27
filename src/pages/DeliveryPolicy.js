import React from 'react';
import Navbar from '../Components/Navbar.js';

const DeliveryPolicy =()=>{
    return( 
        <>
    <Navbar/>
    <a class="navbar-brand" href="/"> <h1 id="SFtitle"> Sample Flowers</h1></a>
        <h1 id="DP">Delivery Policy</h1> 
        <div>
        <h2 id="DP">We will deliver under a 20 mile radius from our location.</h2>
        </div>
        <img src= "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxHVxhQ5JGCLmYcEz-iDB8sIWLRimj_jTkp5tZrmH4Vq4KukXLTeCOaTUdrX7SalUm7D9HsTiYJ70JSkB6-7Ad_ul9LXOD4jVmOe0N63uTYcf28vdZ3kslZbthf-li84PxXVR_gQ&usqp=CAc" id="heart"alt="heartshaped flowers" ></img>
</>
    );
};

export default DeliveryPolicy;