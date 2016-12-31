//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/register', function(req, res) {
    res.render('register', {
        pageTitle: 'Register',
        pageID: 'register'
    });
});

//Export the route...
module.exports = router;
