// src/Components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';  // Use Navigate for redirection
import InterviewScheduling from './InterviewScheduling';  // Import the InterviewScheduling component
import '../Styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);  // Update state to indicate successful login
    } catch (error) {
      setLoginError('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    }
  };

  if (loggedIn) {
    // Render the InterviewScheduling component when logged in
    return <InterviewScheduling />;
  }

  return (
    <div className="container">
      <header>
        <h1>Login</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label>Password:</label></td>
              <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Login</button>
              </td>
            </tr>
            {loginError && <tr><td colSpan="2"><span className="error">{loginError}</span></td></tr>}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Login;
