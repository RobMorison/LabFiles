var fs = require("fs");
var util = require("./util");

try {
    var data = fs.readFileSync('input.txt');
    console.log("Waiting for 3 seconds...");
    util.pause(3000);
    
    console.log(data.toString());
    
} catch (err) {
    console.log(err);
}

console.log("This line will get called AFTER file contents are displayed!");