var express = require('express');
var router = express.Router();
var path = require('path');
let main = require('../main.js');
let theatre = main.theatre;
let theatreFactory = main.theatreFactory;

router.get('/:tid', function(req, res, next) {
    //viewTicket
    try {
        let tid = req.params.tid;
        let patrons = theatre.getPatrons();
        let ticket = findTicket(patrons, tid);

        console.log(ticket);
        let output = {
            "tid": ticket.id,
            "price": ticket.price,
            "status": "open",
            "wid": ticket.wid,
            "show_info": theatre.getShow(ticket.wid).show_info,
            "patron_info": theatre.getPatron(ticket.pid).patron_info,
            "sid": ticket.sid,
            "section_name": theatre.theatre_layout[ticket.sid].name,
            "seating": [{
                "row": parseInt(ticket.seatid.split("-")[0]) + 1,
                "seats": [{
                    "cid": ticket.seatid,
                    "seat": parseInt(ticket.seatid.split("-")[1]) + 1
                }]
            }]
        };
        res.send(output).status(200);
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }



});
router.post('/donations', function(req, res, next) {
    try {
        let ticket_ids = req.body.tickets;
        let patrons = theatre.getPatrons()
        tickets = ticket_ids.map(tid => {
            return findTicket(patrons, tid);
        });
        let patron = theatre.getPatron(tickets[0].pid);
        theatre.donateTickets(patron, tickets);
        res.send({ "tickets": ticket_ids }).status(200);
    } catch (e) {
        console.log("Error:", req.url, e);
        res.send(req.url).status(500);
    }

});
router.post('/:tid', function(req, res, next) {
    let tid = req.params.tid;
    let patrons = theatre.getPatrons();
    let ticket = findTicket(patrons, tid);
    ticket.use();



    res.send(req.body).status(200)
});

function findTicket(patrons, tid) {
    for (let i = 0; i < patrons.length; i++) {
        let ticket = patrons[i].tickets.find(ticket => tid == ticket.id);
        if (ticket) {
            return ticket;
        }
    }
}


module.exports = router;