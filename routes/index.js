var express = require('express');
var router = express.Router();

var finalNum = 'twilioProj'

/* GET Userlist page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('twilioMessages');
    collection.find({},{},function(e,docs){
        //console.log('mong: ', docs);
        res.render('index', {data: docs});
    });
});

router.post('/', function(req, res) {
    var db = req.db;
    var collection = db.get('twilioMessages');
    collection.find({},{},function(e,docs){
        //console.log('mong: ', docs);
        res.send({data: docs});
    });
});


module.exports = router;
