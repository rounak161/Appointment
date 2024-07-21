// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/storeContext';

// const Navbar = () => {
//   const { token } = useContext(StoreContext);
//   const[menu,setMenu]=useState('home');
//   const navigate=useNavigate();
//   return (
//     <div className="navbar">
//       <Link to="/" className="title">Health-APP</Link>
//       <div className="navbarmenu">
//         <ul className="navbar-menu">
//           <li className={menu === 'home' ? 'active' : ''}><Link to="/" onClick={() => setMenu('home')}>Home</Link></li>
//           <li 
//                 onClick={() => {
//                   navigate('./doctor');
//                   setMenu('doctors');
//                 }} 
//             className={menu === 'doctors' ? 'active' : ''} 
//           >
//             <a href="#doctors">Doctors</a>
//           </li>

//           {token  && (
//             <>
//               <li onClick={() => setMenu('appointments')} className={menu === 'appointments' ? 'active' : ''}>Appointments</li>
//               <li onClick={() => setMenu('notification')} className={menu === 'notification' ? 'active' : ''}>Notification</li>
//               <li onClick={() => setMenu('apply')} className={menu === 'apply' ? 'active' : ''}>Apply for Doctors</li>
//               <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>
//                     <a href="#contact-us"> Contact Us</a>
//              </li>


//             </>
//           )}
//         </ul>
//       </div>
//       <div className="navbar-right">
//         <button onClick={() => { navigate('./login');  }} >Login</button>
//         <button onClick={() => { navigate('./register');  }} >Register</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




// import React, { useContext, useState, useEffect } from 'react';
// import './Navbar.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/storeContext';

// const Navbar = () => {
//   const { state: { token, user } } = useContext(StoreContext);
//   const [menu, setMenu] = useState('home');
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('User:', user);
//   }, [user]);

//   return (
//     <div className="navbar">
//       <Link to="/" className="title">Health-APP</Link>
//       <div className="navbarmenu">
//         <ul className="navbar-menu">
//           <li className={menu === 'home' ? 'active' : ''}>
//             <Link to="/" onClick={() => setMenu('home')}>Home</Link>
//           </li>
//           <li
//             onClick={() => {
//               navigate('/doctor');
//               setMenu('doctors');
//             }}
//             className={menu === 'doctors' ? 'active' : ''}
//           >
//             <span>Doctors</span>
//           </li>
//           {token && (
//             <>
//               <li
//                 onClick={() => {
//                   navigate('/appointments');
//                   setMenu('appointments');
//                 }}
//                 className={menu === 'appointments' ? 'active' : ''}
//               >
//                 <span>Appointments</span>
//               </li>
//               <li
//                 onClick={() => {
//                   navigate('/notification');
//                   setMenu('notification');
//                 }}
//                 className={menu === 'notification' ? 'active' : ''}
//               >
//                 <span>Notification</span>
//               </li>
//               <li
//                 onClick={() => {
//                   navigate('/apply');
//                   setMenu('apply');
//                 }}
//                 className={menu === 'apply' ? 'active' : ''}
//               >
//                 <span>Apply for Doctors</span>
//               </li>
//               <li
//                 onClick={() => {
//                   navigate('/contact');
//                   setMenu('contact');
//                 }}
//                 className={menu === 'contact' ? 'active' : ''}
//               >
//                 <span>Contact Us</span>
//               </li>
//               <li className="username">
//                 <span>{user?.username}</span>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//       <div className="navbar-right">
//         {!token && (
//           <>
//             <button onClick={() => { navigate('/login'); }}>Login</button>
//             <button onClick={() => { navigate('/register'); }}>Register</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useContext, useState, useEffect } from 'react';
// import './Navbar.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/storeContext';

// const Navbar = () => {
//   const { state: { token, user }, logout } = useContext(StoreContext);
//   const [menu, setMenu] = useState('home');
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('User:', user);
//   }, [user]);

