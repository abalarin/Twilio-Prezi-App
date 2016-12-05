var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/', function(req, res) {
  res.render('outline');
});

module.exports = router;
