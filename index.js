const express = require('express')
const app = express()

//create database
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017/test';
 
// Database Name
const dbName = 'requests';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});


const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('initiators');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(null, err);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }





// form validation try
$('#myForm')
    .ajaxForm({
        dataType : 'json',
        success : function (response) {
            alert("Your request in under process now" + response);
        }
    })
;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/mysecret', (req, res) => res.send('This is a confidential page.'))
app.get('/home', (req, res) => res.sendFile('/Users/David/Documents/photography/home/home.html'))
app.get('/request', (req, res) => res.sendFile('/Users/David/Documents/photography/request/request.html'))


app.use(express.static('home'))
app.listen(3000, () => console.log('Example app listening on port 3000!'));


