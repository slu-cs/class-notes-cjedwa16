// Define a plan for a collection

const mongoose = require('mongoose');

// Schema for a collection of professors
const Professor = new mongoose.Schema({
  name: String,
  rank: String,
  started: Number,
  courses: [Number]
});

// Speed up queries on all fields
Professor.index({name: 1});   // I want to be able to look up professors by their name and quicly
Professor.index({rank: 1});
Professor.index({started: 1});
Professor.index({courses: 1});

// Compile and export this Schema
module.exports = mongoose.model('Professor', Professor);
