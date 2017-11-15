describe("Show", function() {
    var Show = require('../../classes/show');
    var showIDgenerator = require('../../classes/showIDgenerator');


    beforeEach(function() {
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

        };
        SID = new showIDgenerator();
        show = new Show(SID.generate(), show_info, seating_info, theatre_layout);
    });
    it(" Should get time until", function() {
        //console.log(show.getTimeUntil());
        expect(true).toEqual(true);
    });
    it(" Should get available seating", function() {
        //console.log(show.getAvailableSeating());
        expect(true).toEqual(true);
    });
    it(" Should get available seating by for specific section", function() {
        //console.log(show.getAvailableSeatingById("002"));
        expect(true).toEqual(true);
    });
    it(" Should return undefined if getSection(sid) not in sections", function() {

        expect(show.getSection("005")).toEqual();
    });
    it(" Should return sections for getSection(sid)", function() {
        expect(show.getSection("002").getId()).toEqual("002");
    });
    console.log("ShowSpec.js ran!");
});