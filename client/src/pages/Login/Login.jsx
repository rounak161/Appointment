// import React from 'react'
// import './Login.css'
// import {Link} from 'react-router-dom'
 
// const Login = () => {
  
//   return (
//      <div className="container">
//         <h2>Sign In</h2>
//         <form className='form'>
//            <input type='email' name='email' placeholder='Email' required/> 
//            <input type='text' name='name' placeholder='Name' required/> 
//            <button type='submit'>Sign In</button>
//         </form>
//         <div className="register">
//          <p>Not registered ?  <Link to="/register" className="register-link">Register Now</Link></p>
//         </div>
//      </div>
//   )
// }

// export default Login


import React, { useState, useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Login = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(StoreContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({email, password }),
      });
      const data = await res.json();

      if (data.token) {
        setToken(data.token);
      }

      if (data.others) {
        const userData = {
          _id: data.others._id,
          username: data.others.username,
          email: data.others.email,
          isAdmin: data.others.isAdmin,
          createdAt: data.others.createdAt,
          updatedAt: data.others.updatedAt,
        };
      
        setUser(userData);
        // localStorage.setItem('user', JSON.stringify(userData));
        // console.log('User set:', userData);
        // console.log('Local storage user:', localStorage.getItem('user'));
      }

      navigate('/');
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="register">
         <p>Not registered ?  <Link to="/register" className="register-link">Register Now</Link></p>
       </div>
      {error && <div className="errorMessage">Registration failed. Please try again.</div>}
    </div>
  );
};

export default Login;
