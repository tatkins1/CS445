class orderIDgenerator {
    constructor() {
        this.count = 0;
        this.name = "O";
    }
    generate() {
        this.count += 1;
        return this.name + this.count;
    }
}
module.exports = orderIDgenerator;