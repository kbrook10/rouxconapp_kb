//Import the express library and the router object...
var express = require('express');
var router = express.Router();

//Create route for home...
router.get('/', function(req, res) {
    res.send(`
        <h1>Welcome to the Home page...Within the new Route module</h1>
        `);
});

//Export the route...
module.exports = router;
