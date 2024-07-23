// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const authController = require("./controllers/authControllers");
// const doctorController = require("./controllers/doctorControllers");
// const uploadController = require("./controllers/uploadController");
// require('dotenv').config(); // Add this line to load environment variables
// const app = express();




// // db connecting
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("Db is connected"))
//   .catch((err) => console.error("Db connection error:", err));




// // middlewares
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json({ limit: '50mb' })); // Increase the limit
// app.use(express.urlencoded({ extended: true }));
// // to serve images inside public folder
// app.use('/images', express.static('public/images'));


// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Travello backend service!');
// });

// app.use("/auth", authController);
// app.use("/doctor",doctorController);
// app.use('/upload', uploadController);




// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log("Server has been started"));


 
 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authControllers");
const doctorController = require("./controllers/doctorControllers");
const uploadController = require("./controllers/uploadController");
const appointmentController = require("./controllers/Appointment");
require('dotenv').config();
 

const app = express();

// DB connecting
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Db is connected"))
  .catch((err) => console.error("Db connection error:", err));

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Travello backend service!');
});

app.use("/auth", authController);
app.use("/doctor", doctorController);
app.use('/upload', uploadController);
app.use('/appointment',appointmentController);
// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has been started on port ${port}`));


 
 
 

  
 

 
 
  
 