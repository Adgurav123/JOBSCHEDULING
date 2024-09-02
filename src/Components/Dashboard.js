import React from 'react';
// import './Styles/Dashboard.css';
import RouteLink from './RoutLink';
function Dashboard() {
  return (
    <div className="Dashboard-container">
      <h1>Dashboard</h1>
      <p>Overview of scheduled interviews, pending interviews, and available time slots.</p>
      <RouteLink to="/scheduling" className="link-button">Schedule Interviews</RouteLink>
      <br/>
      <RouteLink to="/candidates" className="link-button">Manage Candidates</RouteLink>
    </div>
  );
}

export default Dashboard;