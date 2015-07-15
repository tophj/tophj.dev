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

// creates routes for the admin section

// get an instance of the router
// var adminRouter = express.Router();

// // Router middleware, used to check before calls
// adminRouter.use(function(req, res){

// 	// log each request to the console
// 	console.log(req.methood, req.url);

// 	// continue doing what we were doing and go into route
// 	next();
// });


// // route with parameters @localhost:1337/admin/users/:name
// adminRouter.get('/users/:name', function(req, res){
// 	res.send('hello ' + req.params.name + '!');
// });


// // admin main page @ localhost:port/admin
// adminRouter.get('/', function(req, res){
// 	res.send('I am the dashboard!');
// });

// // users page @ localhost:port/admin/users
// adminRouter.get('/users', function(req, res){
// 	res.send('Users page!');
// });

// // posts pages? @ localhost:port/admin/posts
// adminRouter.get('posts', function(req, res){
// 	res.send('I show all the posts!');
// });

// apply the routes to our application
//app.use('/admin', adminRouter);

/*
* End Routes
*/


// start the server
app.listen(3000);
console.log('3000 is the magic port!');