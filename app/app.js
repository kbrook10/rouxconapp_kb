//This creates a variable that requires the express library...
var express = require('express');

//This creates an instance of the express method and assigns it to a variable...
var app = express();

//Create route...
app.get('/', function(req, res) {
    res.send(`
        <h1>Roux Academy Conference Tutorial</h1>
        `);
});

//Create process for the server to listen for connections on a specified port...
var server = app.listen(3000, function() {
    console.log('Listening in on port 3000')
});
