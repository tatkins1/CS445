let Section = require("./section");
class Show {
    constructor(id, show_info, seating_info, theatre_layout) {
        this.id = id;
        this.name = show_info.name;
        this.show_info = show_info;
        this.datetime = new Date(show_info.date + "T" + show_info.time + ":00Z");
        this.date = show_info.date.split("-").reduce(a => a, "");
        this.seating_info = seating_info;
        this.orders = {};
        this.donations = [];
        this.subscriptions = [];
        //this.tickets={};
        this.sections = seating_info.map(e => {
            return new Section(theatre_layout[e.sid], e.price);
        });
    }
    /* addTicket(ticket){
         return this.tickets[tickets.id]=ticket;

     }
     getTicket(tid){
         return this.tickets[tid];
     }*/
    addDonation(donation) {
        this.donations.push(donation);
    }
    getDonation(did) {
        return this.donations.find(d => {
            return d.id == did;
        });
    }
    addOrder(order) {
        this.orders[order.getId()] = order;
    }
    getId() {
        return this.id;
    }
    addSubscription(subscription) {
        this.subscriptions.push(subscription);
    }
    getSubscription(sub_id) {
        return this.subscriptions.find(s => {
            return s.id == sub_id;
        });
    }
    getOrder(oid) {
        return this.orders[oid];
    }
    getOrders() {
        return Object.values(this.orders);
    }

    resolveSubscribers(tickets) {
        let i = 0;
        while (tickets.length > 0 && i < this.subscriptions.length) {

            if (this.subscriptions[i].count <= tickets.length && this.subscriptions[i].count != this.subscriptions[i].tickets.length) {
                for (let j = 0; j < this.subscriptions[i].count; j++) {
                    this.subscriptions[i].tickets.push(tickets.shift());
                }

            } else {
                while (tickets.length > 0 && this.subscriptions[i].count != this.subscriptions[i].tickets.length) {
                    this.subscriptions[i].tickets.push(tickets.pop());
                }
            }
            this.subscriptions[i].status = "assigned";
            i++;
        }


    }

    getTimeUntil() {
        var duration = this.datetime.getTime() - new Date().getTime();

        var milliseconds = parseInt((duration % 1000) / 100),
            seconds = parseInt((duration / 1000) % 60),
            minutes = parseInt((duration / (1000 * 60)) % 60),
            hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;

    }
    getAvailableSeating() {
        let str = "";
        this.sections.forEach(function(e) {
            str = str + e.name + "\n";
            str = str + e.getAvailableSeats();
            str = str + "\n \n \n";
        });
        return str;
    }
    getAvailableSeatingById(sid) {
        for (let i = 0; i < this.sections.length; i++) {

            if (sid === this.sections[i].getId()) {
                return this.sections[i].name + "\n" + this.sections[i].getAvailableSeats();
            }

        }

        return "NOT FOUND";

    }
    getSections() {
        return this.sections;
    }
    getSection(sid) {
        for (let i = 0; i < this.sections.length; i++) {
            if (sid === this.sections[i].getId()) {
                return this.sections[i];
            }
        }
    }
}
module.exports = Show;