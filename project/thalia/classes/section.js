const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class Section {
    //seat_layout=[w*l]
    constructor(name, seat_layout) {
        this.name = name;
        this.id = null;
        let seat_obj = function(seat_layout) {
            let arr2d = [];
            for (let i = 0; i < seat_layout[0]; i++) {
                for (let j = 0; j < seat_layout[1]; j++) {

                    arr2d[i][j] = new Seat(alphabet[i] + j, price, name,);
                }
            }

            return arr2d;
        }
        this.seats = seat_obj();


    }
    getName(){
    	return this.name;
    }
    getId(){
    	return this.id;
    }
}
module.exports=Section;