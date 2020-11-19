// require express module
const express = require('express');
const ticketsCtrl = require('../controllers/tickets');

// define router
const router = express.Router();

router.get('/', ticketsCtrl.index); 
router.get('/new', ticketsCtrl.new);
router.get('/:id', ticketsCtrl.show);

router.post('/flights/:id/tickets', ticketsCtrl.create);

// export the router object 
module.exports = router;