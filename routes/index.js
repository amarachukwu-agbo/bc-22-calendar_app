var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
	next();
})
router.get('/', function(req,res,next){
	res.render('index',{title:'Welcome'});
});

router.get('/login', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('login', {title:'Welcome'});
});

router.get('/register', function(req, res){
	res.render('register',{title:'Register'});
})

router.post('/register/send', function(req, res) {

    // ejs render automatically looks in the views folder
    console.log('test');
});

module.exports = router;