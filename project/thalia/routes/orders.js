var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.post('/', function(req, res, next) {
	let wid =req.body.wid;
	let sid = req.body.sid;
	let seats = req.body.seats;
	let patron_info = req.body.patron_info;
	let patron = theatreFactory.createPatron(patron_info);
	let seat_array= seats.map(e=>{return e.cid});
	let order = theatre.purchaseSeats(patron.getId(), wid, sid, seat_array, theatreFactory);
	//CreateOrder or get orderbyDate
	res.send(order).status(200);
});
router.get('/', function(req, res, next) {
	//ViewAllOrders
});
router.get('/:oid', function(req, res, next) {
	//viewOrder
});
module.exports = router;
