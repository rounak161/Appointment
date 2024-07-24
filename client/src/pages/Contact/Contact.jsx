// import React from 'react';
// import './Contact.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us-container">
//         <h2>Contact Us</h2>
//       <div className="contact-us">
//         <input type="text" placeholder="Enter your name" />
//         <input type="email" placeholder="Enter your email" />
//         <textarea placeholder="Enter your message" id="message"></textarea>
//         <button className='send'>SEND</button>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;





import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');

    try {
      const response = await fetch('http://localhost:5000/contact/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setFormDetails({
          name: '',
          email: '',
          message: '',
        });
        setStatusMessage('Contact message sent successfully!');
      } else {
        const errorData = await response.json();
        setStatusMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setStatusMessage('Error sending message.');
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form className="contact-us" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formDetails.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formDetails.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          id="message"
          value={formDetails.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
        <button type="submit" className='send'>SEND</button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
