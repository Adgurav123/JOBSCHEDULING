import React, { useState } from 'react';

function HRRegistration() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyId: '',
    address: '',
    role: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const roles = ['Software Engineer', 'Product Manager', 'Designer', 'Data Scientist'];

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
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.companyId) newErrors.companyId = 'Company ID is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.role) newErrors.role = 'Please select a role';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="hr-registration-container">
      <h1>HR Registration</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="companyName">Company Name:</label></td>
              <td><input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} /></td>
              <td>{errors.companyName && <span className="error">{errors.companyName}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="companyId">Company ID:</label></td>
              <td><input type="text" id="companyId" name="companyId" value={formData.companyId} onChange={handleChange} /></td>
              <td>{errors.companyId && <span className="error">{errors.companyId}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="address">Address:</label></td>
              <td><input type="text" id="address" name="address" value={formData.address} onChange={handleChange} /></td>
              <td>{errors.address && <span className="error">{errors.address}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="role">For Which Role You Want Hire:</label></td>
              <td>
                <select id="role" name="role" value={formData.role} onChange={handleChange}>
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
              <td>{errors.role && <span className="error">{errors.role}</span>}</td>
            </tr>
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

export default HRRegistration;
