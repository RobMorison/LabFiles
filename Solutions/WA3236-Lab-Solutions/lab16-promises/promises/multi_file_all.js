var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function getFile(index) {
    var filePath = __dirname + "/input" + index + ".txt";
    return fs.readFileAsync(filePath);
   }
   
   function getAllFiles() {
     var promises = [];
     // load all Files in parallel
     for (var i = 0; i <= 1; i++) {
       promises.push(getFile(i+1));
     }
     // return promise that is resolved when all Files are done loading
     return Promise.all(promises);
   }
   
   getAllFiles().then(function(fileArray) {
    // you have an array of File data in fileArray
    console.log("input1.txt " + fileArray[0]);
    console.log("input2.txt " + fileArray[1]);
   })
   .catch(function(err) {
   // an error occurred
    console.log(err);
   });
   