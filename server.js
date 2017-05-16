var express = require('express');
var jade = require('jade');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var mongo = require('mongodb');
var passportLocal = require('passport-local');
var db = mongoose.connection;

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();


var port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
	secret:'secret',
	saveUninitialized: true,
	resave:true
}));

app.use(passport.initialize());
app.use(passport.session());

//app.use('/', routes);
//app.use('/users', users);

/*app.use(function(req,res,next){
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});*/

app.get('/', function(req,res,next){
	res.render('index.jade',{title:'Welcome'});
});

app.get('/login', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('login.jade', {title:'Welcome'});
});

app.get('/register', function(req, res){
	res.render('register.jade',{title:'Register'});
})

app.post('/register/send', function(req, res) {

    // ejs render automatically looks in the views folder
    console.log('test');
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});