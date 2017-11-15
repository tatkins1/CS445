class showIDgenerator {
    constructor() {
        this.count = 0;
        this.name = "Sh";
    }
    generate() {
        this.count += 1;
        return this.name + this.count;
    }
}
module.exports = showIDgenerator;