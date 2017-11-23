var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;


router.get('/', function(req, res, next) {
    if (req.query.show) {
    	console.log("HELLO");
        let wid = req.query.show;
        let sid = req.query.section;
        let show = theatre.getShow(wid);
        let section = show.getSection(sid);
        let count = req.query.count;
        let option = 0;
        let output = {};
        if (req.query.starting_seat_id) {
            option = req.query.starting_seat_id;
        }

        let options = (theatre.requestSeats(wid, sid, count));
        if (options&& option<options.length) {
            output = {
                "wid": wid,
                "show_info": show.show_info,
                "sid": sid,
                "section_name": section.getName(),
                "starting_seat_id": option,
                "status": "ok",
                "seating": options[option].map((e,i) => { return { "cid": e, "seat":1+i, "status": "available" }; })
            }
            console.log(options[option]);
        } else {
            output = {
                "wid": wid,
                "show_info": show.show_info,
                "sid": sid,
                "section_name": section.getName(),
                "starting_seat_id": option,
                "status": "Error: " + count + " contiguous seats not available",
                "seating": []
            };
        }

        res.send(output).status(200);
    } else {

        res.send(theatre.theatre_layout).status(200);
    }
});
router.get('/:sid', function(req, res, next) {
    //GET http://localhost:8080/thalia/seating?show=308&section=123&count=3
    let sid = req.params.sid;
    res.send(theatre.theatre_layout[sid]).status(200);
});

module.exports = router;