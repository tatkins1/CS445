class Theatre {
    //refactor to singleton
    constructor(name, theatre_layout, layout_map) {
        this.name = name;
        this.shows = {}; // map of shows
        this.theatre_layout = theatre_layout;
        this.layout_map = layout_map;
        this.patrons = {};
        this.reports = {};
        //this.donations={};


    }
   /* addDonations(donation){
        this.donations[donation.id]=donation;
    }
    getDonations(did){
        return this.donations[did];
    }*/
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
    addPatron(){

    }
    getPatrons(){
        return Object.values(this.patrons);
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
            return id_factory.createTicket(e, wid, sid, pid, section.getPrice());
        });

        var order = id_factory.createOrder(wid,sid, pid, tickets);
        patron.tickets = tickets;
        show.addOrder(order);
        return order;
    }
    donateTickets(patron, tickets) {
        tickets = tickets.filter(t => {
            return t.isDonatable();
        });
        tickets.forEach(t => {
            t.donate();
            this.getShow(t.wid).addDonation(t);
            this.getShow(t.wid).getSection(t.sid).setSeatD(t.seatid);
            
        });
        this.getShow(tickets[0].wid).resolveSubscribers(tickets);
        patron.tickets = patron.tickets.filter(t => {
            for (let i = 0; i < tickets; i++) {
                if (tickets[i].id == t.id) {
                    return false;
                }
            }
            return true;
        });
        
    }
    getAllOrders(){
        let orders=[];
        this.getShows().forEach(show=>{
            show.getOrders().forEach(order=>{
                orders.push(order);
            });
            
        });
        return orders;
    }
    getOrder(oid){
        return this.getAllOrders().find(order=>{

            return order.getId()==oid
        });
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
       let show= this.getShow(show_ID);
        for ( let i in show_object){
            if(i!="id"){show[i]=show_object[i]}
        }
    }
   

}
module.exports = Theatre;