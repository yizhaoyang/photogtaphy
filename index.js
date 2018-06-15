const express = require('express')
const app = express()

// create database
var MongoClient = require('mongodb').MongoClient
, format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
if(err) throw err;

var collection = db.collection('initiators');
collection.insert({a:2}, function(err, docs) {
    collection.count(function(err, count) {
        console.log(format("count = %s", count));
    });
});

// Locate all the entries using find
collection.find().toArray(function(err, results) {
    console.dir(results);
    // Let's close the db
    db.close();
});
});



app.get('/', (req, res) => res.send('Hello World!'))
app.get('/mysecret', (req, res) => res.send('This is a confidential page.'))
app.get('/home', (req, res) => res.sendFile('/Users/David/Documents/photography/home/home.html'))
app.get('/request', (req, res) => res.sendFile('/Users/David/Documents/photography/request/request.html'))
app.use(express.static('home'))



app.listen(3000, () => console.log('Example app listening on port 3000!'));