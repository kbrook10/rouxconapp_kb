//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/privacypolicy', function(req, res) {
    res.render('privacypolicy', {
        pageTitle: 'Privacy Policy',
        pageID: 'privacypolicy'
    });
});

//Export the route...
module.exports = router;
