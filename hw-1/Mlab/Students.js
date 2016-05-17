'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var studentsSchema = new schema({
	id: 		 {type: Number, index:1, required:true, unique:true},
	name:        {type: String, required: true},
	university:  {type: String, required: true},
	year: 		 {type: String, required: true},
	average:   	 {type: String, required: true}
	}, {collection:'students'});



var students = mongoose.model('students',studentsSchema);
module.exports = students;	
