// import React, { useState } from 'react';
// import './Apply.css';

// const Apply = () => {
//   const [image, setImage] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     specialization: '',
//     experience: '',
//     fees: '',
//     phone: '',
//     // image: ''
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image) {
//       alert('Please upload an image');
//       return;
//     }
//     try {
//       const response = await fetch(' http://localhost:5000/doctor/apply', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSubmittedData(data); // Save the response data
//         alert('Doctor applied successfully!');
//         console.log(data);

//         // Optionally reset the form
//         setFormData({
//           name: '',
//           specialization: '',
//           experience: '',
//           fees: '',
//           phone: '',
//           image: ''
//         });
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'There was an error applying for doctor');
//       }
//     } catch (error) {
//       console.error('There was an error applying for doctor:', error);
//       alert('There was an error applying for doctor. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="apply-doctor-container">
//         <h2>Apply to be a Doctor</h2>
//         <form onSubmit={handleSubmit} className="wrapper">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//           />
//           <input
//             type="text"
//             name="specialization"
//             value={formData.specialization}
//             onChange={handleChange}
//             placeholder="Specialization"
//             required
//           />
//           <input
//             type="text"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             placeholder="Experience"
//             required
//           />
//           <input
//             type="number"
//             name="fees"
//             value={formData.fees}
//             onChange={handleChange}
//             placeholder="Fees"
//             required
//           />
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//             required
//           />
//           {/* <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             placeholder="Image URL"
//             required
//           /> */}


//         <div className="add-img-upload flex-col">
//               <p>Upload image</p>
//               <label htmlFor="image">
//                 <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload area" />
//               </label>
//               <input
//                 onChange={handleImageChange}
//                 type="file"
//                 id="image"
//                 required
//                 style={{ display: 'none' }}
//               />
//               <button type="button" onClick={() => document.getElementById('image').click()} className="upload-btn">
//                 Choose File
//               </button>
//         </div>

















//           <button type="submit">Apply</button>
//         </form>

//         {submittedData && (
//           <div className="submitted-data">
//             <h3>Doctor Applied Successfully:</h3>
//             <p><strong>Name:</strong> {submittedData.name}</p>
//             <p><strong>Specialization:</strong> {submittedData.specialization}</p>
//             <p><strong>Experience:</strong> {submittedData.experience}</p>
//             <p><strong>Fees:</strong> ${submittedData.fees}</p>
//             <p><strong>Phone:</strong> {submittedData.phone}</p>
//             <p><strong>Image:</strong> {submittedData.image}</p>
//             <p><strong>ID:</strong> {submittedData._id}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Apply;



// import React, { useState } from 'react';
// import './Apply.css';

// const Apply = () => {
//   const [image, setImage] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     specialization: '',
//     experience: '',
//     fees: '',
//     phone: '',
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image) {
//       alert('Please upload an image');
//       return;
//     }

//     const formDataWithImage = new FormData();
//     formDataWithImage.append('image', image);
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataWithImage.append(key, value);
//     });

//     try {
//       const response = await fetch('http://localhost:5000/doctor/apply', {
//         method: 'POST',
//         body: formDataWithImage,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSubmittedData(data);
//         alert('Doctor applied successfully!');
//         console.log(data);

//         setFormData({
//           name: '',
//           specialization: '',
//           experience: '',
//           fees: '',
//           phone: '',
//         });
//         setImage(null);
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'There was an error applying for doctor');
//       }
//     } catch (error) {
//       console.error('There was an error applying for doctor:', error);
//       alert('There was an error applying for doctor. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="apply-doctor-container">
//         <h2>Apply to be a Doctor</h2>
//         <form onSubmit={handleSubmit} className="wrapper">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//           />
//           <input
//             type="text"
//             name="specialization"
//             value={formData.specialization}
//             onChange={handleChange}
//             placeholder="Specialization"
//             required
//           />
//           <input
//             type="text"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             placeholder="Experience"
//             required
//           />
//           <input
//             type="number"
//             name="fees"
//             value={formData.fees}
//             onChange={handleChange}
//             placeholder="Fees"
//             required
//           />
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//             required
//           />

