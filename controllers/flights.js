const Flight = require('../models/flight');
const Ticket = require('../models/ticket'); 
module.exports = {
  index,
  show,
  new: newFlight,
  create,
  createDestination
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({},function(err, tickets) {
      res.render('flights/show', { title: 'Flight Detail', flight, tickets });
    }) 
});
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err, flight) {
    if (err) {
    console.log(err); 
    res.redirect('/flights/new');}
    else {
      console.log(flight);
      res.redirect('/flights');
    }
  });
}

// this function is used to add a destination to a flight
function createDestination(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
 }
