import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Aqua Zone</h1>
      <ul className="navbar-menu">
        <li className="menu-item"><a href="/home">Home</a></li>
        <li className="menu-item"><a href="/aboutus">About Us</a></li>
        <li className="menu-item"><a href="/service">Services</a></li>
        <li className="menu-item"><a href="/cart">Cart</a></li>
        <li className="menu-item"><a href="/contactus">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
