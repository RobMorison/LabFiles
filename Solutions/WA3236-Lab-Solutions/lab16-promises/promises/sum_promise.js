function sum(a, b, callback) {
	var err = null;
	if(a < 0 || b < 0)
		err = "Argument must not be negative!";
	var result = a + b;
	setImmediate(function(){
        callback(err, result);
    });
}

function sumAsync (a, b) {
	return new Promise(function(resolve, reject) {
	   sum(a, b, function(err, data) {
		  if(err)
			 return reject(err);
		  else
			 resolve(data);
		  });
	   });
   }
      

module.exports.sum = sum;
module.exports.sumAsync = sumAsync;