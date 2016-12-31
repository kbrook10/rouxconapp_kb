//<-----------------Initial Imports and Setup------------------------->
//<------------------------------------------------------------------->
//This creates a variable that requires the express library...
var express = require('express');
//This creates an instance of the express method and assigns it to a variable...
var app = express();
var dataFile = require('./data/data.json');


//<-----------------Server Port Establishment------------------------->
//<------------------------------------------------------------------->
//Create flexible port value depending on environment and set default to 3000...
app.set('port', process.env.PORT || 3000);


//<-----------------Establish connections to modular routes----------->
//<------------------------------------------------------------------->
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/about'));

//<-----------------Server to Listen in on Connections---------------->
//<------------------------------------------------------------------->
//Create process for the server to listen for connections on a specified port...
var server = app.listen(app.get('port'), function() {
    console.log('Listening in on port ' + app.get('port'));
});
