var express = require('express');
var router = express.Router();

var WebSocketServer = require('websocket').server;
var http = require('http');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.url);
  res.render('twilJade');
});

module.exports = router;
