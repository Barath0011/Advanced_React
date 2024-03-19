import React from 'react'
import './Singup.css'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevents default form submission
      // Perform login logic here
      navigate("/home");
    };
  
    return (
      <div className='w'>
      <div className='back'>

        <div className="word">
          <h1>Sign Up</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input type="email" placeholder="Username" required />
          </div>
          <div className="input">
            <input type="Phone Number" placeholder="Phone Number" required />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input">
            <input type="password" placeholder="Confirm Password" required />
          </div>
  
          
          <div className="button">
            <button type="submit">Sign In</button>
          </div>
        </form>
  
       
      </div>
      </div>
    )
  }