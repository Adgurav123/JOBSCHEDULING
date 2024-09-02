
import React from "react";
import RouteLink from "./RoutLink";

function Home()
{
    return(
        <div className="home-container">
        <h1>Welcome to the Job Interview Scheduling System</h1>
        <p>Manage your interviews, candidates, and schedules efficiently.</p>
      <RouteLink></RouteLink>
      </div>
    );
}

export default Home;