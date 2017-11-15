
class Patron {
    constructor(id, name) {
        this.name = name;
        this.id=id;
    }
    viewShows(theatre) {

        return theatre.getShows().map(e => e.name);
    }
    viewShow(theatre, show_id) {
        let show = theatre.getShow(show_id);
        let response = { "wid": show.id, "show_info": show.show_info, "seating_info": show.seating_info };
        return response;

    }
    viewSectionsOfShow(show) {// should pass theatre and show_id? or show?
    	return show.getSections();
    }
    viewAvailableSeats(show) {

    }
    requestSeats(show, sid, num_seats) {

    }
    purchaseSeats(show,sid, seat_array) {
        for (let i = 0; i < seat_array.length; i++) {
            if(!section.isSeatAvailable(seat_array[i])){
                return null;
            } 
            
        }
        return seat_array.map(e => {
            return new Ticket(e,show, section.getPrice());
        });
         


    }
}
module.exports = Patron;