class Show {
    constructor(show_info, seating_info, theatreObj) {
        this.name = show_info.name;
        this.web = show_info.web;
        this.datetime = new Date(show_info.date + "T" + show_info.time + ":00Z");
        this.date = show_info.date;
        this.time = show_info.time;
        this.seating_info = seating_info;

        this.sections = seating_info.map(e => {
            return new Section(theatreObj[e.sid].name, theatreObj[e.sid].layout);
        });
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    //getters and setters for everything

    getTimeUntil() {
        return (this.datetime.getTime() - new Date().getTime());
    }
    getAvailableSeating() {
        for (let i = 0; i < this.sections.length; i++) {
            console.log(this.sections[i].getName());

            for (let j = 0; j < this.sections[i].seats; j++) {
                for (let k = 0; k < this.sections[i].seats; k++) {
                    if (this.sections[i].seats[j][k].getAvailability()) {
                        console.log(this.sections[i].seats[j][k].name)
                    }


                }
            }
        }
    }
    getSections() {
        return this.sections;
    }
}
module.exports=Show;