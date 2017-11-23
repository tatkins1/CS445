let Show = require("./show");
let Order = require("./order");
let Patron = require("./patron");
let Ticket = require("./ticket");

class TheatreFactory {
    constructor(theatre) {
    	this.theatre=theatre;
        this.show_id = 0;
        this.ticket_id = 0;
        this.order_id = 0;
        this.patron_id = 0;
    }
    createShow(show_info, seating_info) {
        this.show_id++;
        let id = "Sh" + this.show_id;
        let show = new Show(id, show_info, seating_info, this.theatre.theatre_layout);
        return show;
    }
    createTicket(seatid, sectionid, show, price) {
        this.ticket_id++;
        let id = "T" + this.ticket_id;
        return new Ticket(id, seatid, sectionid, show, price);
    }
    createOrder() {
        this.order_id++;
        let id = "O" + this.order_id;
        return new Order(id);
    }
    createPatron(patron_info) {
        if (checkCC(patron_info.cc_number, patron_info.cc_expiration_date)) {

            this.patron_id++;
            let id = "P" + this.patron_id;
            
            let patron= new Patron(id, patron_id.name, patron_id.phone, patron_id.email, patron_id.billing_adsress, patron_id.cc_number, patron_id.cc_expiration_date);
            this.theatre.patrons.push(patron);
            return patron;
        } else {
            return null;
        }


        function checkCC(CC_num, CC_exp) {
            if (CC_num && CC_exp) {
                return true;
            } else {
                false;
            }

        }
    }

}

module.exports = TheatreFactory;