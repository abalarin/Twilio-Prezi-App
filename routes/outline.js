var express = require('express');
var router = express.Router();

// Just serve my simple html outline page for users to follow along ppt
router.get('/', function(req, res) {
  res.render('outline');
});

module.exports = router;
