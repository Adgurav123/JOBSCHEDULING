import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Link } from 'react-router-dom';

//import './RouteLink.css';  // Optional: for styling links

function RouteLink ()  
{
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/HRRegistration">HR Registration</NavLink></li>
        <li><NavLink to="/HRLogin">HR Login</NavLink></li>
        <li><NavLink to="/Register">Candidate Register</NavLink></li>
        <li><NavLink to="/Login">Candidate Login</NavLink></li>
        <li><NavLink to="/Scheduling">InterviewScheduling</NavLink></li>
        <li><NavLink to="/Candidates">CandidateManagement</NavLink></li>
      </ul>
    </nav>
  );
};

export default RouteLink;