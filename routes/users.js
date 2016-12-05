var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var finalNum = 'twilioProj'
router.get('/', function(req, res, next) {
  var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var From = res.req.query.From;
  var Body = res.req.query.Body;

  if(Body.includes('69')){
    twiml.message('naughty naughty!');
  }
  else{
    twiml.message('Thanks for the message! -Austin');
  }

  // Set our collection
  var collection = db.get('twilioMessages');

  // Submit to the DB
  collection.insert({
      "From" : From,
      "Body" : Body
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {// Success
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString(twiml));
      }
  });
});


module.exports = router;
