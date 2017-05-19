var mongoose = require('mongoose');
mongodbUri = 'mongodb://Amara:triumph22@ds143141.mlab.com:43141/calendarapp';
//mongoose.connect('mongodb://Amara:triumph22@ds143141.mlab.com:43141/calendarapp');
var db = mongoose.connection;
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

mongoose.connect(mongodbUri, options);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {console.log("Great success!")});

var userSchema = mongoose.Schema({
	username:{
		type:String,
		index:true
	},
	password:{
		type:String

	},
	email:{
		type:String
	},
	firstname:{
		type:String
	},
	lastname:{
		type:String
	}
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback){
	newUser.save(callback);
}