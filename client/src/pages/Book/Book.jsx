// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Book.css';

// const Book = () => {
//   const { id } = useParams(); // Extract doctorId from URL parameters
//   const [doctorId, setDoctorId] = useState(id || '');
//   const [patientId, setPatientId] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//  const navigate=useNavigate();
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setPatientId(storedUser._id);
//     }
//     setDoctorId(id);
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch('http://localhost:5000/appointment/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ doctorId, patientId, date, time }),
//       });
  
//       if (response.ok) {
//         const appointment = await response.json();
//         navigate('/doctor')
//         console.log('Appointment created:', appointment);
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to create appointment:', errorData.message || 'Unknown error');
//       }
//     } catch (error) {
//       console.error('Error creating appointment:', error);
//     }
//   };
  
//   return (
//     <form className='book-form' onSubmit={handleSubmit}>
//       <div className='form-group'>
//         <label htmlFor='date'>Date</label>
//         <input
//           id='date'
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//         />
//       </div>
//       <div className='form-group'>
//         <label htmlFor='time'>Time</label>
//         <input
//           id='time'
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit" className='submit-button'>Create Appointment</button>
//     </form>
//   );
// };

// export default Book;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Book.css';

// const Book = () => {
//   const { id } = useParams();
//   const [doctorId, setDoctorId] = useState(id || '');
//   const [patientId, setPatientId] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setPatientId(storedUser._id);
//     }
//     setDoctorId(id);
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/appointment/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ doctorId, patientId, date, time }),
//       });

//       if (response.ok) {
//         const appointment = await response.json();
//         navigate('/doctor');
//         console.log('Appointment created:', appointment);
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to create appointment:', errorData.message || 'Unknown error');
//       }
//     } catch (error) {
//       console.error('Error creating appointment:', error);
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/appointment/book', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           doctorId,
//           patientId,
//           date,
//           time,
//           amount: 1000, // example amount
//         }),
//       });
  
//       const data = await response.json();
//       if (data.success) {
//         window.location.href = data.session_url;
//       } else {
//         console.error('Payment session creation failed');
//       }
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//     }
//   };
  
//   return (
//     <form className='book-form' onSubmit={handlePayment}>
//       <div className='form-group'>
//         <label htmlFor='date'>Date</label>
//         <input
//           id='date'
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//         />
//       </div>
//       <div className='form-group'>
//         <label htmlFor='time'>Time</label>
//         <input
//           id='time'
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           required
//         />
//       </div>
//        <div className="bbtn">
//           <button type="button" className='payment-button' >
//             Proceed to Payment
//           </button>
          
//        </div>
//     </form>
//   );
// };

// export default Book;













import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Book.css';

const Book = () => {
  const { id } = useParams();
  const [doctorId, setDoctorId] = useState(id || '');
  const [patientId, setPatientId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setPatientId(storedUser._id);
    }
    setDoctorId(id);
  }, [id]);

  const handlePayment = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('http://localhost:5000/appointment/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctorId,
          patientId,
          date,
          time,
          amount: 1000, // example amount
        }),
      });
  
      const data = await response.json();
      if (data.success) {
        window.location.href = data.session_url;
      } else {
        console.error('Payment session creation failed');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };
  
  return (
    <form className='book-form' onSubmit={handlePayment}>
      <div className='form-group'>
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='time'>Time</label>
        <input
          id='time'
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="bbtn">
        <button type="submit" className='payment-button'>
          Proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default Book;
