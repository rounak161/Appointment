// import React from 'react'
// import './Register.css'
// import {Link} from 'react-router-dom'
// import axios from 'axios'
// const Register = () => {


//   return (
//     <div className="container">
//         <h2>Register</h2>
//         <form className='form'>
//            <input type='text' name='name' placeholder='Name' required/> 
//            <input type='email' name='email' placeholder='Email' required/> 
//            <input type='text' name='password' placeholder='Enter your password' required/> 
//            <button type='submit'>Sign In</button>
//         </form>
//         <div className="register">
//         <p>Already registered ?  <Link to="/login" className="register-link">login</Link></p>
//         </div>
//      </div>
//   )
// }

// export default Register




 
import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    isAdmin: false,
    isDoctor: false,
    age: '',
    gender: '',
    mobile: '',
    address: '',
    status: 'pending',
   // pic: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', formData);
      console.log('Registration successful:', response.data);
      // Optionally, redirect to login page or show success message
    } catch (error) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);
      // Handle error, show error message using toast or other notification method
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstname'
          placeholder='First Name'
          required
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastname'
          placeholder='Last Name'
          required
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type='text'
          name='age'
          placeholder='Age'
          required
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type='text'
          name='gender'
          placeholder='Gender'
          required
          value={formData.gender}
          onChange={handleChange}
        />
        <input
          type='text'
          name='mobile'
          placeholder='Mobile'
          required
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type='text'
          name='address'
          placeholder='Address'
          required
          value={formData.address}
          onChange={handleChange}
        />
        <button type='submit'>Sign Up</button>
      </form>
      <div className="register">
        <p>Already registered? <Link to="/login" className="register-link">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;


 
 