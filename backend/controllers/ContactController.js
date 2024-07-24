const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create a new contact message
router.post('/create', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({ message: 'Contact message sent successfully', contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating contact message', error });
  }
});

// Get all contact messages (optional)
router.get('/getcontact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching contact messages', error });
  }
});

// Get a specific contact message by ID (if needed)
router.get('/getcontact/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching contact message', error });
  }
});

module.exports = router;
