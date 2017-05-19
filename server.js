var express = require('express');
var jade = require('jade');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var mongo = require('mongodb');
var passportLocal = require('passport-local').Strategy;
//mongoose.connect('mongodb://Amara:triumph22@ds143141.mlab.com:43141/calendarapp');

/*var User = require('./models/user');
var db = mongoose.connection;*/

var app = express();


var port = process.env.PORT || 8080;

//app.set('views', path.join(__dirname, 'views'));
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

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.get('/', function(req,res,next){
	res.render('home.jade',{title:'Welcome'});
});

app.post('/', function(req,res,next){
  res.render('register.jade',{title:'Welcome'});
});


app.get('/home', function(req,res,next){
  res.render('home.jade',{title:'Welcome'});
});

app.get('/login', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('login.jade', {title:'Welcome'});
});

app.get('/register', function(req, res){
	res.render('register.jade',{title:'Register'});
});


app.post('/register', function(req, res){
  res.render('home.jade',{title:'Register'});
});

/*app.post('/register/send', function(req, res) {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;
    var username = req.body.username;
  

    req.checkBody('firstname', 'Name field is required').notEmpty();
    req.checkBody('lastname', 'Name field is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password  field is required').notEmpty();


    var errors = req.validationErrors();
    if(errors){
      res.render('register',{
        errors:errors
      });
    }else{
      var newUser = new User({
        firstname:firstName,
        lastname:lastName,
        email: email,
        username:username,
        password:password
      });

      User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log(user);
      });

      res.location('/home');
      res.redirect('/home');
    }
});*/

app.get('/days', function(req, res){
  res.render('days.jade');
});

app.get('/years', function(req, res){
  res.render('years.jade',{title:'Register'});
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});