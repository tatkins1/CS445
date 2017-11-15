class patronIDgenerator {
    constructor() {
        this.count = 0;
        this.name = "P";
    }
    generate() {
        this.count += 1;
        return this.name + this.count;
    }
}
module.exports = patronIDgenerator;