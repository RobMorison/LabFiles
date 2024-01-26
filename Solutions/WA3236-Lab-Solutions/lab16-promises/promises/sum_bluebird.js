function sum(a, b, callback) {
	var err = null;
	if(a < 0 || b < 0)
		err = "Argument must not be negative!";
	var result = a + b;
	setImmediate(function(){
        callback(err, result);
    });
}

module.exports.sum = sum;
