describe("Patron", function() {
    var Patron = require('../../classes/patron');
    var Theatre = require('../../classes/theatre');
    var Show = require('../../classes/show');
    var showIDgenerator = require("../../classes/showIDgenerator");
    var ticketIDgenerator = require("../../classes/ticketIDgenerator");
    var patronIDgenerator = require("../../classes/patronIDgenerator");
    var orderIDgenerator = require("../../classes/orderIDgenerator");

    var theatre_layout = {
        "001": {
            "name": "Front right",
            "sid": "001",
            "layout": [4, 4, 4, 4]
        },
        "002": {
            "name": "Front centre",
            "sid": "002",
            "layout": [4, 4, 5, 6]
        },
        "003": {
            "name": "Front left",
            "sid": "003",
            "layout": [4, 4, 4, 4]
        },
        "004": {
            "name": "Main right",
            "sid": "004",
            "layout": [5, 5, 5]
        },
        "005": {
            "name": "Main centre",
            "sid": "005",
            "layout": [6, 7, 8]
        },
        "006": {
            "name": "Main left",
            "sid": "006",
            "layout": [5, 5, 5]
        }

    }
    var show_info = {
        "name": "King Lear",
        "web": "http://www.example.com/shows/king-lear",
        "date": "2017-12-05",
        "time": "13:00"
    };
    var seating_info = [{
            "sid": "001",
            "price": 600
        },
        {
            "sid": "002",
            "price": 75
        },
        {
            "sid": "003",
            "price": 60
        }
    ];
    console.log("PatronSpec.js ran!");
    beforeEach(function() {
        SID = new showIDgenerator();
        PID = new patronIDgenerator();
        patron = new Patron(PID.generate(), 'Jill','123-456-7890', 'john.doe@example.com','123 Main ST, Anytown, IL 45678', '1234567890987654', '12/21');
        theatre = new Theatre('Thalia', theatre_layout, {});
        show = new Show(SID.generate(), show_info, seating_info, theatre.getLayout());

    });
    it("should be able to requestSeats", function() {
        show.getSection("001").seats[1][1]=0;
        show.getSection("001").seats[2][0]=0;
        show.getSection("001").seats[3][2]=0;
        show.getSection("001").seats[0][0]=0;
        //console.log(patron.requestSeats(show, "001",3));
        expect(true).toEqual(true);
    });
    it("should be able to purchaseSeats", function() {
        var order = patron.purchaseSeats(theatre, show, "001", ['2-1', '2-2', '2-3']);
        console.log(show.getSection("001").getAvailableSeats());
        console.log(order);
    });
    it("should be able to viewSections of show", function() {
        expect(patron.viewSectionsOfShow(show)).toEqual(show.sections);
    });
    it("should be able to viewShows", function() {

        expect(patron.viewShows(theatre)).toEqual([]);
        theatre.addShow(show);
        expect(patron.viewShows(theatre)).toEqual([show.name]);
    });
    it("should be able to viewShow", function() {
        theatre.addShow(show);
        //console.log(patron.viewShow(theatre, show.id));
        expect(patron.viewShow(theatre, show.id)).toEqual({ "wid": show.id, "show_info": show_info, "seating_info": seating_info });
    });
    it("should be able to donate tickets", function() {
        theatre.addShow(show);
        patron.purchaseSeats(theatre, show, "001", ['2-1', '2-2', '2-3']);
        patron.donateTickets(theatre, patron.tickets);
    });
    it("should be able to subscribe to donations", function() {
        theatre.addShow(show);
        patron.subscribeToDonations(theatre, show.getId(), 2);
    });
});