describe("Ticket", function() {
    var Ticket = require('../../classes/ticket');
    console.log("TicketSpec.js ran!");
    beforeEach(function() {
        ticket = new Ticket(1, "seat1a","secid","rick&morty", 100);
    });
    it("should be able to setOrder", function() {
        ticket.setOrder("order");
        expect(ticket.order).toEqual("order");
    });
    it("should be able to getOrder", function() {
        ticket.setOrder("order");
        expect(ticket.getOrder()).toEqual("order");
    });
    it("should be able to getStatus", function() {

        expect(ticket.getStatus()).toEqual(0);
    });
    it("should be able to be setStatus to -1", function() {
        ticket.setStatus(-1);
        expect(ticket.status).toEqual(-1);
    });
    it("should not be able to be used more than once", function() {
        ticket.use();
        expect(ticket.use()).toEqual(false);
    });
    it("should not be able to be donated if already used", function() {
        ticket.use();
        expect(ticket.donate()).toEqual(false);
    });
    it("should not be able to be donated more than once", function() {
        ticket.donate();
        expect(ticket.donate()).toEqual(false);
    });
    it("should be able to be donated once", function() {

        expect(ticket.donate()).toEqual(ticket.donated);
    });
});