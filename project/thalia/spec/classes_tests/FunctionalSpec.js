describe("Thalia", function() {
    var Theatre = require("../../classes/theatre");
    var Patron = require("../../classes/patron");
    var Show = require("../../classes/show");
    var Section = require("../../classes/section");
    var Order = require("../../classes/order");
    var Ticket = require("../../classes/ticket");
    var showIDgenerator = require("../../classes/showIDgenerator");
    var ticketIDgenerator = require("../../classes/ticketIDgenerator");
    var patronIDgenerator = require("../../classes/patronIDgenerator");
    var orderIDgenerator = require("../../classes/orderIDgenerator");
    var ReportGenerator = require("../../classes/reportGenerator");
    var TheatreFactory = require("../../classes/TheatreFactory");

    //--- layout object
    var patron_info = {
        "name": "John Doe",
        "phone": "123-456-7890",
        "email": "john.doe@example.com",
        "billing_address": "123 Main ST, Anytown, IL 45678",
        "cc_number": "1234567890987654",
        "cc_expiration_date": "12/21"
    };
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
            "price": 60
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
    var show_info2 = {
        "name": "GOT",
        "web": "http://www.example.com/shows/GOT",
        "date": "2017-12-07",
        "time": "13:00"
    };
    var seating_info2 = [{
            "sid": "002",
            "price": 40
        },
        {
            "sid": "004",
            "price": 50
        },
        {
            "sid": "005",
            "price": 40
        }
    ];
    beforeEach(function() {
        SID = new showIDgenerator();
        PID = new patronIDgenerator();

        theatre = new Theatre('Thalia', theatre_layout, {});
        show = new Show(SID.generate(), show_info, seating_info, theatre.getLayout());
        show2 = new Show(SID.generate(), show_info2, seating_info2, theatre.getLayout());

        theatreFactory = new TheatreFactory(theatre);
        show3 = theatreFactory.createShow(show_info, seating_info);
        patron = theatreFactory.createPatron(patron_info);


    });
    it("manager must be able to add show", function() {
        theatre.addShow(show);
        //console.log(theatre.shows);
        //expect(theatre.shows[show.id]).toEqual(show);
    });
   
    it("generate Occupancy report", function() {
        theatre.addShow(show);
        theatre.addShow(show2);
        show.getSection("001").seats[1][1] = 0;
        show.getSection("001").seats[2][0] = 0;
        show.getSection("001").seats[3][2] = 0;
        console.log(show.getId());
        let RG = new ReportGenerator(theatre);
        console.log(RG.getTotalOccupancy());
        console.log(RG.getOccupancyByShow(show2.getId()));
    });
    it("generate revenue report", function() {
        //theatre.addShow(show);
        //theatre.addShow(show2);
        //patron.purchaseSeats(theatre, show, "001", ['2-1', '2-2', '2-3']);
        //console.log(show.orders);
        //let RG = new ReportGenerator(theatre);
        //console.log(RG.getTotalRevenue());
    });
    
    it("makeOrder", function() {

        console.log(theatre.purchaseSeats(patron.getId(), show3.getId(), "001", ['2-1', '2-2', '2-3'], theatreFactory));
        console.log(patron.tickets);
        console.log(show3.orders);
        expect(true).toEqual(true);
    });
    
});