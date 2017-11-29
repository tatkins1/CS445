var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.get('/', function(req, res, next) {
    try {
        let topic = req.query.topic;
        let key = req.query.key;
        let order = {};
        switch (topic) {
            case "order":
                order = theatre.getShows().find(s => {
                    return s.getOrders().find(o => o.id == key);

                });
                break;
        }
        let output = [];
        output.push(order);


        res.send({ "orders": output }).status(200);
    } catch (e) {
        res.send().status(500);
    }

});

module.exports = router;