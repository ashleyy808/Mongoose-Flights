const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newTicket,
    create,
    createTicket
  };

  function index(req, res) {
    Ticket.find({}, function(err, tickets) {
      res.render('tickets/index', { title: 'All Tickets', tickets });
    });
  }
  
  function show(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
      res.render('tickets/show', { title: 'Ticket Detail', ticket });
    });
  }
  
  function newTicket(req, res) {
    res.render('tickets/new', { title: 'Add Ticket' });
  }
  
  function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    const ticket = new Ticket(req.body);
    ticket.save(function(err) {
      if (err) return res.redirect('/tickets/new');
      console.log(flight);
      res.redirect('/tickets');
    });
  }
  
  // this function is used to add a ticket to a flight
  function createTicket(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
      ticket.flight.push(req.body);
      ticket.save(function(err) {
        res.redirect(`/tickets/${ticket._id}`);
      });
    });
   }
  