import React from 'react'
import Navbar from './Navbar'
import './Home.css';

export default function Home() {
  return (
    <div className='photo'>
    <div><Navbar/></div>
    <div className='intro'>
    Calling all adventurers! Aqua Zone is the ultimate destination for families seeking a day filled with laughter, excitement, and endless fun. 
    Explore captivating worlds, embark on thrilling rides, and create lasting memories together. 
    With attractions designed for all ages, your little ones will have a blast splashing in interactive water features, meeting beloved characters, and soaring through the sky on kid-friendly coasters.
     It's a day of adventure waiting to be had!
    </div>
    <div className='h1'>
     <h1>Thrill Rides:</h1>
    </div>
    <div className='h2'>
    <h2>
    Kraken's Fury:
    </h2>
      <div className='word'>
      A high-speed, twisting water coaster that plunges riders through a dark tunnel and out into the open air.
      </div>
    <h2>
    Sharknado Twister:
    </h2>
      <div className='word'>
      A giant funnel that spins riders around in a thrilling vortex.
      </div>
    <h2>
    Lazy River Rapids:
    </h2>
      <div className='word'>
      A fast-paced, winding river with rapids and waterfalls.
       </div>
    

    </div>
    </div>
  )
}
