// load dependencies and create the app
var express = require('express'),
	app = express();
var path = require('path');

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

 router.get('/vacation', function (req, res) {
  res.sendFile(__dirname + '/html/vacation.html');
});

// apply the routes to our application
app.use('/', router);

/*
* End Routes
*/


// start the server
app.listen(3000);
console.log('3000 is the magic port!');
