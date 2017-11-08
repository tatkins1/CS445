describe("Patron", function() {
    var Patron = require('../../classes/patron');
    var Theatre = require('../../classes/theatre');
    console.log("PatronSpec.js ran!");
    beforeEach(function() {
        theatre = new Theatre('Thalia', 'layout');
        patron = new Patron('Jill');
    });
    it("should be able to purchaseSeats", function() {
        patron.purchaseSeats([]);
    });
    it("should be able to useTickets", function() {
        patron.useTickets([]);
    });
    it("should be able to viewShows", function() {
        patron.viewShows(theatre);
    });
    it("should be able to viewSeats", function() {
        patron.viewSeats(show);
    });
    it("should be able to donate tickets", function() {
        patron.donate([]);
    });
});