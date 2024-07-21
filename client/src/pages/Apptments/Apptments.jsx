import React, { useEffect, useState } from 'react';
import './Apptments.css';

const Apptments = () => {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?._id;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`http://localhost:5000/appointment/get/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const appointments = await response.json();
          setData(appointments);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch appointments:', errorData.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Error in fetching appointments:', error);
      }
    };

    if (userId) {
      fetchAppointments();
    }
  }, [userId]);

  return (
    <div className="apt-container">
      <h2>Your Appointments</h2>
      <div className="apt-wrapper">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="appointment-item">
              <p><span>Username</span>: {item.patientId.username}</p>
              <p> <span>Doctor</span>: {item.doctorId.name}</p>
              <p> <span>Date</span>: {item.date}</p>
              <p> <span>Time</span>: {item.time}</p>
              <p><span>Status</span>: {item.status}</p>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Apptments;
