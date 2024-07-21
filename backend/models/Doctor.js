const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Assuming the image field stores a path or URL to the image
    required: true,
  },
  status:{
    type:String,
    default:'rejected'
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
