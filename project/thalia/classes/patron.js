var Ticket = require("./ticket");
var Order = require("./order");
class Patron {
    constructor(id, name) {
        this.name = name;
        this.id = id;
        this.order
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
            for (let j = 0; j < section.seats[i].length - num_seats+1; j++) {
                let seatgroup = [];
                for (let k = 0; k < num_seats; k++) {
                    if (section.seats[i][j + k] == 1) {
                        var x=j+k;
                        seatgroup.push(i+"-"+x);
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
        var tickets= seat_array.map(e => {
            return new Ticket(e, e, show, section.getPrice());
        });
        
        var order= new Order("order1", tickets, this);
        theatre.addOrder(order);
        this.order=order;
        return order;
    }
}
module.exports = Patron;