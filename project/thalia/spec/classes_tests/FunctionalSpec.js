describe("Thalia", function() {
    var Theatre = require("../../classes/theatre");
    var Patron = require("../../classes/patron");
    var Show = require("../../classes/show");
    var Section = require("../../classes/section");
    var Order = require("../../classes/order");
    var Ticket = require("../../classes/ticket");
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


    });
    it(" must be able create show", function() {
        
    });
   
    it("must be able to generate Occupancy report", function() {
        
    });
    it("must be able to generate revenue report", function() {
    
    });
    
    it("must be able to create order", function() {

    });
    
});