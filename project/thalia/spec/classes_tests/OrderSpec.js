describe("Order", function() {
    var Order = require('../../classes/order');
    var Ticket = require('../../classes/ticket');

    console.log("OrderSpec.js ran!");
    let ticket_array = [];
    for (let i = 0; i < 3; i++) {
        ticket_array.push(new Ticket(i, "seat" + i, "GOT", 20));
    }
    beforeEach(function() {
        order = new Order(1, ticket_array, "patronObject");
    });
    it("should be able to getTotal", function() {

        expect(order.getTotal()).toEqual(60);
    });
    it("should be able to getTickets", function() {
        expect(order.getTickets()).toEqual(order.tickets);
    });
    it("should be able to getDate", function() {
        expect(order.getDate()).toEqual(order.date);
    });
    it("should be able to getNumTickets", function() {
        expect(order.getNumTickets()).toEqual(3);
    });
    it("should be able to getPatron", function() {
        expect(order.getPatron().constructor.name).toEqual("Patron")
    });
});