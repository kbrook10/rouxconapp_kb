//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/artists', function(req, res) {
    res.render('artists', {
        pageTitle: 'Artists',
        pageID: 'artists'
    });
});

//Export the route...
module.exports = router;
