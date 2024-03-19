// src/components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary  d-inline flexbox ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Sample Flowers </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink to="/" exact activeClassName="active">
            <a class="nav-link active" aria-current="page" href="/Home">Home</a></NavLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Info
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/ContactUs">ContactUs</a> </li>
              <li><a class="dropdown-item" href="/AboutUs">AboutUs</a></li>
              <li><a class="dropdown-item" href="/DeliveryPolicy">DeliveryPolicy</a></li>
              
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Events
            </a>
            <NavLink to="/" exact activeClassName="active"> </NavLink>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Birthdays">Birthday</a></li>
              <li><a class="dropdown-item" href="/Weddings">Weddings</a></li>
              <li><a class="dropdown-item" href="/Graduations">Graduations</a></li>
              <li><a class="dropdown-item" href="/Quinceaneras">Quinceaneras</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#"> Custom Request </a></li>
            </ul>
          </li>
        </ul>
        <button type="button" class="btn btn-light">Cart<span class="material-symbols-outlined">
        shopping_cart
        </span></button>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
