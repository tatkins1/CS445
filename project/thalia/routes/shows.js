let express = require('express');
let router = express.Router();
let path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;
let Show = require('../classes/show');

router.post('/', function(req, res, next) {
    try {
        let show_info = req.body.show_info;
        let seating_info = req.body.seating_info;
        let show = theatreFactory.createShow(show_info, seating_info);
        res.send({ "wid": show.getId() }).status(200);
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});
router.put('/:wid', function(req, res, next) {
    try{
        let show_info = req.body.show_info;
        let seating_info = req.body.seating_info;
        let wid = req.params.wid;
        let fakeShow = new Show (1,show_info,seating_info,theatre.theatre_layout);
        theatre.editShow(wid,fakeShow);
        res.send().status(200);
    }
    catch (e){
        console.log(req.url, e)
        res.send().status(500);
    }
});
router.get('/', function(req, res, next) {
    //viewShows
    try {
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
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});
router.get('/:wid', function(req, res, next) {
    try {
        let wid = req.params.wid;
        let show = theatre.getShow(wid);
        let output = {
            "wid": show.id,
            "name": show.name,
            "show_info": show.show_info,
            "seating_info": show.seating_info
        };
        res.send(output).status(200);
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});
router.get('/:wid/sections', function(req, res, next) {
    //viewShowSections
    try {
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
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});
router.get('/:wid/sections/:sid', function(req, res, next) {
    //viewSpecificSection
    try {
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
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});
router.post('/:wid/donations', function(req, res, next) {
    //SubscribeToDonatedTickets
    try {
        let wid = req.body.wid;
        let count = req.body.count;
        let patron_info = req.body.patron_info;
        let show = theatre.getShow(wid);
        let patron = theatreFactory.createPatron(patron_info);
        //patron.donate(theatre,tickets);
        res.send().status(200);
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }
});
router.get('/:wid/donations/:did', function(req, res, next) {
    //viewStatusofDonations
    try {
        let wid = req.params.wid;
        let show = theatre.getShow(wid);
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});

module.exports = router;