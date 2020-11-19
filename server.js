// require our modules and initialize settings variables
const express = require('express');
const port = 3000;

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const ticketsRouter = require('./routes/tickets');

const morgan = require('morgan');

// create the express app

const app = express();

// configure server settings
require('./config/database');
app.set('view engine', 'ejs');


// mount middleware
app.use(morgan('dev'));
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: false }));

// mount routes
app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/tickets', ticketsRouter); 
 

// tell the application to listen 

app.listen(port, function () {
    console.log(`Express is listening on port:${port}`); 
});

