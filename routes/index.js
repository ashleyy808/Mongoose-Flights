// require our modules 1) express 2) index controller
const express = require('express'); 
 
// create our router object
const router = express.Router();
// define our routes
router.get('/', function(req, res, next) {
    res.render('index');
  });



// export the router object 
module.exports = router;