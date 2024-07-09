// src/context/storeContext.jsx

import React, { createContext, useEffect, useState } from 'react';
 
import { doctor_list} from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [token, setToken] = useState('false');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctor_list);
  }, []);

  const contextValue = {
    token,
    setToken,
    doctors,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
