const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authControllers");
require('dotenv').config(); // Add this line to load environment variables
const app = express();




// db connecting
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Db is connected"))
  .catch((err) => console.error("Db connection error:", err));




// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Travello backend service!');
});

app.use("/auth", authController);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server has been started"));


 
 

 
 
 

  
 

 
 
  
 