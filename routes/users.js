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
  var number = res.req.query.From;
  var message = res.req.query.Body;

  //If user request outline respond with url to outline and..
  // force quit to avoid updating database with useless data
  if(message.includes('outline')){
    twiml.message('http://11379db9.ngrok.io/outline');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString(twiml));
    return;
  }

  // 2 collections,
  //  1: User list with data theyve sent,
  //  2: push to big stack of all message to stream to feed
  var collection = db.get('ClassUserList'); // Collection 1
  var texts = db.get('ClassDB');  // Collection 2
  texts.insert( {'Body': message} );

  // Submit to the DB
  var DocExsist = false;
  collection.count({ phone: number}, function(err, count){
    if(count){
      DocExsist = true;
    }
  });

  collection.update(
   { 'phone': number },
   {
      '$push': {'Body': message}
   },
   { upsert: true },
   function (err, doc) {
       if (err) {
           // If it failed, return error
           console.log(err);
           res.end("There was a problem adding the information to the database.");
       }
       else {// Success
         //If its user first message to server serve URL for the outline
         if (!DocExsist) {
           twiml.message('http://11379db9.ngrok.io/outline');
           res.writeHead(200, {'Content-Type': 'text/xml'});
           res.end(twiml.toString(twiml));
         }else if(message.includes('69')){
           twiml.message('naughty naughty!');
           res.writeHead(200, {'Content-Type': 'text/xml'});
           res.end(twiml.toString(twiml));
         }
       }
    });
});


module.exports = router;
