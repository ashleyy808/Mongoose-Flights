// require our modules 1) express 2) index controller
const express = require('express'); 
const flightsCtrl = require('../controllers/flights');

 
// create our router object
const router = express.Router();
// define our routes
router.get('/', flightsCtrl.index); 
router.post('/', flightsCtrl.create);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);

// export the router object 
module.exports = router;