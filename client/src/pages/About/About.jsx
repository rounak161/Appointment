import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className='about-container'>
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={assets.d3} alt="Health-APP" />
        </div>
        <div className="about-description">
          <p>
            "Welcome to Health-APP, where your well-being is our top priority. Easily book appointments with top doctors at your convenience. Our platform ensures seamless scheduling and timely notifications, connecting you with expert care effortlessly. Trust Health-APP for a healthier, happier you."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
