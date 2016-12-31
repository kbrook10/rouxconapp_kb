//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/schedule', function(req, res) {
    res.render('schedule', {
        pageTitle: 'Schedule',
        pageID: 'schedule'
    });
});

//Export the route...
module.exports = router;
