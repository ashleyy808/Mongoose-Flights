// Require our modules (mongoose)

const mongoose = require('mongoose');

// set up out shprtcut variables

const db = mongoose.connection;

// Connect to the database server

mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
});

// Set up a connection listener 

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}}`);
});