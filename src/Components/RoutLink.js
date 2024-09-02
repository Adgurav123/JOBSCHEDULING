import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Link } from 'react-router-dom';

//import './RouteLink.css';  // Optional: for styling links

function RouteLink ()  
{
  return (
    <nav>
      <ul>
        <li><NavLink to="/HRLogin">HR Login</NavLink></li>
        <li><NavLink to="/Login">Candidate Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default RouteLink;