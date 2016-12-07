var express = require('express');
var router = express.Router();

var mongoCol = 'ClassDB'

// Get request for serving jade templates
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get(mongoCol);
    collection.find({},{},function(e,docs){
        console.log('mong: ', docs);
        res.render('index', {data: docs});
    });
});

// Serve Update mongoDB collection for messages when JQuery sends reqs
// Same as above req except serve only documents and not html templlates
router.post('/', function(req, res) {
    var db = req.db;
    var texts = db.get(mongoCol);
    texts.find({},{},function(e,docs){
        res.send({data: docs});
    });
});


module.exports = router;