//   return (
//     <div className="navbar">
//       <Link to="/" className="title">Health-APP</Link>
//       <div className="navbarmenu">
//         <ul className="navbar-menu">
//           <li className={menu === 'home' ? 'active' : ''}>
//             <Link to="/" onClick={() => setMenu('home')}>Home</Link>
//           </li>
//           <li
//             onClick={() => {
//               navigate('/doctor');
//               setMenu('doctors');
//             }}
//             className={menu === 'doctors' ? 'active' : ''}
//           >
//             <span>Doctors</span>
//           </li>
//           {token && (
//             <>
//               <li
//                 onClick={() => {
//                   navigate('/appointments');
//                   setMenu('appointments');
//                 }}
//                 className={menu === 'appointments' ? 'active' : ''}
//               >
//                 <span>Appointments</span>
//               </li>
//               <li
//                 onClick={() => {
//                   navigate('/notification');
//                   setMenu('notification');
//                 }}
//                 className={menu === 'notification' ? 'active' : ''}
//               >
//                 <span>Notification</span>
//               </li>
//               <li
//                 onClick={() => {
//                   navigate('/apply');
//                   setMenu('apply');
//                 }}
//                 className={menu === 'apply' ? 'active' : ''}
//               >
//                 <span>Apply for Doctors</span>
//               </li>
//               <li
//                 onClick={() => {
//                   navigate('/contact');
//                   setMenu('contact');
//                 }}
//                 className={menu === 'contact' ? 'active' : ''}
//               >
//                 <span>Contact Us</span>
//               </li>
//               <li className="username">
//                 <span>{user?.username}</span>
//               </li>
//               <li>
//                 <button onClick={() => {
//                   logout();
//                   navigate('/login');
//                 }}>Logout</button>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//       <div className="navbar-right">
//         {!token && (
//           <>
//             <button onClick={() => { navigate('/login'); }}>Login</button>
//             <button onClick={() => { navigate('/register'); }}>Register</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = () => {
  const { state: { token, user }, logout } = useContext(StoreContext);
  const [menu, setMenu] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User:', user);
  }, [user]);

  return (
    <div className="navbar">
      <Link to="/" className="title">Health-APP</Link>
      <div className="navbarmenu">
        <ul className="navbar-menu">
          <li className={menu === 'home' ? 'active' : ''}>
            <Link to="/" onClick={() => setMenu('home')}>Home</Link>
          </li>
          <li
            onClick={() => {
              navigate('/doctor');
              setMenu('doctors');
            }}
            className={menu === 'doctors' ? 'active' : ''}
          >
            <span>Doctors</span>
          </li>
          {token && (
            <>
              <li
                onClick={() => {
                  navigate('/appointments');
                  setMenu('appointments');
                }}
                className={menu === 'appointments' ? 'active' : ''}
              >
                <span>Appointments</span>
              </li>
              <li
                onClick={() => {
                  navigate('/notification');
                  setMenu('notification');
                }}
                className={menu === 'notification' ? 'active' : ''}
              >
                <span>Notification</span>
              </li>
              <li
                onClick={() => {
                  navigate('/apply');
                  setMenu('apply');
                }}
                className={menu === 'apply' ? 'active' : ''}
              >
                <span>Apply for Doctors</span>
              </li>
              <li
                onClick={() => {
                  navigate('/contact');
                  setMenu('contact');
                }}
                className={menu === 'contact' ? 'active' : ''}
              >
                <span>Contact Us</span>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-right">
        {!token && (
          <>
            <button onClick={() => { navigate('/login'); }}>Login</button>
            <button onClick={() => { navigate('/register'); }}>Register</button>
          </>
        )}
        {token && (
          <div className="user-info">
            {user?.isAdmin && (
              <Link to="/admin" className="username">Admin</Link>
            )}
            <span className="username">{user?.username}</span>
            <button className="logout-button" onClick={() => {
              logout();
              navigate('/login');
            }}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
