// ### SET UP ###
let Theatre = require("./classes/theatre");
let TheatreFactory = require("./classes/theatreFactory");
let theatre_layout = {
    "123": {
        "name": "Front right",
        "sid": "123",
        "layout": [4, 4, 4, 4]
    },
    "124": {
        "name": "Front centre",
        "sid": "124",
        "layout": [4, 4, 5, 6]
    },
    "125": {
        "name": "Front left",
        "sid": "125",
        "layout": [4, 4, 4, 4]
    },
    "126": {
        "name": "Main right",
        "sid": "126",
        "layout": [5, 5, 5]
    },
    "127": {
        "name": "Main centre",
        "sid": "127",
        "layout": [6, 7, 8]
    },
    "128": {
        "name": "Main left",
        "sid": "128",
        "layout": [5, 5, 5]
    }

}
let theatre= new Theatre("thalia", theatre_layout, {});
let theatreFactory = new TheatreFactory(theatre);
module.exports = {
    "theatre" : theatre,
    "theatreFactory" : theatreFactory
}