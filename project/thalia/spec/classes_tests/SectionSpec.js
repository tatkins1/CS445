describe("Section", function() {
    var Section = require("../../classes/section");
    beforeEach(function() {
        var layout = {
            "name": "Front centre",
            "sid": "002",
            "layout": [4, 4, 5, 6]
        };
        section = new Section(layout, 100);
    });
    it("Should get available seating", function() {
        console.log(section.getAvailableSeats());

    });
    it("Should get be able to get seat", function() {
        expect(section.getSeat("1-2")).toEqual(1);
    });
    it("Should get be able to set seat", function() {
        section.setSeat("1-2");
        expect(section.getSeat("1-2")).toEqual(0);
    });
    it("Should return true if seat is available", function() {
        expect(section.isSeatAvailable("1-2")).toEqual(true);
    });
    it("Should be able to get price", function() {
        expect(section.getPrice()).toEqual(100);
    });

    it("Should be able to set price", function() {
        section.setPrice(200);
        expect(section.getPrice()).toEqual(200);
    });


});