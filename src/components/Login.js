// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //Handle Login Logic
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });
      
      //Getting token from response.
      localStorage.setItem('token',response.data.token);

      alert('Login successful');
      console.log("Redirecting to the Todos Page");
      navigate('/todos'); // Redirect to todos page
      console.log("Redirected to the Todos Succesfully.");
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="Centered-division">
      <div className='Register-division'>
      <h2>Login</h2>
      <input
        className='register-input'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className='register-input'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className='register-button' onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;
