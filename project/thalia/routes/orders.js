var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.post('/', function(req, res, next) {
    try {
        let wid = req.body.wid;
        let sid = req.body.sid;
        let seats = req.body.seats;
        let patron_info = req.body.patron_info;
        let patron = theatreFactory.createPatron(patron_info);
        let seat_array = seats.map(e => { return e.cid });
        let order = theatre.purchaseSeats(patron.getId(), wid, sid, seat_array, theatreFactory);
        //CreateOrder or get orderbyDate
        let output = {};
        if (order) {
            output = {
                "oid": order.getId(),
                "wid": order.wid,
                "show_info": theatre.getShow(wid).show_info,
                "date_ordered": order.date,
                "order_amount": order.getTotal(),
                "tickets": order.tickets.map(e => { return e.id })
            }

        } else {
            output = {
                "error": "Seats not available "
            }

        }
        res.send(output).status(200);
    } catch (e) {
        console.log("Error:", req.url);
        res.send(req.url).status(500);
    }

});
router.get('/', function(req, res, next) {
    try {
        let orders = theatre.getAllOrders();
        let output = orders.map(order => {
            return {
                "oid": order.getId(),
                "wid": order.wid,
                "show_info": theatre.getShow(order.wid).show_info,
                "date_ordered": order.date,
                "order_amount": order.getTotal(),
                "tickets": order.tickets.map(e => { return e.id })
            };

        });
        res.send(output).status(200);
    } catch (e) {
        console.log("Error:", req.url);
        res.send(req.url).status(500);
    }


});
router.get('/:oid', function(req, res, next) {
    try {
        let oid = req.params.oid;
        let order = theatre.getOrder(oid);
        console.log(order);
        let output = {
            "oid": order.getId(),
            "wid": order.wid,
            "show_info": theatre.getShow(order.wid).show_info,
            "date_ordered": order.date,
            "order_amount": order.getTotal(),
            "tickets": order.tickets.map(e => { return e.id })
        }
        res.send(output).status(200);
    } catch (e) {
        console.log("Error:", req.url);
        res.send(req.url).status(500);
    }


});
module.exports = router;