import React from 'react'
import Navbar from './Navbar'
import './Service.css'
import img1 from '../assets/images/t1.jpg'
import img2 from '../assets/images/t2.jpg'
import img3 from '../assets/images/t3.jpg'
import img4 from '../assets/images/t4.jpg'
import img5 from '../assets/images/t5.jpg'
import img6 from '../assets/images/t6.jpg'
import img7 from '../assets/images/4.jpg'
import { useNavigate } from 'react-router-dom'
function Service() {
    const history = useNavigate();

  const nav = (route) => {
    history(route);
  };

  return (
    <div className='bg'>

    <div className="home-body">
            

               <div className="home-grid">
                
               <div className="home-grid-item">
                    <div className="home-card">
                        <div className="home-card-content">
                        <img src={img1}/>
                            <h1 className="home-card-header">Kraken's Fury</h1>
                            <p className="home-card-text">
                            A high-speed, twisting water coaster that plunges riders through a dark tunnel and out into the open air.

                            </p>
                            <button className="home-card-button" onClick={()=>nav('/cart')}>ADD <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
                

                <div className='r'>

                <div className="home-grid-item">
                    <div className="home-card">
                        <div className="home-card-content">
                        <img src={img2}/>
                            <h1 className="home-card-header">Sharknado Twister</h1>
                            <p className="home-card-text">
                            A giant funnel that spins riders around in a thrilling vortex.
                            </p>
                            <button className="home-card-button" onClick={()=>nav('/cart')}>ADD <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
                </div>
                <div className='e'>

                <div className="home-grid-item">
                    <div className="home-card">
                        <div className="home-card-content">
                        <img src={img3}/>
                            <h1 className="home-card-header">Lazy River Rapids</h1>
                            <p className="home-card-text">
                            A fast-paced, winding river with rapids and waterfalls.

                            </p>
                            <button className="home-card-button" onClick={()=>nav('/cart')}>ADD <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="home-grid-item">
                    <div className="home-card">
                        <div className="home-card-content">
                        <img src={img4}/>
                            <h1 className="home-card-header">Treasure Island</h1>
                            <p className="home-card-text">
                            A pirate-themed play area with water cannons, slides, and climbing structures.

                            </p>
                            <button className="home-card-button" onClick={()=>nav('/cart')}>ADD <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
                <div className="home-grid-item">
                    <div className="home-card">
                        <div className="home-card-content">
                        <img src={img5}/>
                            <h1 className="home-card-header">Surf's Up!</h1>
                            <p className="home-card-text">
                            A flowrider for catching waves and perfecting surfing skills.


                            </p>
                            <button className="home-card-button" onClick={()=>nav('/cart')}>ADD <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
                <div className="home-grid-item">
                    <div className="home-card">
                        <div className="home-card-content">
                        <img src={img6}/>
                            <h1 className="home-card-header">Snorkel Reef</h1>
                            <p className="home-card-text">
                            An underwater adventure pool with colorful fish and coral reefs


                            </p>
                            <button className="home-card-button" onClick={()=>nav('/cart')}>ADD <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
                <div className="home-grid-item">
                    <div className="home-card">
                        <div className="home-card-content">
                        <img src={img7}/>
                            <h1 className="home-card-header">Cabana rentals</h1>
                            <p className="home-card-text">
                            Private areas with lounge chairs, shade, and food and beverage service


                            </p>
                            <button className="home-card-button" onClick={()=>nav('/cart')}>ADD <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
               </div>



               <div><Navbar/></div>
            </div>
    </div>
  )
}

export default Service