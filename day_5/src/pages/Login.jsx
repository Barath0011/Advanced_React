import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission
    // Perform login logic here
    navigate("/home");
  };

  return (
    <div className='background'>
      <div className='wrapper'>
        <div className="word">
          <h1>Login</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input type="email" placeholder="Username" required />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="remember">
            <div className="word">
              <label><input type="checkbox" />Remember me </label>
            </div>
          </div>
          <div className="button">
            <button type="submit">Login</button>
          </div>
        </form>

        <div className="register">
          <p>Don't have an account? <a href="/signup">Register</a></p>
        </div>
      </div>
    </div>
  );
}
