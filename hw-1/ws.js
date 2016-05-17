'use strict';
var fs = require('fs');

var contents = fs.readFileSync("./Students.json");
var data = JSON.parse(contents);

var dd = function(){

  this.getAllData = function (){
    return data;
  };

  this.getStudentById = function(idStudent){
    for (var i in data.students){
      if (data.students[i].id == idStudent )
        return data.students[i];
    }
  };

  this.getUniversity = function(univerityName){
    var list = {};
    var j=0;
    for(var i in data.students){
      if(data.students[i].university == univerityName){
        list[j] = data.students[i];
        j++;
      }
    }
    return list;
  }

};


module.exports = function (info){
  var rec = new dd();
  rec.getAllData();
  return rec; 
};