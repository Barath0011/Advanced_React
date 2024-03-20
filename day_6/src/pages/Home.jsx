import React from 'react'
import Navbar from './Navbar'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <div className="home-container">
        <Navbar/>
      <div className="landing">
        <div className="inside-box">
          <section className="landing1">
            <div className="overlay">
              <h1><b>Explore the World of Joy</b></h1>
              <p>Calling all adventurers! Aqua Zone is the ultimate destination for families seeking a day filled with laughter, excitement, and endless fun. Explore captivating worlds, embark on thrilling rides, and create lasting memories together. With attractions designed for all ages, your little ones will have a blast splashing in interactive water features, meeting beloved characters, and soaring through the sky on kid-friendly coasters. It's a day of adventure waiting to be had!
</p>
              <div className="cta-whole">
              <Link to="/service" className="cta-button">Book Now</Link>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
  );
}

export default Home;