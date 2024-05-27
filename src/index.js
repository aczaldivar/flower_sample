import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Birthdays from './pages/Birthdays.js';
import Weddings from './pages/Weddings.js';
import Graduations from './pages/Graduations.js';
import Quincianeras from './pages/Quinceaneras.js';
import ContactUs from './pages/ContactUs.js';
import RequestCustomer from './pages/RequestCustomer.js';
import DeliveryPolicy from './pages/DeliveryPolicy.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <BrowserRouter>

  
    <Routes>
      <Route path= "/" Component={Home}/>
      <Route path="/AboutUs" Component={AboutUs}/>
      <Route path="/ContactUs" Component={ContactUs}/>
      <Route path="/DeliveryPolicy" Component={DeliveryPolicy} />
      <Route path="/Birthdays" Component={Birthdays}/>
      <Route path="/Weddings" Component={Weddings}/>
      <Route path="/Graduations" Component={Graduations}/>
      <Route path="/Quinceaneras" Component={Quincianeras}/>
      <Route path="/RequestCustomer" Component={RequestCustomer}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
