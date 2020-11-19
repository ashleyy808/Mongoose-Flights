// require express module
const express = require('express');
const ticketsCtrl = require('../controllers/tickets');

// define router
const router = express.Router();

router.get('/', ticketsCtrl.index); 
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.get('/:id', ticketsCtrl.show);


// export the router object 
module.exports = router;