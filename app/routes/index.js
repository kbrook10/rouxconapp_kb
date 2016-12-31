//Import the express library and the router object...
var express = require('express');
var router = express.Router();

//Create route for home...
router.get('/', function(req, res) {
    res.render('index');
});

//Export the route...
module.exports = router;
