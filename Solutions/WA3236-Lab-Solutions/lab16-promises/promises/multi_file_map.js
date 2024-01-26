var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));


function getAllFiles() {
  return Promise.map(['input1.txt', 'input2.txt'], function(fileName) {
  return fs.readFileAsync(fileName);
 });
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
   