var express = require('express');
var router = express.Router();

var accountSid = 'ACea45b8f40c69d717e0b0c31d62b5f3e9';
var authToken = 'c90bc2bbb89615700d63aa53cc96b03b';
var client = require('twilio')(accountSid, authToken);

var mssgs = [];

client.messages.list(function(err, data) {
    data.messages.forEach(function(message) {
        if(message.from != '+12015741835'){
          mssgs.push({from : message.from, body: message.body});
          console.log(message.body);
        }
    });
    console.log(mssgs);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {list: mssgs});
});

module.exports = router;
