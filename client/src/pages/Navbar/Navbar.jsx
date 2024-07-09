import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = () => {
  const { token } = useContext(StoreContext);
  const[menu,setMenu]=useState('home');
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <Link to="/" className="title">Health-APP</Link>
      <div className="navbarmenu">
        <ul className="navbar-menu">
          <li className={menu === 'home' ? 'active' : ''}><Link to="/" onClick={() => setMenu('home')}>Home</Link></li>
          <li 
                onClick={() => {
                  navigate('./doctor');
                  setMenu('doctors');
                }} 
            className={menu === 'doctors' ? 'active' : ''} 
          >
            <a href="#doctors">Doctors</a>
          </li>

          {token === 'true' && (
            <>
              <li onClick={() => setMenu('appointments')} className={menu === 'appointments' ? 'active' : ''}>Appointments</li>
              <li onClick={() => setMenu('notification')} className={menu === 'notification' ? 'active' : ''}>Notification</li>
              <li onClick={() => setMenu('apply')} className={menu === 'apply' ? 'active' : ''}>Apply for Doctors</li>
              <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>
                    <a href="#contact-us"> Contact Us</a>
             </li>


            </>
          )}
        </ul>
      </div>
      <div className="navbar-right">
        <button onClick={() => { navigate('./login');  }} >Login</button>
        <button onClick={() => { navigate('./register');  }} >Register</button>
      </div>
    </div>
  );
}

export default Navbar;
