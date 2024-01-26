var sum = require('./sum_bluebird');
var bluebird = require('bluebird');
var sum = bluebird.promisifyAll(sum);
var promise = sum.sumAsync(5,6);

promise.then(
 function(data) {
    console.log("Sum is: \n" + data);
 }) 
.catch(function(err) {
    console.log(err);
});