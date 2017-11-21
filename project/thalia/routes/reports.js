var express = require('express');
var router = express.Router();
var path = require('path');
var Ticket = require('../classes/ticket');

router.get('/', function(req, res, next) {
//getListofAvailableReports
});
router.get('/*', function(req, res, next) {
//getReport
});

module.exports = router;
