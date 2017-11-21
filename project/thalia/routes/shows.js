let express = require('express');
let router = express.Router();
let path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.post('/', function(req, res, next) {
    let show_info= req.body.show_info;
    let seating_info= req.body.seating_info;
  	let show = theatreFactory.createShow(show_info, seating_info);
   	theatre.addShow(show);
    res.send({"wid":show.getId()}).status(200);
});
router.get('/', function(req, res, next) {
    //viewShows
    console.log("GET worked");
    res.send("Get Worked").status(200);
});
router.get('/*/sections', function(req, res, next) {
    //viewShowSections
});
router.get('/*/sections/*', function(req, res, next) {
    //viewSpecificSection
});
router.post('/*/donations', function(req, res, next) {
    //SubscribeToDonatedTickets
});
router.get('/*/donations/*', function(req, res, next) {
    //viewStatusofDonations
});
router.get('/*', function(req, res, next) {
    //viewShow
});
module.exports = router;