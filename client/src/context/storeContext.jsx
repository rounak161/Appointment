 

// import React, { createContext, useEffect, useState } from 'react';
 
//  import { doctor_list} from "../assets/assets";
 
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [token, setToken] = useState('false');
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     setDoctors(doctor_list);
//   }, []);

//   const contextValue = {
//     token,
//     setToken,
//     doctors,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

// src/context/StoreContext.jsx

// import React, { createContext, useEffect, useState } from 'react';
// import { doctor_list } from '../assets/assets';

// export const StoreContext = createContext(null);

// const initialState = {
//   user: null,
//   token: localStorage.getItem('token') || ''
// };

// const StoreContextProvider = ({ children }) => {
//   const [state, setState] = useState(initialState);
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     setDoctors(doctor_list);
//   }, []);

//   useEffect(() => {
//     if (state.token) {
//       localStorage.setItem('token', state.token);
//     }
//   }, [state.token]);

//   const setToken = (token) => {
//     setState((prevState) => ({ ...prevState, token }));
//   };

//   const setUser = (user) => {
//     setState((prevState) => ({ ...prevState, user }));
//   };

//   const contextValue = {
//     state,
//     setToken,
//     setUser,
//     doctors,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;



// import React, { createContext, useEffect, useState } from 'react';
// import { doctor_list } from '../assets/assets';

// export const StoreContext = createContext(null);

// const initialState = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   token: localStorage.getItem('token') || ''
// };

// const StoreContextProvider = ({ children }) => {
//   const [state, setState] = useState(initialState);
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     setDoctors(doctor_list);
//   }, []);

//   useEffect(() => {
//     if (state.token) {
//       localStorage.setItem('token', state.token);
//     } else {
//       localStorage.removeItem('token');
//     }
//   }, [state.token]);

//   const setToken = (token) => {
//     setState((prevState) => ({ ...prevState, token }));
//   };

//   const setUser = (user) => {
//     setState((prevState) => ({ ...prevState, user }));
//   };

//   const logout = () => {
//     setState({ user: null, token: '' });
//   };

//   const contextValue = {
//     state,
//     setToken,
//     setUser,
//     logout,
//     doctors,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;




// import React, { createContext, useEffect, useState } from 'react';
// import { doctor_list } from '../assets/assets';

// export const StoreContext = createContext(null);

// const initialState = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   token: localStorage.getItem('token') || ''
// };

// const StoreContextProvider = ({ children }) => {
//   const [state, setState] = useState(initialState);
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     setDoctors(doctor_list);
//   }, []);

//   useEffect(() => {
//     if (state.token) {
//       localStorage.setItem('token', state.token);
//     } else {
//       localStorage.removeItem('token');
//     }

//     if (state.user) {
//       localStorage.setItem('user', JSON.stringify(state.user));
//     } else {
//       localStorage.removeItem('user');
//     }
//   }, [state.token, state.user]);

//   const setToken = (token) => {
//     setState((prevState) => ({ ...prevState, token }));
//   };

//   const setUser = (user) => {
//     setState((prevState) => ({ ...prevState, user }));
//   };

//   const logout = () => {
//     setState({ user: null, token: '' });
//   };

//   const contextValue = {
//     state,
//     setToken,
//     setUser,
//     logout,
//     doctors,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
           



///working code below





// import React, { createContext, useEffect, useState } from 'react';
// import { doctor_list } from '../assets/assets';

// export const StoreContext = createContext(null);

// const initialState = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   token: localStorage.getItem('token') || ''
// };

// const StoreContextProvider = ({ children }) => {
//   const [state, setState] = useState(initialState);
//   const [doctors, setDoctors] = useState([]);

//   // useEffect(() => {
//   //   setDoctors(doctor_list);
//   // }, []);

//   useEffect(() => {
//     if (state.token) {
//       localStorage.setItem('token', state.token);
//     } else {
//       localStorage.removeItem('token');
//     }

//     if (state.user) {
//       localStorage.setItem('user', JSON.stringify(state.user));
//     } else {
//       localStorage.removeItem('user');
//     }
//   }, [state.token, state.user]);

