var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.get('/*', function(req, res, next) {
//viewTicket
});
router.post('/*', function(req, res, next) {
//ScanTicket
});
router.post('/donations', function(req, res, next) {
//DonateTicket
});


module.exports = router;
