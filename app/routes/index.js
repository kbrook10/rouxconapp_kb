//Import the express library and the router object...
var express = require('express');
var router = express.Router();

//Create route for home...The pageTitle and pageID can be passed to the views...
router.get('/', function(req, res) {
    res.render('index', {
        pageTitle: 'Home',
        pageID: 'home'
    });
});

//Export the route...
module.exports = router;
