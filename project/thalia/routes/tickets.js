var express = require('express');
var router = express.Router();
var path = require('path');

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
