//import React from 'react';
// import './InterviewScheduling.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

function InterviewScheduling() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    // Fetch available slots from the backend based on the selected date
    axios.get(`/api/available-slots?date=${selectedDate.toISOString()}`)
      .then(response => setAvailableSlots(response.data))
      .catch(error => console.error('Error fetching slots:', error));
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSlotSelect = (slot) => {
    console.log('Selected Slot:', slot);
    // Handle slot selection
  };

  const handleSubmit = () => {
    // Submit the selected interview slot to the backend
    console.log('Interview Scheduled for:', selectedDate);
  };
  return (
    <div className="scheduling-container">
      <h1>Interview Scheduling</h1>
      <p>Calendar view for selecting and booking available interview slots.</p>
      {/* Calendar integration will go here */}
      <Calendar onChange={handleDateChange} value={selectedDate}/>

      <div className="slots-container" style={{ marginTop: '20px' }}>
        {availableSlots.length > 0 ? (availableSlots.map((slot, index) => (
            <button key={index} onClick={() => handleSlotSelect(slot)}>
              {slot.time}
            </button>
          ))
        ) : (
          <p>No available slots for the selected date.</p>
        )}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: '20px' }}>Schedule Interview</button>
    </div>
  );
}

export default InterviewScheduling;
