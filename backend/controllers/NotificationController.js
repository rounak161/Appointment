const express = require('express');
const NotificationController = express.Router();
const Notification = require('../models/Notification');
 


// Route to create a notification
NotificationController.post('/notification', async (req, res) => {
    try {
      const notification = new Notification({
        userId: req.body.userId,
        message: req.body.message,
      });
      await notification.save();
      return res.status(200).json(notification);
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred', error });
    }
  });
  
// Route to get notifications by user ID
NotificationController.get('/notifications/:userId', async (req, res) => {
    try {
      const notifications = await Notification.find({ userId: req.params.userId });
      return res.status(200).json(notifications);
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred', error });
    }
  });
  


 




 

 




module.exports = NotificationController;

 

