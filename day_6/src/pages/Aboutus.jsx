import React from 'react';
import './Aboutus.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



function Aboutus() {
  return (
    <div className='aboutusimage'>
    <div className="custom-aboutus-container">
    <div className="top-text">
      </div>  
      <h1>About Us</h1>
      <div className="p1">
      <p>
      Welcome to Aqua Zone, where families, friends, and thrill-seekers come together to create unforgettable memories!
      </p>
      </div>
      <div className="p2">
      <h3>Our Story:</h3>
      <p>
      Here at Aqua Zone, we're passionate about creating immersive experiences that spark joy, laughter, and a sense of wonder. Founded in [Year], our vision was to build a place where people of all ages could escape the ordinary and step into a world of pure fun. Since then, we've grown into a beloved destination, constantly evolving to offer exhilarating rides, relaxing escapes, and exceptional guest service.      </p></div>
      <div className="p3">
      <h3>Our Mission:</h3>
      <p>
      We're dedicated to providing a safe, clean, and enjoyable environment for everyone. We strive to:

Deliver thrilling adventures and captivating entertainment.
Offer a variety of experiences for all ages and preferences.
Foster a spirit of community and connection through shared experiences.
Promote environmental responsibility and sustainability practices.</p>      </div>
      <div className="p4">
      <h3>Our Team:</h3>
      <p>
      Aqua Zone is powered by a team of passionate individuals who believe in the magic of theme parks. From our dedicated ride operators and friendly food service staff to our creative designers and enthusiastic entertainers, each member plays a vital role in making your visit unforgettable.      </p>
      <p>
      We understand the importance of protecting the environment for future generations. That's why we're committed to sustainable practices throughout our operations. We're actively working on:

Water conservation: Employing water-efficient technologies and landscaping methods.
Energy efficiency: Utilizing renewable energy sources and minimizing our carbon footprint.
Waste reduction: Implementing recycling and composting programs.
Environmental education: Raising awareness about sustainability through interactive exhibits and guest initiatives.</p>
      <p> At Aqua Zone, we believe in the power of imagination and the joy of shared experiences. We invite you to explore our thrilling rides, relax in our refreshing oases, and create memories that will last a lifetime.</p>
      <p>

Join us on this incredible journey!</p>
      </div>
    </div>
    <div><Navbar/></div>
    </div>
  );
}

export default Aboutus;