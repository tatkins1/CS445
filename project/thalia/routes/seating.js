var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;


router.get('/', function(req, res, next) {
    try {
        if (req.query.show) {
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
            if (options && option < options.length) {
                let output_seats = options[option].map((e, i) => { return { "cid": e, "seat": 1 + parseInt(e.split("-")[1]), "status": "available" }; });
                output = {
                    "wid": wid,
                    "show_info": show.show_info,
                    "sid": sid,
                    "section_name": section.getName(),
                    "starting_seat_id": option,
                    "status": "ok",
                    "seating": {
                        "row": parseInt(output_seats[0].cid.split("-")[0]) + 1,
                        "seats": output_seats
                    }
                }
                console.log(output);
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

            res.send(Object.values(theatre.theatre_layout)).status(200);
        }
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});
router.get('/:sid', function(req, res, next) {
    try {

        let sid = req.params.sid;
        let section_name = theatre.theatre_layout[sid].section_name;

        let seating = theatre.theatre_layout[sid].layout.map((e, i) => {
            let row = (i + 1) + "";

            let seats = [];
            for (let j = 0; j < e; j++) {
                seats.push((j + 1) + "");
            }
            return {
                "row": row,
                "seats": seats
            }
        });

        let output = {
            "sid": sid,
            "section_name": section_name,
            "seating": seating
        }
        res.send(output).status(200);
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});

module.exports = router;