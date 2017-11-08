class Theatre {
    //refactor to 
    constructor(name, section_layout, layout_map) {
        this.name = name;
        this.shows = {}; // map of shows
        this.section_layout = section_layout;
        this.layout_map=layout_map;

    }
    getShows() {
        return Object.values(this.shows).map(e => e.name);
    }
    getShow(show_id) {
        let show = null;
        Object.values(this.shows).forEach(function(e) {
            if (e.show_id == show_id) {
                show = e;
            }
        });
        return show;

    }
    addShow(show_object) {
        this.shows[show_object.showid]=show_object;

    }
    editShow(show_ID, show_object) {
        //blah
    }

}
module.exports=Theatre;