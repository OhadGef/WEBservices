var http = require('http');
var Hotel = require('./hotel/hotels_stars');
var eventsConfig = require('./hotel/config');

var hotels = new Hotel();

console.log("\n_____________________________________________\n" +
				"\tHello and Welcome to Ohad's Hotle\n\n");

hotels.on(eventsConfig.STAR, function(){

	console.log("hotel: "+hotels.name + "\tfrom: " + hotels.country+
				"\trate in "+hotels.stars+ " stars.\n");
});


http.createServer(function (req,res){
	res.writeHead(200, {'content-Type': 'text/plain'});
	res.write("\n***********************************\n" +
				"Hello and Welcome to Ohad's Hotle (:\n"+
				"***********************************\n\n\n");
	res.write("hotel:\t"+hotels.name + "\nfrom:\t" + hotels.country+
				"\nrate in "+hotels.stars+ " stars.\n");
	res.end();
}).listen(8080);



hotels.like();
hotels.like();
hotels.unlike();
hotels.unlike();
hotels.unlike();
hotels.like();
hotels.like();
hotels.like();
