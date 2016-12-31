//Import the express library and the router object...
var express = require('express');
var router = express.Router();


//Create route for about...
router.get('/about', function(req, res) {
    res.send(`
        <link rel='stylesheet' type='text/css' href='/css/style.css'>        
        <h1>Welcome to the about page...Within the new Route module</h1>
        <img src='/img/SCOB_Family.PNG' alt='image of scob family logo' style='height: 300px;' />
        `);
});

//Export the route...
module.exports = router;
