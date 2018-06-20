
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongo = require('mongodb');

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("request");

    const app = express();
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
 
    









/////////////////// Database Name
const dbName = 'requests';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
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




app.get('/', (req, res) => res.send('Hello World!'))
app.get('/mysecret', (req, res) => res.send('This is a confidential page.'))
app.get('/client', (req, res) => res.sendFile('/Users/David/Documents/photography/client/home.html'))
app.get('/request', (req, res) => res.sendFile('/Users/David/Documents/photography/client/home.html'))


app.use(express.static('home'))
app.listen(3000, () => console.log('Example app listening on port 3000!'));


