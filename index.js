
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
 
    app.get('/request', function (req, res) {
        res.render('request', {});
    });

    app.post('/request', function (req, res) {
        let firstName= (req.body.firstName);
        let lastName= (req.body.lastName);
        let email= (req.body.email);
        let location= (req.body.location);
        let budget= (req.body.budget);
        let date= (req.body.time);
        
        dbo.collection("initiators").insertOne({firstName,lastName,email,location,budget,date},function(err, respo) {
            if (err) throw err;
            res.render('result', {});        
          });
    });

    app.get('/results', function (req, res) {
        dbo.collection("initiators").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('result', {request:result});
          });
    });


    /*app.get('/:users', function (req, res) {
        res.render('home', {users:req.params.users.split(",")});
    });*/
  

    app.use(express.static('client'));

    app.listen(3003, () => console.log('Example app listening on port 3003!'));
});    





