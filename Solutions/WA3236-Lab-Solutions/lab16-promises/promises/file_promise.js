var fs = require('fs');

function readFileAsync (file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, function (err, data) {
      if (err) // rejects the promise with "err" as the reason
	return reject(err); 
      else // fulfills the promise with "data" as the value
	resolve(data);        
    });
  });
}

var promise = readFileAsync('input.txt');

promise.then(
  function(data) {
     console.log("Data is: \n" + data);
  })
  .catch(function(err) {
     console.log(err);
  }
);