//           <div className="add-img-upload flex-col">
//             <p>Upload image</p>
//             <label htmlFor="image">
//               <img
//                 src={image ? URL.createObjectURL(image) : 'default-image-url'}
//                 alt="Upload area"
//                 style={{ width: '100px', height: '100px' }}
//               />
//             </label>
//             <input
//               onChange={handleImageChange}
//               type="file"
//               id="image"
//               required
//               style={{ display: 'none' }}
//             />
//             <button
//               type="button"
//               onClick={() => document.getElementById('image').click()}
//               className="upload-btn"
//             >
//               Choose File
//             </button>
//           </div>

//           <button type="submit">Apply</button>
//         </form>

//         {submittedData && (
//           <div className="submitted-data">
//             <h3>Doctor Applied Successfully:</h3>
//             <p><strong>Name:</strong> {submittedData.name}</p>
//             <p><strong>Specialization:</strong> {submittedData.specialization}</p>
//             <p><strong>Experience:</strong> {submittedData.experience}</p>
//             <p><strong>Fees:</strong> ${submittedData.fees}</p>
//             <p><strong>Phone:</strong> {submittedData.phone}</p>
//             <p><strong>ID:</strong> {submittedData._id}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Apply;

 



// import React, { useState } from 'react';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
// import './Apply.css';

// const Apply = () => {
//   const [image, setImage] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     specialization: '',
//     experience: '',
//     fees: '',
//     phone: '',
//   });
//   const [submittedData, setSubmittedData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       alert('Please upload an image');
//       return;
//     }

//     const formDataWithImage = new FormData();
//     formDataWithImage.append('image', image);
//     formDataWithImage.append('name', formData.name);
//     formDataWithImage.append('specialization', formData.specialization);
//     formDataWithImage.append('experience', formData.experience);
//     formDataWithImage.append('fees', formData.fees);
//     formDataWithImage.append('phone', formData.phone);
//     console.log("FormData with Image:", formDataWithImage); // Log FormData with image

//     try {
//       const response = await fetch('http://localhost:5000/doctor/apply', {
//         method: 'POST',
//         body: formDataWithImage,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSubmittedData(data);
//         alert('Doctor applied successfully!');
//         console.log(data);

//         setFormData({
//           name: '',
//           specialization: '',
//           experience: '',
//           fees: '',
//           phone: '',
//         });
//         setImage(null);
//         setError(null); // Clear any previous errors
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || 'There was an error applying for doctor');
//       }
//     } catch (error) {
//       console.error('There was an error applying for doctor:', error);
//       setError('There was an error applying for doctor. Please try again.');
//     }
//   };

//   const handleCloseImg = () => {
//     setImage(null);
//   };

//   return (
//     <div className="container">
//       <div className="apply-doctor-container">
//         <h2>Apply to be a Doctor</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit} className="wrapper">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//           />
//           <input
//             type="text"
//             name="specialization"
//             value={formData.specialization}
//             onChange={handleChange}
//             placeholder="Specialization"
//             required
//           />
//           <input
//             type="text"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             placeholder="Experience"
//             required
//           />
//           <input
//             type="number"
//             name="fees"
//             value={formData.fees}
//             onChange={handleChange}
//             placeholder="Fees"
//             required
//           />
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//             required
//           />

//           <div className="add-img-upload flex-col">
//             <p>Upload image</p>
//             <label htmlFor="image">
//               <img
//                 src={image ? URL.createObjectURL(image) : 'default-image-url'}
//                 alt="Upload area"
//                 style={{ width: '100px', height: '100px' }}
//               />
//             </label>
//             <input
//               onChange={handleImageChange}
//               type="file"
//               id="image"
//               accept=".jpg,.png,.jpeg"
//               required
//               style={{ display: 'none' }}
//             />
//             {image && (
//               <p className="image-name">
//                 {image.name}{' '}
//                 <AiOutlineCloseCircle
//                   onClick={() => handleCloseImg()}
//                   className="close-icon"
//                 />
//               </p>
//             )}
//           </div>

//           <button type="submit">Apply</button>
//         </form>

