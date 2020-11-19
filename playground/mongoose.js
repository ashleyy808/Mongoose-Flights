// Welcome to the Mongoose Playground

// Step 1 - require our modules

// DB
require('../config/database');

// Model
const Flight = require('../models/flight'); 
const Ticket = require('../models/ticket');

// Step 2 - Explore the various ways to perform CRUD using Mongoose
// Create with .create()
// Find with .find()
// Find by Id with .findById()
// Update by Id with .findByIdAndUpdate()
// Delete by Id with .findByIdAndDelete()