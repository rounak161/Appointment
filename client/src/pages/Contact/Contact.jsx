import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
        <h2>Contact Us</h2>
      <div className="contact-us">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message" id="message"></textarea>
        <button className='send'>SEND</button>
      </div>
    </div>
  );
};

export default ContactUs;
