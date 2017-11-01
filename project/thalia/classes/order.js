class Order{
	constructor(id,tickets,patron){
		this.id=id;
		this.tickets=tickets;
		this.patron=patron;
		this.date=new Date();
	}
	getTickets(){
		return this.tickets;
	}
	getTotal(){
		let sum=0;
		this.tickets.forEach(function(el) {
			sum=sum+el.price;
		});
		return sum;
		}
	}

	}