//Import the express library and the router object...
var express = require('express');
var router = express.Router();

//Create route for home...
router.get('/', function(req, res) {
    res.send(`
        <link rel='stylesheet' type='text/css' href='/css/style.css'>
        <h1>Welcome to the Home page...Within the new Route module</h1>
        <img src='/img/dory.jpg' alt='image of dory from Finding Nemo' style='height: 300px;' />
        `);
});

//Export the route...
module.exports = router;
