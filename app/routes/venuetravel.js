//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/venuetravel', function(req, res) {
    res.render('venuetravel', {
        pageTitle: 'Venue Travel',
        pageID: 'venuetravel'
    });
});

//Export the route...
module.exports = router;
