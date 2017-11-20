let Section = require("./section");
class Show {
    constructor(id, show_info, seating_info, theatre_layout) {
        this.id=id;
        this.name = show_info.name;
        this.show_info=show_info;
        this.datetime = new Date(show_info.date + "T" + show_info.time + ":00Z");
        this.seating_info = seating_info;

        this.sections = seating_info.map(e => {
            return new Section(theatre_layout[e.sid], e.price);
        });
    }
    getPrice(section_id) {

    }
    getId(){
        return this.id;
    }

    //getters and setters for everything

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