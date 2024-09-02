import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CandidateManagement() {
  const [candidates, setCandidates] = useState([]);

  // Fetch candidates from the backend when the component 
  useEffect(() => {
    axios.get('/api/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  // view profile
  const viewProfile = (id) => {
    // Redirect to the candidate's profile page
    window.location.href = `/candidates/${id}`;
  };

  // Handle delete candidate
  const deleteCandidate = (id) => {
    if (window.confirm('Are you sure you want to delete this candidate?')) {
      axios.delete(`/api/candidates/${id}`)
        .then(() => {
          // Remove the deleted candidate from the state
          setCandidates(candidates.filter(candidate => candidate.id !== id));
        })
        .catch(error => console.error('Error deleting candidate:', error));
    }
  };

  return (
    <div className="candidate-container">
      <h1>Candidate Management</h1>
      <p>List of candidates with options to view profiles, interview history, and status.</p>
      
      {candidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.status}</td>
                <td>
                  <button onClick={() => viewProfile(candidate.id)}>View Profile</button>
                  <button onClick={() => deleteCandidate(candidate.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates available.</p>
      )}
    </div>
  );
}

export default CandidateManagement;

