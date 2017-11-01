describe("Patron", function() {
    var Patron = require('../../classes/patron');
    console.log("PatronSpec.js ran!");
    beforeEach(function() {
        patron = new Patron('Jill');
    });
    it("should be able to return 2", function() {
        patron.return2();
        expect(patron.return2()).toEqual(2);
    });
});