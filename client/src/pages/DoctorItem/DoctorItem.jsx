// DoctorItem.jsx

import React from 'react';
import './DoctorItem.css'; // Assuming you have some styles for this component

const DoctorItem = ({ id, name, specialization, experience, fees, phone, image }) => {
  return (
    <div className="doctor-item" key={id}>
      <div className="doctor-image-container">
        <img src={image} alt={name} className="doctor-image" />
      </div>
      
      <div className="doctor-details">
        <h3>{name}</h3>
         <div className="details">
            <p><span>Specialization</span>: {specialization}</p>
            <p> <span>Experience</span>: {experience}</p>
            <p> <span>Fees</span>: {fees}</p>
            <p> <span>Phone</span>: {phone}</p>
         </div>
      </div>
      <div className="flex">
         <button> Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorItem;
