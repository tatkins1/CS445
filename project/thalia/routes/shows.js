let express = require('express');
let router = express.Router();
let path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.post('/', function(req, res, next) {
    let show_info = req.body.show_info;
    let seating_info = req.body.seating_info;
    let show = theatreFactory.createShow(show_info, seating_info);
    res.send({ "wid": show.getId() }).status(200);
});
router.get('/', function(req, res, next) {
    //viewShows
    console.log("GET worked");
    let shows = theatre.getShows();
    let output = shows.map(e => {
        return {
            "wid": e.id,
            "name": e.name,
            "show_info": e.show_info,
            "seating_info": e.seating_info
        };
    });
    res.send(output).status(200);
});
router.get('/:wid', function(req, res, next) {
    let wid = req.params.wid;
    let show = theatre.getShow(wid);
    let output = {
        "wid": show.id,
        "name": show.name,
        "show_info": show.show_info,
        "seating_info": show.seating_info
    };
    res.send(output).status(200);
});
router.get('/:wid/sections', function(req, res, next) {
    //viewShowSections
    let wid = req.params.wid;
    let show = theatre.getShow(wid);
    let sections = show.getSections();
    let output = sections.map(section => {
        return {
            "sid": section.getName(),
            "section_name": section.getId(),
            "price": section.getPrice()
        };
    });
    res.send(output).status(200);
});
router.get('/:wid/sections/:sid', function(req, res, next) {
    //viewSpecificSection
    let wid = req.params.wid;
    let show = theatre.getShow(wid);
    let sid = req.params.sid;
    let section = show.getSection(sid);
    let output = {
        "sid": section.getName(),
        "section_name": section.getId(),
        "price": section.getPrice()
    };
    res.send(output).status(200);
});
router.post('/:wid/donations', function(req, res, next) {
    //SubscribeToDonatedTickets
    let wid = req.body.wid;
    let count = req.body.count;
    let patron_info = req.body.patron_info;
    let show = theatre.getShow(wid);
    let patron = theatreFactory.createPatron(patron_info);
    //patron.donate(theatre,tickets);
    res.send().status(200);
});
router.get('/:wid/donations/:did', function(req, res, next) {
    //viewStatusofDonations
    let wid = req.params.wid;
    let show = theatre.getShow(wid);
});

module.exports = router;