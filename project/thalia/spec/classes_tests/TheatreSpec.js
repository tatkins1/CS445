describe("Theatre", function() {
    var showIDgenerator = require("../../classes/showIDgenerator");
    var Theatre = require("../../classes/theatre");
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
    var map = {};
    beforeEach(function() {
        theatre = new Theatre('Thalia', theatre_layout, map);
    });
    it("Should do be able to addShow", function() {
        var show = { "showid": "001", "name": "Alice in Wonderland" };
        theatre.addShow(show);
        expect(Object.keys(theatre.shows).length).toEqual(1);
    });
    it("Should be able to get all Shows", function() {
        var show = { "showid": "001", "name": "Alice in Wonderland" };
        theatre.addShow(show);
        expect(theatre.getShows()[0].name).toEqual("Alice in Wonderland");

    });
    it("Should be able to get show by showID", function() {
        var show = { "showid": "001", "name": "Alice in Wonderland" };
        theatre.addShow(show);
        theatre.getShow(show.showid);
        expect(theatre.getShow().name).toEqual(show.name);

    });
    it("Should be able to edit show", function() {
        var show = { "showid": "001", "name": "Alice in Wonderland" };
        var show2 = { "showid": "002", "name": "GOT" };

        theatre.addShow(show);
        theatre.editShow(show.showid, show2);

    });


    console.log("TheatreSpec.js ran!");



});