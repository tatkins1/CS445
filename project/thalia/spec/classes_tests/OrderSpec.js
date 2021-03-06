describe("Order", function() {
    var Order = require('../../classes/order');
    var Ticket = require('../../classes/ticket');
    var Patron = require('../../classes/patron');
    var showIDgenerator = require("../../classes/showIDgenerator");
    var ticketIDgenerator = require("../../classes/ticketIDgenerator");
    var patronIDgenerator = require("../../classes/patronIDgenerator");
    var orderIDgenerator = require("../../classes/orderIDgenerator");


    console.log("OrderSpec.js ran!");

    beforeEach(function() {
        
        PID = new patronIDgenerator();
        OID = new orderIDgenerator();
        TID = new ticketIDgenerator();
        let ticket_array = [];
        for (let i = 0; i < 3; i++) {
            ticket_array.push(new Ticket(TID.generate(), "seat" + i,"sectionId", "GOT", 20));
        }
        patron = new Patron(PID.generate(), 'Jill','123-456-7890', 'john.doe@example.com','123 Main ST, Anytown, IL 45678', '1234567890987654', '12/21');
        order = new Order(OID.generate(), "wid","sid","patron_id" ,ticket_array);

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
    it("should be able to getPatronId", function() {
        expect(order.getPatronId()).toEqual("patron_id")
    });
});