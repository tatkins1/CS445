class Theatre {
    //refactor to singleton
    constructor(name, theatre_layout, layout_map) {
        this.name = name;
        this.shows = {}; // map of shows
        this.theatre_layout = theatre_layout;
        this.layout_map = layout_map;
        this.patrons={};
        this.reports={};

    }
    getShows() {
        return Object.values(this.shows);
    }
    getShow(show_id) {
        if (this.shows[show_id]) {
            return this.shows[show_id];
        } else {
            return null;
        }


    }
    getLayout() {
        return this.theatre_layout;
    }
    editLayout(newlayout) {
        this.section_layout = newlayout;
    }
    addShow(show_object) {
        this.shows[show_object.id] = show_object;

    }
    editShow(show_ID, show_object) {
        //blah
    }
    addOrder(order){
        this.orders.push(order);
    }
    getOrder(orderID){

    }

}
module.exports = Theatre;