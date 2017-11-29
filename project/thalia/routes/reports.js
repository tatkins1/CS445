var express = require('express');
var router = express.Router();
var path = require('path');
var Ticket = require('../classes/ticket');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;
let ReportGenerator = require("../classes/reportGenerator");
let RG = new ReportGenerator(theatre);
router.get('/', function(req, res, next) {
    //getListofAvailableReports
    res.send(RG.reports).status(200);
});
router.get('/:mrid', function(req, res, next) {
    let mrid = req.params.mrid;
     let report = {};
    if (req.query.show) {
    	let wid =req.query.show;
        switch (mrid) {
            case "801":
                report = RG.getOccupancyReportByShow(wid);
                break;
            case "802":
            console.log("rane");
                report = RG.getRevenueReportByShow(wid);
                break;
            case "803":
                report = RG.getDonatedReportByShow(wid);
                break;
            default:

        }
    } else if (req.query.start) {
    	let startdate= req.query.start;
    	let enddate = req.query.end;

        switch (mrid) {
            case "801":
                report = RG.getOccupancyReportDate(startdate, enddate);
                break;
            case "802":
                report = RG.getRevenueReportDate(startdate, enddate);
                break;
            case "803":
                report = RG.getDonatedReportDate(startdate, enddate);
                break;
            default:

        }
    } else {

        switch (mrid) {
            case "801":
                report = RG.getTotalOccupancyReport();
                break;
            case "802":
                report = RG.getTotalRevenueReport();
                break;
            case "803":
                report = RG.getDonatedReport();
                break;
            default:

        }
        console.log(report);


    }
    res.send(report).status(200);

});

module.exports = router;