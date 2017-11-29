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
    if (req.query.start_date) {
        try {
            let start_date = parseInt(req.query.start_date);
            let end_date = parseInt(req.query.end_date);
            let orders = theatre.getAllOrders().filter(o => {
                let day = (o.date.getDate()) + "";
                let year = (o.date.getFullYear()) + "";
                let month = (o.date.getMonth() + 1) + "";
                let date = year + month + day;
                date = parseInt(date);
                
                return date >= start_date && date <= end_date
            });
            let output = orders.map(order => {
                let patron = theatre.getPatron(order.pid);
                let patron_info = {
                    "name": patron.name,
                    "phone": patron.phone,
                    "email": patron.email,
                    "billing_address": patron.billing_address,
                    "cc_number": "xxxxxxxxxxxx" + patron.cc_num.slice(-4),
                    "cc_expiration_date": patron.cc_exp
                }
                return {
                    "oid": order.getId(),
                    "wid": order.wid,
                    "show_info": theatre.getShow(order.wid).show_info,
                    "date_ordered": order.date,
                    "order_amount": order.getTotal(),
                    "number_of_tickets": order.tickets.length,
                    "patron_info": patron_info
                };

            });
            res.send(output).status(200);
        } catch (e) {
            console.log("Error:", req.url, e);
            res.send(req.url).status(500);
        }
    } else {
        try {
            let orders = theatre.getAllOrders();

            let output = orders.map(order => {
                let patron = theatre.getPatron(order.pid);
                let patron_info = {
                    "name": patron.name,
                    "phone": patron.phone,
                    "email": patron.email,
                    "billing_address": patron.billing_address,
                    "cc_number": "xxxxxxxxxxxx" + patron.cc_num.slice(-4),
                    "cc_expiration_date": patron.cc_exp
                }
                return {



                    "oid": order.getId(),
                    "wid": order.wid,
                    "show_info": theatre.getShow(order.wid).show_info,
                    "date_ordered": order.date,
                    "order_amount": order.getTotal(),
                    "number_of_tickets": order.tickets.length,
                    "patron_info": patron_info
                }




            });
            res.send(output).status(200);
        } catch (e) {
            console.log("Error:", req.url, e);
            res.send(req.url).status(500);
        }
    }



});

router.get('/:oid', function(req, res, next) {
    try {
        let oid = req.params.oid;
        let order = theatre.getOrder(oid);
        let patron = theatre.getPatron(order.pid);
        let patron_info = {
            "name": patron.name,
            "phone": patron.phone,
            "email": patron.email,
            "billing_address": patron.billing_address,
            "cc_number": "xxxxxxxxxxxx" + patron.cc_num.slice(-4),
            "cc_expiration_date": patron.cc_exp
        }
        let tickets = order.tickets.map(t => {
            return {
                "tid": t.getId(),
                "status": t.getStatus()
            };
        });
        let output = {
            "oid": order.getId(),
            "wid": order.wid,
            "show_info": theatre.getShow(order.wid).show_info,
            "date_ordered": order.date,
            "order_amount": order.getTotal(),
            "number_of_tickets": order.tickets.length,
            "patron_info": patron_info,
            "tickets": tickets
        }
        res.send(output).status(200);
    } catch (e) {
        console.log("Error:", req.url);
        res.send(req.url).status(500);
    }


});
module.exports = router;