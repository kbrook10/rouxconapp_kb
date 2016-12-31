//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/about', function(req, res) {
    res.send(`
        <h1>Welcome to the about page...Within the new Route module</h1>
        `);
});

//Export the route...
module.exports = router;
