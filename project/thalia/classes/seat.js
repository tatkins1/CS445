class Seat {
    constructor(name, section_name) {
        this.name = name;
        this.id = null;
        this.section_name = section_name;
        this.availability = true;
    }
    getAvailability() {
        return this.availability;
    }
    setAvailability(boolean) {
        this.availability = boolean;
    }

}