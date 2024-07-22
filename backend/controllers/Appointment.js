const express = require('express');
const Appointment = require('../models/Appointment');

const appointmentController = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
appointmentController.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
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

///for paying the amount 

appointmentController.post('/pay',async(req,res)=>{

})



// ///for paying the amount 

// appointmentController.post('/pay',async(req,res)=>{








module.exports = appointmentController;
 