var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.post('/', function(req, res, next) {
	//CreateOrder or get orderbyDate
});
router.get('/', function(req, res, next) {
	//ViewAllOrders
});
router.post('/*', function(req, res, next) {
	//viewOrder
});
module.exports = router;