//   const setToken = (token) => {
//     setState((prevState) => ({ ...prevState, token }));
//   };

//   const setUser = (user) => {
//     setState((prevState) => ({ ...prevState, user }));
//   };

//   const logout = () => {
//     setState({ user: null, token: '' });
//   };

//   // Function to update the doctors list
//   const updateDoctor = (updatedDoctor) => {
//     setDoctors(prevDoctors => {
//       const doctorIndex = prevDoctors.findIndex(doc => doc._id === updatedDoctor._id);
//       if (doctorIndex > -1) {
//         // Update existing doctor
//         const newDoctors = [...prevDoctors];
//         newDoctors[doctorIndex] = updatedDoctor;
//         return newDoctors;
//       }
//       // Add new doctor if not found
//       return [...prevDoctors, updatedDoctor];
//     });
//   };

//   const contextValue = {
//     state,
//     setToken,
//     setUser,
//     logout,
//     doctors,
//     updateDoctor, // Add this to the context
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;



// import React, { createContext, useEffect, useState } from 'react';

// export const StoreContext = createContext(null);

// const initialState = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   token: localStorage.getItem('token') || '',
// };

// const StoreContextProvider = ({ children }) => {
//   const [state, setState] = useState(initialState);
//   const [doctors, setDoctors] = useState(() => {
//     return JSON.parse(localStorage.getItem('doctors')) || [];
//   });

//   useEffect(() => {
//     if (state.token) {
//       localStorage.setItem('token', state.token);
//     } else {
//       localStorage.removeItem('token');
//     }

//     if (state.user) {
//       localStorage.setItem('user', JSON.stringify(state.user));
//     } else {
//       localStorage.removeItem('user');
//     }
//   }, [state.token, state.user]);

//   useEffect(() => {
//     localStorage.setItem('doctors', JSON.stringify(doctors));
//   }, [doctors]);

//   const setToken = (token) => {
//     setState((prevState) => ({ ...prevState, token }));
//   };

//   const setUser = (user) => {
//     setState((prevState) => ({ ...prevState, user }));
//   };

//   const logout = () => {
//     setState({ user: null, token: '' });
//     setDoctors([]); // Clear doctors on logout
//   };

//   // Function to update the doctors list
//   const updateDoctor = (updatedDoctor) => {
//     setDoctors((prevDoctors) => {
//       const doctorIndex = prevDoctors.findIndex(doc => doc._id === updatedDoctor._id);
//       if (doctorIndex > -1) {
//         // Update existing doctor
//         const newDoctors = [...prevDoctors];
//         newDoctors[doctorIndex] = updatedDoctor;
//         return newDoctors;
//       }
//       // Add new doctor if not found
//       return [...prevDoctors, updatedDoctor];
//     });
//   };

//   const contextValue = {
//     state,
//     setToken,
//     setUser,
//     logout,
//     doctors,
//     updateDoctor,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;


import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext(null);

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || '',
};

const StoreContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/doctor/accepted');
        if (response.ok) {
          const data = await response.json();
          setDoctors(data);
        } else {
          console.error('Failed to fetch doctors');
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    if (state.token) {
      localStorage.setItem('token', state.token);
    } else {
      localStorage.removeItem('token');
    }

    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.token, state.user]);

  const setToken = (token) => {
    setState((prevState) => ({ ...prevState, token }));
  };

  const setUser = (user) => {
    setState((prevState) => ({ ...prevState, user }));
  };

  const logout = () => {
    setState({ user: null, token: '' });
    // No need to clear doctors if they are globally accessible
  };

  const updateDoctor = (updatedDoctor) => {
    setDoctors((prevDoctors) => {
      const doctorIndex = prevDoctors.findIndex(doc => doc._id === updatedDoctor._id);
      if (doctorIndex > -1) {
        const newDoctors = [...prevDoctors];
        newDoctors[doctorIndex] = updatedDoctor;
        return newDoctors;
      }
      return [...prevDoctors, updatedDoctor];
    });
  };

  const contextValue = {
    state,
    setToken,
    setUser,
    logout,
    doctors,
    updateDoctor,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
