import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = () => {
  const { token } = useContext(StoreContext); // Correctly use the StoreContext

  return (
    <div className="navbar">
      <Link to='/' className='title'>Health-APP</Link>
      <div className="navbarmenu">
        <ul className='navbar-menu'>
          <li><Link to='/'>Home</Link></li>
          <li><a href='#doctors'>Doctors</a></li>
          {token === 'true' && (
            <>
              <li>Appointments</li>
              <li>Notification</li>
              <li>Apply for Doctors</li>
              <li><a href='#contact-us'>Contact Us</a></li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-right">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Navbar;
