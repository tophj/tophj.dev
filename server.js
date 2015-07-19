// load dependencies and create the app
var express = require('express'),
	app = express();
var path = require('path');
var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/db_name');

//add the css and js folders
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

// send our index.html file to the user for the home page
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});


/*
* Routes
*/

// get an instance of the express router
 var router = express.Router();

 router.get('/ping', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/ping.html'));
});

// // Router middleware, used to check before calls
// adminRouter.use(function(req, res){

// 	// log each request to the console
// 	console.log(req.methood, req.url);

// 	// continue doing what we were doing and go into route
// 	next();
// });


// apply the routes to our application
app.use('/', router);

/*
* End Routes
*/


// start the server
app.listen(3000);
console.log('3000 is the magic port!');