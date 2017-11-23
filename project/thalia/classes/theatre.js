class Theatre {
    //refactor to singleton
    constructor(name, theatre_layout, layout_map) {
        this.name = name;
        this.shows = {}; // map of shows
        this.theatre_layout = theatre_layout;
        this.layout_map = layout_map;
        this.patrons = {};
        this.reports = {};

    }
    getShows() {
        return Object.values(this.shows);
    }
    getShow(show_id) {
        if (this.shows[show_id]) {
            return this.shows[show_id];
        } else {
            return null;
        }


    }
    getPatron(pid) {
        return this.patrons[pid];
    }
    requestSeats(wid, sid, num_seats) {
        let show = this.getShow(wid);
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
    purchaseSeats(pid, wid, sid, seat_array, id_factory) {
        //checkseats
        //bookseats
        //return order
        var patron = this.getPatron(pid);
        var show = this.getShow(wid);
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
            return id_factory.createTicket(e, wid, sid, section.getPrice());
        });

        var order = id_factory.createOrder(wid,sid, pid, tickets);
        patron.tickets = tickets;
        show.addOrder(order);
        return order;
    }
    getLayout() {
        return this.theatre_layout;
    }
    editLayout(newlayout) {
        this.section_layout = newlayout;
    }
    addShow(show_object) {
        this.shows[show_object.id] = show_object;

    }
    editShow(show_ID, show_object) {
        //blah
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrder(orderID) {

    }

}
module.exports = Theatre;