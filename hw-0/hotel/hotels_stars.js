'use strict';
var EventEmitter = require('events');
var eventsConfig = require('./config');


module.exports =class MyHotle extends EventEmitter{
	constructor(){
		super();
		this.name = "King David";
		this.country = "USA";
		this.stars = 0;
	}

	like(){ 
		this.stars++;
		this.emit(eventsConfig.STAR);
	}
	
	unlike(){
		this.stars--;

		if(this.stars <0)
		{
			this.stars=0;
			this.emit(eventsConfig.STAR);
		}
		else
			this.emit(eventsConfig.STAR);
	}

}
	