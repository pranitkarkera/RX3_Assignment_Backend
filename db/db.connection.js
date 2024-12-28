require('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB;

const initializeDatabase = async () => {
  if (!mongoURI) {
    console.error("MongoDB URI is not defined. Please check your .env file.");
    process.exit(1); // Exit the process if the URI is not defined
  }

  try {
    const connection = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected Successfully to MongoDB");
  } catch (error) {
    console.error("Connection Failed:", error.message);
    console.error(error.stack); // Log the stack trace for debugging
  }
};

module.exports = { initializeDatabase };