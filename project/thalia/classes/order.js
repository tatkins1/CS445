class Order {
    constructor(id, tickets, patron_id) {
        this.id = id;
        this.tickets = tickets;
        this.patron_id = patron_id;
        this.date = new Date();
    }
    getTickets() {
        return this.tickets;
    }
    getTotal() {
        let sum = 0;
        this.tickets.forEach(function(el) {
            sum = sum + el.price;
        });
        return sum;
    }
    getPatronId() {
        return this.patron_id;
    }
    getDate() {
        return this.date;
    }
    getNumTickets(){
    	return this.tickets.length;
    }
}
module.exports = Order;