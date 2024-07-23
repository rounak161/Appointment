//  import React, { useContext, useEffect } from 'react'
//  import './Verify.css'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { StoreContext } from '../../context/storeContext';
//  const Verify = () => {
//   const [searchParams,setSearchParams]=useSearchParams();
//   const success=searchParams.get("success");
//   const orderId=searchParams.get("orderId");
//   const {url}=useContext(StoreContext);
//   const navigate=useNavigate();

//   const verifyPayment=async()=>{
//     const response=await axios.post(url+'api/order/verify',{success,orderId})
//     if(response.data.success){
//        navigate('/myorders')
//     }else{
//       navigate('/')
//     }
//   }
//   useEffect(()=>{
//          verifyPayment();
//   },[])
//    return (
//      <div className='verify'>
//       <div className="spinner">

//       </div>
//      </div>
//    )
//  }
 
//  export default Verify
 
import React, { useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const appointmentId = searchParams.get("appointmentId");
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await fetch('http://localhost:5000/appointment/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success,
          appointmentId,
        }),
      });
      if (response.ok) {
        navigate('/appointments');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      navigate('/');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [success, appointmentId]);

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
