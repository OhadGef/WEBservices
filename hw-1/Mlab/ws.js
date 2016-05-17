
var fs = require('fs');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds023932.mlab.com:23932/ex1_students');
var User = require('./students.js');
var data;

//var contents = fs.readFileSync("./Students.json");
//var data = JSON.parse(contents);
 mongoose.connection.once('open',function (){
  
});


var dd = function(){

  this.getAllData = function (){
 
    User.find({}).exec( function(err,User) {
    if(err) throw err;
      console.log(data);
      data = User;
    });
    return data;
  };

  this.getStudentById = function(idStudent){
  	 User.find({id: Number(idStudent)}).exec( function(err,User) {
    if(err) throw err;
      console.log(data);
      data = User;
    });
    return data;
  };

  this.getUniversity = function(univerityName){
  	 User.find({university: univerityName}).exec( function(err,User) {
    if(err) throw err;
      console.log(data);
      data = User;
    });
    return data;
  };

};


module.exports = function (info){
	var rec = new dd();
	rec.getAllData();
	return rec; 
};

