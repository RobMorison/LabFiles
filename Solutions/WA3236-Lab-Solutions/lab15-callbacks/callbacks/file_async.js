var fs = require("fs");
var util = require("./util");

fs.readFile('input.txt', function (err, data) {
 if (err) 
 	return console.error(err);
 	console.log("Waiting for 3 seconds...");
	util.pause(3000);

	console.log(data.toString());
});

console.log("This line will get called BEFORE file contents are displayed!");