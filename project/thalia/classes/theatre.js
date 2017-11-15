class Theatre {
    //refactor to singleton
    constructor(name, section_layout, layout_map) {
        this.name = name;
        this.shows = {}; // map of shows
        this.section_layout = section_layout;
        this.layout_map = layout_map;

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
        return this.section_layout;
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

}
module.exports = Theatre;