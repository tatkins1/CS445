class ticketIDgenerator {
    constructor() {
        this.count = 0;
        this.name = "T";
    }
    generate() {
        this.count += 1;
        return this.name + this.count;
    }
}
module.exports = ticketIDgenerator