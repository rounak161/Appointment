 
// import './AdminAptments.css'

// import React, { useEffect, useState } from 'react';
 

// const AdminAptments = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/appointment/all', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setAppointments(data);
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to fetch appointments:', errorData.message || 'Unknown error');
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   return (
//     <div className="appointment-container">
//       <h2>List Of Appointments</h2>
//       <div className="apt-wrapper">
//         {appointments.length > 0 ? (
//           appointments.map((item) => (
//             <div key={item._id} className="appointment-item">
//               <p><span>Username</span>: {item.patientId.username}</p>
//               <p><span>Doctor</span>: {item.doctorId.name}</p>
//               <p><span>Date</span>: {item.date}</p>
//               <p><span>Time</span>: {item.time}</p>
//               <p><span>Status</span>: {item.status}</p>
//             </div>
//           ))
//         ) : (
//           <p className='no-apt'>No appointments found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminAptments;


// import './AdminAptments.css';
// import React, { useEffect, useState } from 'react';

// const AdminAptments = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/appointment/all', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setAppointments(data);
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to fetch appointments:', errorData.message || 'Unknown error');
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const handleAccept = (id) => {
//     console.log(`Accepted appointment with ID: ${id}`);
//     // Add logic to handle acceptance
//   };

//   const handleReject = (id) => {
//     console.log(`Rejected appointment with ID: ${id}`);
//     // Add logic to handle rejection
//   };

//   return (
//     <div className="appointment-container">
//       <h2>List Of Appointments</h2>
//       <div className="apt-wrapper">
//         {appointments.length > 0 ? (
//           appointments.map((item) => (
//             <div key={item._id} className="appointment-item">
//               <p><span>Username</span>: {item.patientId.username}</p>
//               <p><span>Doctor</span>: {item.doctorId.name}</p>
//               <p><span>Date</span>: {item.date}</p>
//               <p><span>Time</span>: {item.time}</p>
//               <p><span>Status</span>: {item.status}</p>
//                <div className="cbtn">
//                <button
//                 className="accept-btn"
//                 onClick={() => handleAccept(item._id)}
//               >
//                 Accept
//               </button>
//               <button
//                 className="reject-btn"
//                 onClick={() => handleReject(item._id)}
//               >
//                 Reject
//               </button>
//                </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-apt">No appointments found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminAptments;


import './AdminAptments.css';
import React, { useEffect, useState } from 'react';

const AdminAptments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:5000/appointment/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch appointments:', errorData.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleAccept = async (appointmentId, patientId) => {
    try {
      // Create the notification
      await fetch('http://localhost:5000/notify/notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: patientId,
          message: 'Your appointment is Confirmed On Your Preffered Time Slot.',
        }),
      });
  
      // Update the appointment status
      await fetch('http://localhost:5000/appointment/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: appointmentId }),
      });
      
      // Optionally, you can refresh the state or UI here
      console.log('Appointment accepted and notification sent.');
    } catch (error) {
      console.error('Error accepting appointment:', error);
    }
  };
  

  const handleReject = (id) => {
    console.log(`Rejected appointment with ID: ${id}`);
    handleDelete(id);
  };

  // const handleDelete = async (appointmentId) => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/appointment/delete/${appointmentId}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       setAppointments(appointments.filter(item => item._id !== appointmentId));
  //     } else {
  //       const errorData = await response.json();
  //       console.error('Failed to delete appointment:', errorData.message || 'Unknown error');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting appointment:', error);
  //   }
  // };


  const handleDelete = async (appointmentId, patientId) => {
    try {
      const response = await fetch(`http://localhost:5000/appointment/delete/${appointmentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        // Create a notification for the cancellation
        await fetch('http://localhost:5000/notify/notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: patientId,
            message: 'Your appointment has been canceled as the time slot you are booking has been booked earlier.',
          }),
        });
  
        // Update state to remove the deleted appointment
        setAppointments(appointments.filter(item => item._id !== appointmentId));
      } else {
        const errorData = await response.json();
        console.error('Failed to delete appointment:', errorData.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };
    
  

  return (
    <div className="appointment-container">
      <h2>List Of Appointments</h2>
      <div className="apt-wrapper">
        {appointments.length > 0 ? (
          appointments.map((item) => (
            <div key={item._id} className="appointment-item">
              <p><span>Username</span>: {item.patientId.username}</p>
              <p><span>Doctor</span>: {item.doctorId.name}</p>
              <p><span>Date</span>: {item.date}</p>
              <p><span>Time</span>: {item.time}</p>
              <p><span>Status</span>: {item.status}</p>
              <p><span>Payment</span>: {item.payment==='true'?'Done':'Not Done '}</p>
              <div className="cbtn">
                <button
                  className="accept-btn"
                  onClick={() => handleAccept(item._id,item.patientId)}
                >
                  Accept
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleDelete(item._id,item.patientId)}
                >
                 Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-apt">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminAptments;
