// require our modules 1) express 2) index controller
const express = require('express'); 
const flightsCtrl = require('../controllers/flights');

 
// create our router object
const router = express.Router();
// define our routes
router.get('/', flightsCtrl.index); 
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);

// export the router object 
module.exports = router;