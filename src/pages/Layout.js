

// Navigation component
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Home from "./Home";
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import DeliveryPolicy from './DeliveryPolicy';

function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">{Home}</Link>
        </li>
        <li>
          <Link to="/AboutUs">{AboutUs}</Link>
        </li>
        <li>
          <Link to="/ContactUS">{ContactUs}</Link>
        </li>
        <li>
          <Link to="/DeliveryPolicy">{DeliveryPolicy}</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
  </>
  );
}



export default Layout;