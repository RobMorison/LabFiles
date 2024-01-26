var util = require('./util');
var sum = require('./sum');

sum.sum(5,6, function(err, data) {
	if(err) {
 		console.log(err);
 	} else {
 		console.log("Pausing for 3 seconds...");
 		util.pause(3000);

 		console.log("The result is: " + data);
	}
});

console.log("This line will get called BEFORE sum is called!");