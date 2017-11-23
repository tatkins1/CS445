class Theatre {
    //refactor to singleton
    constructor(name, theatre_layout, layout_map) {
        this.name = name;
        this.shows = {}; // map of shows
        this.theatre_layout = theatre_layout;
        this.layout_map = layout_map;
        this.patrons=[];
        this.reports={};

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
     requestSeats(wid, sid, num_seats) {
        let show= this.getShow(wid);
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
    addOrder(order){
        this.orders.push(order);
    }
    getOrder(orderID){

    }

}
module.exports = Theatre;