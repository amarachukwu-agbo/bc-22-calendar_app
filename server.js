var express = require('express');
var jade = require('jade');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var mongo = require('mongodb');
var passportLocal = require('passport-local');
var fireBase = require('firebase');
var db = mongoose.connection;

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();


var port = process.env.PORT || 8080;

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

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
});

app.post('/register/send', function(req, res) {

    // ejs render automatically looks in the views folder
    console.log('test');
});

app.get('/days', function(req, res){
  res.render('days.jade');
});

app.get('/years', function(req, res){
  res.render('years.jade',{title:'Register'});
});

app.get('/months', function(req, res){
  res.render('months.jade',{title:'Register'});
})




/*var config = {
    apiKey: "AIzaSyAMKcjAqmsqkRssHXcvFIe0e66HsAupXOE",
    authDomain: "my-calendar-project-ce7ab.firebaseapp.com",
    databaseURL: "https://my-calendar-project-ce7ab.firebaseio.com",
    projectId: "my-calendar-project-ce7ab",
    storageBucket: "my-calendar-project-ce7ab.appspot.com",
    messagingSenderId: "11642640373"
  };
  
  firebase.initializeApp(config);
  var db = firebase

  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  // An error happened.
  });

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // ...
  });

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // ...
  });

  document.getElementById("myBtn").addEventListener("click", function(){
    var password = document.getElementByName('password').value;
    var passwordTwo = document.getElementByName('password2').value;
    var email = document.getElementByName('email').value;
    var username = document.getElementByName('username').value;
    var firstName = document.getElementByName('firstname').value;
    var password = document.getElementByName('lastname').value;


});*/


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});