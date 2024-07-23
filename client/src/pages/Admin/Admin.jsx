// import React, { useState, useEffect } from 'react';
// import './Admin.css';

// const Admin = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAppliedDoctors = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/doctor/all');
//         if (response.ok) {
//           const doctors = await response.json();
//           setData(doctors);
//         } else {
//           console.error('Failed to fetch applied doctors');
//         }
//       } catch (error) {
//         console.error('Error fetching applied doctors:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppliedDoctors();
//   }, []);

//   return (
//     <div className="admin-container">
//       <div className="admin-wrapper">
//         <h2>List of Doctors Applied</h2>
//         <div className="admin-list">
//           {loading ? (
//             <p>Loading...</p>
//           ) : data.length === 0 ? (
//             <p>No doctors have applied yet.</p>
//           ) : (
//             <ul className='grid'>
//               {data.map((doctor) => (
//                 <li  className='dabba' key={doctor._id}>
//                   <p><strong>Name:</strong> {doctor.name}</p>
//                   <p><strong>Specialization:</strong> {doctor.specialization}</p>
//                   <p><strong>Experience:</strong> {doctor.experience}</p>
//                   <p><strong>Fees:</strong> ${doctor.fees}</p>
//                   <p><strong>Phone:</strong> {doctor.phone}</p>
//                   <div className="img">
//                    <p><strong>Image:</strong> {doctor.image}</p>
//                    <div className="image-1">
//                      <img src={`http://localhost:5000/images/${doctor.image}`} alt="" />
//                    </div>
//                    </div>
//                    <div className="btn">
//                     <button>accept</button>
//                      <button>reject</button>
//                    </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;



// import React, { useState, useEffect, useContext } from 'react';
// import './Admin.css';
// import { StoreContext } from '../../context/storeContext';

// const Admin = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const{doctors}=useContext(StoreContext);
//   const { updateDoctor } = useContext(StoreContext);
//   useEffect(() => {
//     const fetchAppliedDoctors = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/doctor/all');
//         if (response.ok) {
//           const doctors = await response.json();
//           setData(doctors);
//         } else {
//           console.error('Failed to fetch applied doctors');
//         }
//       } catch (error) {
//         console.error('Error fetching applied doctors:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppliedDoctors();
//   }, []);

//   // const handleAccept = async (id) => {
//   //   try {
//   //     const response = await fetch(`http://localhost:5000/doctor/accepted/${id}`, {
//   //       method: 'PUT',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //     });
  
//   //     if (response.ok) {
//   //       const acceptedDoctor = await response.json(); // Assume the response contains the accepted doctor info
  
//   //       // Update the doctors list in context
//   //       updateDoctor(acceptedDoctor);
  
//   //       // Optionally remove the doctor from the current list if needed
//   //       setData(data.filter(doctor => doctor._id !== id));
//   //     } else {
//   //       console.error('Failed to accept doctor');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error accepting doctor:', error);
//   //   }
//   // };
  
  
//   const handleAccept = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/doctor/accepted/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         const acceptedDoctor = await response.json();
  
//         // Update the doctors list in context
//         updateDoctor(acceptedDoctor);
  
//         // Remove the doctor from the current list
//         setData((prevData) => {
//           const updatedData = prevData.filter((doctor) => doctor._id !== id);
//           localStorage.setItem('doctors', JSON.stringify(updatedData));
//           return updatedData;
//         });
//       } else {
//         console.error('Failed to accept doctor');
//       }
//     } catch (error) {
//       console.error('Error accepting doctor:', error);
//     }
//   };
  
//   // useEffect(() => {
//   //   const fetchDoctors = async () => {
//   //     try {
//   //       const response = await fetch('http://localhost:5000/doctor/accepted');
//   //       if (response.ok) {
//   //         const doctors = await response.json();
//   //         setData(doctors);
//   //         localStorage.setItem('doctors', JSON.stringify(doctors));
//   //       } else {
//   //         console.error('Failed to fetch doctors');
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching doctors:', error);
//   //     }
//   //   };
  
