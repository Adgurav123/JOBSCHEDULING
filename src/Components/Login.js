import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Login.css';
import RouteLink from './RoutLink';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error);
    }
  };

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
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Login;
