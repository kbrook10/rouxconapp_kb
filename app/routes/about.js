//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/about', function(req, res) {
    res.render('about', {
        pageTitle: 'About Us',
        pageID: 'about'
    });
});

//Export the route...
module.exports = router;
