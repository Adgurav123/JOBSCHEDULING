import React, { useState } from 'react';
import CandidateManagement from './CandidateManagement'; 

function HRLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Flag 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length === 0) {
      console.log('Login attempt:', formData);
      // Simulate successful login by setting isAuthenticated to true
      setIsAuthenticated(true);
    } else {
      setErrors(newErrors);
    }
  };

  // Conditional rendering: If authenticated, show Candidate Management, else show login form
  if (isAuthenticated) {
    return <CandidateManagement />;
  }

  return (
    <div className="hr-login-container">
      <h1>HR Login</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="username">Username:</label></td>
              <td><input type="text" id="username" name="username" value={formData.username} onChange={handleChange} /></td>
              <td>{errors.username && <span className="error">{errors.username}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="password">Password:</label></td>
              <td><input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /></td>
              <td>{errors.password && <span className="error">{errors.password}</span>}</td>
            </tr>
            <tr>
              <td colSpan="3">
                <button type="submit">Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default HRLogin;
