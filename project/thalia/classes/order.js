class Order {
    constructor(id, tickets, patron) {
        this.id = id;
        this.tickets = tickets;
        this.patron = patron;
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
    getPatron() {
        return this.patron;
    }
    getDate() {
        return this.date;
    }
    getNumTickets(){
    	return this.tickets.length;
    }
}
module.exports = Order;