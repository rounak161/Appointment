// const express = require('express');
// const doctorController = express.Router();
// const Doctor = require('../models/Doctor');

// // Route to apply for a new doctor
// doctorController.post('/apply', async (req, res) => {
//   try {
//     const { name, specialization, experience, fees, phone, image } = req.body;

//     // Basic validation
//     if (!name || !specialization || !experience || !fees || !phone || !image) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Additional validation can be added here if needed
//     // Example: Check if fees is a valid number
//     if (isNaN(fees)) {
//       return res.status(400).json({ message: 'Fees must be a number' });
//     }

//     const newDoctor = new Doctor({
//       name,
//       specialization,
//       experience,
//       fees,
//       phone,
//       image
//     });

//     const savedDoctor = await newDoctor.save();
//     return res.status(201).json(savedDoctor);
//   } catch (error) {
//     return res.status(500).json({ message: 'An error occurred', error });
//   }
// });

// module.exports = doctorController;


const express = require('express');
const doctorController = express.Router();
const Doctor = require('../models/Doctor');
const fs = require('fs');
const path = require('path');
// Route to apply for a new doctor
doctorController.post('/apply',  async (req, res) => {
  try {
    const { name, specialization, experience, fees, phone, image } = req.body;

    // Basic validation
    if (!name || !specialization || !experience || !fees || !phone || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Additional validation can be added here if needed
    // Example: Check if fees is a valid number
    if (isNaN(fees)) {
      return res.status(400).json({ message: 'Fees must be a number' });
    }

    const newDoctor = new Doctor({
      name,
      specialization,
      experience,
      fees,
      phone,
      image
    });

    const savedDoctor = await newDoctor.save();
    return res.status(201).json(savedDoctor);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error });
  }
});






// Route to get all applied doctors
doctorController.get('/all', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.status(200).json(doctors);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error });
  }
});







// Accept Doctor
doctorController.put('/accepted/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.status = 'accepted';
    await doctor.save();

    res.status(200).json(doctor);
  } catch (error) {
    console.error('Error accepting doctor:', error);
    res.status(500).json({ message: 'Server error' });
  }
});







doctorController.get('/accepted', async (req, res) => {
  try {
    const acceptedDoctors = await Doctor.find({ status: 'accepted' });
    if (acceptedDoctors.length > 0) {
      res.status(200).json(acceptedDoctors);
    } else {
      res.status(404).json({ message: 'No accepted doctors found' });
    }
  } catch (error) {
    console.error('Error fetching accepted doctors:', error);
    res.status(500).json({ message: 'Server error' });
  }
});





// Delete Doctor Route
doctorController.delete('/delete/:id', async (req, res) => {
  try {
    // Find the doctor by ID
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Delete the doctor's record from the database
    await Doctor.findByIdAndDelete(req.params.id);

    // Construct the path to the image file
    const imagePath = path.join(__dirname, '../public/images', doctor.image);

    // Remove the image file from the file system
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image:', err);
        // Optionally, send a response indicating the file was not deleted
      }
    });

    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = doctorController;


module.exports = doctorController;

