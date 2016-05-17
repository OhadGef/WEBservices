var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds023932.mlab.com:23932/ex1_students');
var User = require('./user');

mongoose.connection.once('open',function (){
	User.find({}, function(err,User) {
		if(err) throw err;
		console.log(User);
		mongoose.disconnect();
	});
});



