const Contact = require('../models/Contact');

// Create a new contact message
 createContactMessage.posta() = async (req, res) => {
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
};

// Get all contact messages (optional)
 getAllContactMessages.get() async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching contact messages', error });
  }
};







// // Get all contact messages (optional)
// getAllContactMessages.get() async (req, res) => {
//   try {
 