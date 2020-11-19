const Flight = require('../models/flight');

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
    res.render('flights/show', { title: 'Flight Detail', flight });
  });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    console.log(flight);
    res.redirect('/flights');
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
