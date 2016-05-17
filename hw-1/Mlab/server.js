
var ws = require('./ws.js');
var jsondata = ws();


var express = require('express');
var app = express();

var port = process.env.PORT||3000;

app.get('/all' , function(req,res) {
	res.json(jsondata.getAllData());
	console.log("get in to the json");
});

app.param('id',function(req,res,next,value){
	console.log("\nRequest id:"+value);
	next();
});

app.get('/student/:id',function(req,res) {
	var response = req.params.id;
	console.log(response);
	res.json(jsondata.getStudentById(response));	
});
app.param('university',function (req,res,next,value){
	console.log("\nRequest University:"+value);
	next();
});

app.get('/university/:university',function(req,res){
	var university = req.params.university;
	console.log(university);
	res.json(jsondata.getUniversity(university));
});

app.get('/',function(req,res){
	res.redirect('https://github.com/OhadGef/ws_hw1');
});

app.get('*',function (req,res){
	res.send("page not found..");
});

app.listen(port);
console.log('listen on port: ' +port);
