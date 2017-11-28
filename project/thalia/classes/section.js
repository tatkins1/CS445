const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class Section {

    /*
     {
                "name": "Front right",
                "sid": "001",
                "layout": [4, 4, 4, 4]
         }d
    */
    constructor(section_layout, price) {
        this.name = section_layout.section_name;
        this.sid = section_layout.sid;
        this.seats = makeSeats(section_layout.layout);
        this.price = price;

        function makeSeats(layout) {

            var x = layout.map(e => {
                let array = [];
                for (let i = 0; i < e; i++) {
                    array.push(1);
                }
                return array;

            });
            return x;

        }


    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getId() {
        return this.sid;
    }
    getNumAvailableSeats() {
        let num_seats = 0;
        for (let i = 0; i < this.seats.length; i++) {
            for (let j = 0; j < this.seats[i].length; j++) {
                if (this.seats[i][j] == 1) {
                    num_seats++;
                }
            }
        }
        return num_seats;
    }
    getTotalSeats() {
        let num_seats = 0;
        for (let i = 0; i < this.seats.length; i++) {
            for (let j = 0; j < this.seats[i].length; j++) {
                num_seats++;

            }
        }
        return num_seats;

    }
    getAvailableSeats() {
        let str = "";
        for (let i = 0; i < this.seats.length; i++) {
            for (let j = 0; j < this.seats[i].length; j++) {
                if (this.seats[i][j] == 1) {
                    var k = j + 1;
                    //str = str + alphabet[i] + "-" + k + ", ";
                    str = str + i + "-" + j + ", ";
                }

            }
            str = str + "\n";
        }
        return str;
    }

    getSeat(seat_id) {
        var x = seat_id.split("-");
        let i = parseInt(x[0]);
        let j = parseInt(x[1]);
        return this.seats[i][j];

    }
    bookSeat(seat_id) {
        var x = seat_id.split("-");
        let i = parseInt(x[0]);
        let j = parseInt(x[1]);
        if (this.seats[i][j]) {
            this.seats[i][j] = 0;
        }
    }
    setSeat(seat_id) {
        var x = seat_id.split("-");
        let i = x[0];
        let j = x[1];
        if (this.seats[i][j]) {
            this.seats[i][j] = 0;
        }
    }
    isSeatAvailable(seat_id) {
        //seat_id = "1-1"
        var x = seat_id.split("-");
        let i = parseInt(x[0]);
        let j = parseInt(x[1]);

        if (this.seats[i][j] == 1) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Section;