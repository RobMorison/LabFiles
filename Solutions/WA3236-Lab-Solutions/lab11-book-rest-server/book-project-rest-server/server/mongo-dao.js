const mongodb = require("mongodb"); // mongo client library  
const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const dbName = "bookdb";
const collectionName = "books"
let collection;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    collection = db.collection(collectionName);
}
startup();

// retrieve all books
module.exports.findAllBooks = function (callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((books) => callback(books));
};

// retrieve a single book
module.exports.findBook = function (isbn, callback) {
    let dataPromise = collection.findOne({"isbn": isbn});
    dataPromise.then((book) => callback(book));
};

// delete a single book
module.exports.deleteBook = function (isbn, callback) {
    let dataPromise = collection.deleteOne({"isbn": isbn});
    dataPromise.then((ok) => callback(ok));
};

// update a single book
module.exports.updateBook = function (isbn, book, callback) {
	delete book._id;
    let dataPromise = collection.updateOne( {isbn: isbn}, {$set: book}, {upsert: true}, callback);
    dataPromise.then((ok) => callback(ok));
};

// add a single book
module.exports.addBook = function ( book, callback) {
	delete book._id;
    let dataPromise = collection.insertOne( book );
    dataPromise.then((ok) => callback(ok));
};