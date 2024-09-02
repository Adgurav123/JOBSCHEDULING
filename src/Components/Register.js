import React, { useState } from 'react';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    resume: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (formData.resume) newErrors.resume = "Resume is required";
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="username">Username:</label></td>
              <td><input type="text" id="username" name="username" value={formData.username} onChange={handleChange} /></td>
              <td>{errors.username && <span className="error">{errors.username}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email:</label></td>
              <td><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /></td>
              <td>{errors.email && <span className="error">{errors.email}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="password">Password:</label></td>
              <td><input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /></td>
              <td>{errors.password && <span className="error">{errors.password}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="confirmPassword">Confirm Password:</label></td>
              <td><input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} /></td>
              <td>{errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="Resume">Resume:</label></td>
              <td><input type='file' id='resume' name='resume' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td colSpan="3">
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Register;
