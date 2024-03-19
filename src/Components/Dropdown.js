// Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/DeliveryPolicy">Delivery Policy</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