//         {submittedData && (
//           <div className="submitted-data">
//             <h3>Doctor Applied Successfully:</h3>
//             <p>
//               <strong>Name:</strong> {submittedData.name}
//             </p>
//             <p>
//               <strong>Specialization:</strong> {submittedData.specialization}
//             </p>
//             <p>
//               <strong>Experience:</strong> {submittedData.experience}
//             </p>
//             <p>
//               <strong>Fees:</strong> ${submittedData.fees}
//             </p>
//             <p>
//               <strong>Phone:</strong> {submittedData.phone}
//             </p>
//             <p>
//               <strong>ID:</strong> {submittedData._id}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Apply;







// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import "./Apply.css";
// import { StoreContext } from "../../context/storeContext";

// const Apply = () => {
  
//   const[name,setName]=useState('');
//   const[specialization,setSpecialization]=useState('');
//   const[experience,setExperience]=useState('');
//   const[fees,setFees]=useState('');
//   const[phone,setPhone]=useState('');
//   const[img,setImg]=('');
//   const [error, setError] = useState(false)

//    const navigate=useNavigate();


//    const onChangeFileFirst=(e)=>{
//       setImg(e.target.files[0]);
//    }

//    const handleCloseImg = () => {
//     setImg(prev => null)
//   }






//   const handleSubmit = async (e) => {
//     e.preventDefault();
    

    
//     try {
//       const formData = new FormData();

//       let filename = null;
//       if (img) {
//         filename = Date.now() + img.name; 
//         // for first img
//         formData.append("filename", filename);
//         formData.append("image", img);

//         await fetch(`http://localhost:5000/upload/image`, {
//           method: "POST",
//           body: formData,
//         });

//       // upload product and navigate to product
//       const res = await fetch("http://localhost:5000/doctor/apply", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify({
//           name,
//           specialization,
//           experience,
//           fees,
//           image: filename,
//           phone,
//         }),
//       });
//       const room = await res.json();
       
//     }

//     } catch (error) {
//       console.error(error);
//     }
//   };

   







//   return (
//     <div className="container">
//       <div className="apply-doctor-container">
//         <h2>Apply to be a Doctor</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit} className="wrapper" encType="multipart/form-data">
//           <div className="input-wrapper">
//             <label >name:</label>
//             <input
//               name='name'
//               onChange={(e)=>setName(e.target.value)}
//               className="input"
//               type='text'
//               placeholder="name.."
//              />
//           </div>

//           <div className="input-wrapper">
//             <label>Specialization:</label>
//             <input
//               name="specialization"
//               onChange={(e) => setSpecialization(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Specialization.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label>Experience:</label>
//             <input
//               name="experience"
//               onChange={(e) => setExperience(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Experience.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label>Fees:</label>
//             <input
//               name="fees"
//               onChange={(e) => setFees(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Fees.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label>Phone:</label>
//             <input
//               name="phone"
//               onChange={(e) => setPhone(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Phone.."
//             />
//           </div>

//           <div className="input-wrapper">
//           <label className="labelFileInput" htmlFor="firstImg" >
//               First image: <span>Upload here</span>
//             </label>
//             <input
//               className="input"
//               type="file"
//               filename="firstImg"
//               id="firstImg"
//               onChange={onChangeFileFirst}
//               placeholder="image..."
//               style={{ display: "none" }}
//             />
//             {img && <p className= "imageName">{img.name} <AiOutlineCloseCircle onClick={() => handleCloseImg()} className= "closeIcon"/></p>}
//           </div>

//           <button type="submit">Apply</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Apply;


// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import "./Apply.css";
// import { StoreContext } from "../../context/storeContext";

// const Apply = () => {
//   const [name, setName] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [experience, setExperience] = useState('');
//   const [fees, setFees] = useState('');
//   const [phone, setPhone] = useState('');
//   const [img, setImg] = useState(null);
//   const [error, setError] = useState('');
//   const { token } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const onChangeFileFirst = (e) => {
//     setImg(e.target.files[0]);
//   };

//   const handleCloseImg = () => {
//     setImg(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !specialization || !experience || !fees || !phone) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       const formData = new FormData();

//       if (img) {
//         const filename = Date.now() + img.name;
//         formData.append("filename", filename);
//         formData.append("image", img);

//         const uploadResponse = await fetch(`http://localhost:5000/upload/image`, {
//           method: "POST",
//           body: formData,
//         });

