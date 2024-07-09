import React, { useContext } from 'react';
import './Doctor.css';
import { StoreContext } from "../../context/storeContext";
import DoctorItem from '../DoctorItem/DoctorItem';

const Doctor = () => {
  const { doctors } = useContext(StoreContext);

  return (
    <div className="doctor-display">
      <h2>Our Doctors</h2>
      <div className="doctor-display-list">
        {doctors.map((item, index) => (
          <DoctorItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            specialization={item.specialization} 
            experience={item.experience} 
            fees={item.fees} 
            phone={item.phone} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Doctor;