//   //   const storedDoctors = localStorage.getItem('doctors');
//   //   if (storedDoctors) {
//   //     setData(JSON.parse(storedDoctors));
//   //   } else {
//   //     fetchDoctors();
//   //   }
//   // }, []);
  
  

//   const handleReject = async (id) => {
//     try {
//       // Send DELETE request to the server
//       const response = await fetch(`http://localhost:5000/doctor/delete/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         // Update local state to remove the deleted doctor
//         setData(prevData => prevData.filter(doctor => doctor._id !== id));
//       } else {
//         console.error('Failed to reject doctor');
//       }
//     } catch (error) {
//       console.error('Error rejecting doctor:', error);
//     }
//   };

//   return (
//     <div className="admin-container">
//       <div className="admin-wrapper">
//         <h2>List of Doctors Applied</h2>
//         <div className="admin-list">
//           {loading ? (
//             <p>Loading...</p>
//           ) : data.length === 0 ? (
//             <p>No doctors have applied yet.</p>
//           ) : (
//             <ul className='grid'>
//               {data.map((doctor) => (
//                 <li className='dabba' key={doctor._id}>
//                   <p><strong>Name:</strong> {doctor.name}</p>
//                   <p><strong>Specialization:</strong> {doctor.specialization}</p>
//                   <p><strong>Experience:</strong> {doctor.experience}</p>
//                   <p><strong>Fees:</strong> ${doctor.fees}</p>
//                   <p><strong>Phone:</strong> {doctor.phone}</p>
//                   <div className="img">
//                     <p><strong>Image:</strong></p>
//                     <div className="image-1">
//                       <img src={`http://localhost:5000/images/${doctor.image}`} alt={doctor.name} />
//                     </div>
//                   </div>
//                   <div className="btn">
//                     <button onClick={() => handleAccept(doctor._id)}>Accept</button>
//                     <button onClick={() => handleReject(doctor._id)}>Reject</button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;






import React, { useState, useEffect, useContext } from 'react';
import './Admin.css';
import { StoreContext } from '../../context/storeContext';

const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { updateDoctor } = useContext(StoreContext);
   

  useEffect(() => {
    const fetchAppliedDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/doctor/all');
        if (response.ok) {
          const doctors = await response.json();
          setData(doctors);
        } else {
          console.error('Failed to fetch applied doctors');
        }
      } catch (error) {
        console.error('Error fetching applied doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedDoctors();
  }, []);

  const handleAccept = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/doctor/accepted/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const acceptedDoctor = await response.json();
        updateDoctor(acceptedDoctor);
        setData((prevData) => prevData.filter((doctor) => doctor._id !== id));
      } else {
        console.error('Failed to accept doctor');
      }
    } catch (error) {
      console.error('Error accepting doctor:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/doctor/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setData((prevData) => prevData.filter((doctor) => doctor._id !== id));
      } else {
        console.error('Failed to reject doctor');
      }
    } catch (error) {
      console.error('Error rejecting doctor:', error);
    }
  };

   

  return (
    <div className="admin-container">
      <div className="admin-wrapper">
        <h2>List of Doctors Applied</h2>
        <div className="admin-list">
          {loading ? (
            <p>Loading...</p>
          ) : data.length === 0 ? (
            <p>No doctors have applied yet.</p>
          ) : (
            <ul className='grid'>
              {data.map((doctor) => (
                <li className='dabba' key={doctor._id}>
                  <p><strong>Name:</strong> {doctor.name}</p>
                  <p><strong>Specialization:</strong> {doctor.specialization}</p>
                  <p><strong>Experience:</strong> {doctor.experience}</p>
                  <p><strong>Fees:</strong> ${doctor.fees}</p>
                  <p><strong>Phone:</strong> {doctor.phone}</p>
                  <div className="img">
                    <p><strong>Image:</strong></p>
                    <div className="image-1">
                      <img src={`http://localhost:5000/images/${doctor.image}`} alt={doctor.name} />
                    </div>
                  </div>
                  <div className="btn">
                    <button onClick={() => handleAccept(doctor._id)}>Accept</button>
                    <button onClick={() => handleReject(doctor._id)}>Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
         
      </div>
    </div>
  );
};

export default Admin;
