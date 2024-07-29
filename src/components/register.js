import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import {useNavigate} from 'react-router-dom';
import Login from './Login';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {

      await axios.post('http://localhost:3000/api/auth/register', {
        username,
        email,
        password
      });
      alert('Registration successful');
      setUsername('');
      setEmail('');
      setPassword('');
      console.log("Redirecting to the Login Page");
      navigate('/login');
      console.log("Redirction Successfull");
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className='Centered-division'>
    <div className='Register-division'>
      <h2>Todo List Registration</h2>
      <input className='register-input'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input className='register-input'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input className='register-input'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className='register-button' onClick={handleRegister}>Register</button>
      <h2>Already a User</h2>
    <button className='register-button' onClick={()=> navigate('/login')}>Login</button>


    
    </div>
    
    </div>
  );
};

export default Register;
