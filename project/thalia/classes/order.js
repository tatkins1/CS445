class Order {
    constructor(id, wid,sid,patron_id ,tickets) {
        this.sid=sid;
        this.id = id;
        this.wid=wid;
        this.tickets = tickets;
        this.pid = patron_id;
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
    getId(){
        return this.id;
    }
    getPatronId() {
        return this.pid;
    }
    getDate() {
        return this.date;
    }
    getNumTickets(){
    	return this.tickets.length;
    }
}
module.exports = Order;