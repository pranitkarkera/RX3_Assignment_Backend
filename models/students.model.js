require('dotenv').config();
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  age: {
    type: Number,
    required: true, // Age is required
    min: 0, // Age must be a positive number
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // Restrict gender to specific values
    required: true, // Gender is required
  },
  marks: {
    type: Number,
    min: 0, // Marks must be a positive number
    max: 100, // Assuming marks are out of 100
  },
  attendance: {
    type: Number,
    min: 0, // Attendance must be a positive number
    max: 100, // Assuming attendance is a percentage
  },
  grade: {
    type: String,
    required: true, // Grade is required
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };