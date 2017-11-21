var Ticket = require("./ticket");
var Order = require("./order");
class Patron {
    constructor(id, name, phone, email , billing_address, cc_num, cc_exp) {
        this.name = name;
        this.id = id;
        this.phone=phone;
        this.email=email;
        this.billing_address=billing_address;
        this.cc_num=cc_num;
        this.cc_exp=cc_exp;
        this.tickets = null;
    }
    viewShows(theatre) {

        return theatre.getShows().map(e => e.name);
    }
    viewShow(theatre, show_id) {
        let show = theatre.getShow(show_id);
        let response = { "wid": show.id, "show_info": show.show_info, "seating_info": show.seating_info };
        return response;

    }
    viewSectionsOfShow(show) { // should pass theatre and show_id? or show?
        return show.getSections();
    }
    viewAvailableSeats(show) {

    }
    requestSeats(show, sid, num_seats) {
        let section = show.getSection(sid);
        let seatgroups = [];
        for (let i = 0; i < section.seats.length; i++) {
            for (let j = 0; j < section.seats[i].length - num_seats + 1; j++) {
                let seatgroup = [];
                for (let k = 0; k < num_seats; k++) {
                    if (section.seats[i][j + k] == 1) {
                        var x = j + k;
                        seatgroup.push(i + "-" + x);
                    } else {
                        break;
                    }
                }
                if (seatgroup.length == num_seats) {
                    seatgroups.push(seatgroup);
                } else {

                }
            }
        }
        return seatgroups;



    }
    purchaseSeats(theatre, show, sid, seat_array) {
        //checkseats
        //bookseats
        //return order
        var section = show.getSection(sid);
        for (let i = 0; i < seat_array.length; i++) {
            if (!section.isSeatAvailable(seat_array[i])) {
                return null;
            }

        }
        for (let i = 0; i < seat_array.length; i++) {
            section.bookSeat(seat_array[i]);
        }
        var tickets = seat_array.map(e => {
            return new Ticket(e, e, sid, show, section.getPrice());
        });

        var order = new Order("order1", tickets, this.id);
        show.addOrder(order);
        this.tickets = tickets;
        return order;
    }
    donateTickets(theatre, tickets) {
        tickets = tickets.filter(t => {
            return t.isValid();
        });
        tickets.forEach(t => {
            t.donate();
            theatre.getShow(t.show.id).addDonation(t);
        });
        this.tickets = this.tickets.filter(t => {
            for (let i = 0; i < tickets; i++) {
                if (tickets[i].id == t.id) {
                    return false;
                }
            }
            return true;
        });
        //NotifySubscriber();

    }
    subscribeToDonations(theatre, show_id, count) {
        let show = theatre.getShow(show_id);
        show.addSubscriber({ "patron": this, "count": count });
    }
}
module.exports = Patron;