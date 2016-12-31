//This creates a variable that requires the express library...
var express = require('express');
//This creates an instance of the express method and assigns it to a variable...
var app = express();
var dataFile = require('./data/data.json');

//Create flexible port value depending on environment and set default to 3000...
app.set('port', process.env.PORT || 3000);

//Create route for home...
app.get('/', function(req, res) {
    res.send(`
        <h1>Welcome to the Home page...</h1>
        `);
});
//Create route for about...
app.get('/about', function(req, res) {
    res.send(`
        <h1>Welcome to the about page...</h1>
        `);
});

//Create process for the server to listen for connections on a specified port...
var server = app.listen(app.get('port'), function() {
    console.log('Listening in on port ' + app.get('port'));
});