//         if (!uploadResponse.ok) {
//           throw new Error("Failed to upload image");
//         }

//         const res = await fetch("http://localhost:5000/doctor/apply", {
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`,
//           },
//           method: "POST",
//           body: JSON.stringify({
//             name,
//             specialization,
//             experience,
//             fees,
//             image: filename,
//             phone,
//           }),
//         });

//         if (res.ok) {
//           navigate('/');
//         } else {
//           const errorData = await res.json();
//           setError(errorData.message || 'Failed to apply');
//         }
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="apply-doctor-container">
//         <h2>Apply to be a Doctor</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit} className="wrapper" encType="multipart/form-data">
//           <div className="input-wrapper">
//             <label>Name:</label>
//             <input
//               name='name'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="input"
//               type='text'
//               placeholder="Name.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label>Specialization:</label>
//             <input
//               name="specialization"
//               value={specialization}
//               onChange={(e) => setSpecialization(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Specialization.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label>Experience:</label>
//             <input
//               name="experience"
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Experience.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label>Fees:</label>
//             <input
//               name="fees"
//               value={fees}
//               onChange={(e) => setFees(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Fees.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label>Phone:</label>
//             <input
//               name="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="input"
//               type="text"
//               placeholder="Phone.."
//             />
//           </div>

//           <div className="input-wrapper">
//             <label className="labelFileInput" htmlFor="firstImg">
//               First image: <span>Upload here</span>
//             </label>
//             <input
//               className="input"
//               type="file"
//               id="firstImg"
//               onChange={onChangeFileFirst}
//               style={{ display: "none" }}
//             />
//             {img && (
//               <p className="imageName">
//                 {img.name} 
//                 <AiOutlineCloseCircle onClick={handleCloseImg} className="closeIcon" />
//               </p>
//             )}
//           </div>

//           <button type="submit">Apply</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Apply;



import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Apply.css";
import { StoreContext } from "../../context/storeContext";

const Apply = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [fees, setFees] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState(null);
  const [error, setError] = useState('');
  const { token } = useContext(StoreContext);
  const navigate = useNavigate();

  const onChangeFileFirst = (e) => {
    setImg(e.target.files[0]);
  };

  const handleCloseImg = () => {
    setImg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !specialization || !experience || !fees || !phone) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const formData = new FormData();

      if (img) {
        const filename = Date.now() + img.name;
        formData.append("filename", filename);
        formData.append("image", img);

        const uploadResponse = await fetch(`http://localhost:5000/upload/image`, {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload image");
        }

        const res = await fetch("http://localhost:5000/doctor/apply", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify({
            name,
            specialization,
            experience,
            fees,
            image: filename,
            phone,
          }),
        });

        if (res.ok) {
          navigate('/');
        } else {
          const errorData = await res.json();
          setError(errorData.message || 'Failed to apply');
        }
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="apply-doctor-container">
        <h2>Apply to be a Doctor</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="wrapper" encType="multipart/form-data">
          <div className="input-wrapper">
            <label>Name:</label>
            <input
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              type='text'
              placeholder="Name.."
            />
          </div>

          <div className="input-wrapper">
            <label>Specialization:</label>
            <input
              name="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="input"
              type="text"
              placeholder="Specialization.."
            />
          </div>

          <div className="input-wrapper">
            <label>Experience:</label>
            <input
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="input"
              type="text"
              placeholder="Experience.."
            />
          </div>

          <div className="input-wrapper">
            <label>Fees:</label>
            <input
              name="fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="input"
              type="text"
              placeholder="Fees.."
            />
          </div>

          <div className="input-wrapper">
            <label>Phone:</label>
            <input
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
              type="text"
              placeholder="Phone.."
            />
          </div>

          <div className="input-wrapper">
            <label className="labelFileInput" htmlFor="firstImg">
              First image: <span>Upload here</span>
            </label>
            <input
              className="input"
              type="file"
              id="firstImg"
              onChange={onChangeFileFirst}
              style={{ display: "none" }}
            />
            {img && (
              <p className="imageName">
                {img.name} 
                <AiOutlineCloseCircle onClick={handleCloseImg} className="closeIcon" />
              </p>
            )}
          </div>

          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
