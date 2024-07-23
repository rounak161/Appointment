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


// import React, { useState, useContext } from 'react';
// import './Register.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/storeContext';

// const Register = () => {
//   const navigate = useNavigate();
//   const { setToken, setUser } = useContext(StoreContext);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/auth/register', {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         method: 'POST',
//         body: JSON.stringify({ username, email, password }),
//       });
//       const data = await res.json();

//       if (data.token) {
//         setToken(data.token);
//       }

//       if (data.others) {
//         setUser({
//           username: data.others.username,
//           email: data.others.email,
//           isAdmin: data.others.isAdmin,
//           createdAt: data.others.createdAt,
//           updatedAt: data.others.updatedAt
//         });
//       }

//       navigate('/login');
//     } catch (error) {
//       setError(true);
//       setTimeout(() => {
//         setError(false);
//       }, 2500);
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Register</h2>
//       <form className="form" onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Name"
//           required
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//       <div className="register">
//           <p>Already registered ?  <Link to="/login" className="register-link">login</Link></p>
//         </div>

//       {error && <div className="errorMessage">Registration failed. Please try again.</div>}
//     </div>
//   );
// };

// export default Register;


import React, { useState, useContext } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Register = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/auth/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();

      console.log('Response data:', data);

      if (data.token) {
        setToken(data.token);
        console.log('Token set:', data.token);
      }

      if (data.others) {
        const userData = {
          _id: data.others._id,
          username: data.others.username,
          email: data.others.email,
          isAdmin: data.others.isAdmin,
          createdAt: data.others.createdAt,
          updatedAt: data.others.updatedAt
        };
      
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('User set:', data.others);
      }
      console.log('Local storage user:', localStorage.getItem('user'));


      navigate('/login');
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
      <h2>Register</h2>
      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
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
          <p>Already registered? <Link to="/login" className="register-link">Login</Link></p>
        </div>

      {error && <div className="errorMessage">Registration failed. Please try again.</div>}
    </div>
  );
};

export default Register;
