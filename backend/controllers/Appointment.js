require('dotenv').config();
const express = require('express');
const Appointment = require('../models/Appointment');
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Create Stripe instance after loading .env
const appointmentController = express.Router();
const Doctor = require('../models/Doctor'); // Import Doctor model
// Create an appointment
appointmentController.post('/create', async (req, res) => {
  try {
    const { doctorId, patientId, date, time } = req.body;
    const appointment = new Appointment({ doctorId, patientId, date, time });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all appointments
appointmentController.get('/all', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctorId patientId');
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update appointment status
appointmentController.put('/update', async (req, res) => {
  try {
    const { id } = req.body; // Get id from req.body
    const appointment = await Appointment.findById(id);
    
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    
    // Update status to 'confirmed'
    appointment.status = 'confirmed';
    await appointment.save();
    
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});







// Get all appointments by user ID
appointmentController.get('/get/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    
    const appointments = await Appointment.find({ patientId: userId })
    .populate('patientId', 'username') // Populate with patient's username
    .populate('doctorId', 'name'); // Populate with doctor's name

    
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: 'No appointments found' });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
});


 // Delete appointment by ID
appointmentController.delete('/delete/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting appointment', error });
  }
});


////new controller for booking 

// appointmentController.post('/book',async (req, res) => {
//   const frontend_url = "http://localhost:5173";
//   try {
//     const newAppointment = new Appointment({
//       doctorId: req.body.doctorId,
//       patientId: req.body.patientId,
//       date: req.body.date,
//       time: req.body.time,
//     });
//     await newAppointment.save();

//     const line_items = [{
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: `Appointment with Doctor ID: ${req.body.doctorId}`,
//         },
//         unit_amount: req.body.amount * 100, // Amount in paise
//       },
//       quantity: 1,
//     }];

//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: 'payment',
//       success_url: `${frontend_url}/verify?success=true&appointmentId=${newAppointment._id}`,
//       cancel_url: `${frontend_url}/verify?success=false&appointmentId=${newAppointment._id}`,
//     });
//     res.json({ success: true, session_url: session.url });

//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error creating appointment" });
//   }
// });


///booking and appointment  through stripe payment   ......
appointmentController.post('/book', async (req, res) => {
  const frontend_url = "http://localhost:5173";
  try {
    // Fetch doctor details
    const doctor = await Doctor.findById(req.body.doctorId);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const newAppointment = new Appointment({
      doctorId: req.body.doctorId,
      patientId: req.body.patientId,
      date: req.body.date,
      time: req.body.time,
    });
    await newAppointment.save();

    const line_items = [{
      price_data: {
        currency: "inr",
        product_data: {
          name: `Appointment with Dr. ${doctor.name}`,
        },
        unit_amount: doctor.fees * 100, // Convert fees to paise
      },
      quantity: 1,
    }];

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&appointmentId=${newAppointment._id}`,
      cancel_url: `${frontend_url}/verify?success=false&appointmentId=${newAppointment._id}`,
    });

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error creating appointment" });
  }
});
 


 //verifying logic  means if payment is done  set payment true
 appointmentController.post('/verify', async (req, res) => {
  const { success, appointmentId } = req.body;

  if (success === 'true') {
    try {
      const appointment = await Appointment.findById(appointmentId);
      if (appointment) {
        appointment.payment = true; // Use a boolean
        await appointment.save();
        res.json({ message: 'Payment verified successfully' });
      } else {
        res.status(404).json({ message: 'Appointment not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error verifying payment' });
    }
  } else {
    res.json({ message: 'Payment verification failed' });
  }
});
 





module.exports = appointmentController;
 