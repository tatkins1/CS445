class Ticket {
	constructor(id, seat, price, order) {
		this.id = id;
		this.seat = seat;
		this.price = price;
		this.order = order;
		this.status=0;//0 for new, 1 for donated and -1 for used
	}
	foo() {
		console.log("ticket class works");
	}
}
module.exports = Ticket;