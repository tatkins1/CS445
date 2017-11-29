// ### SET UP ###
let Theatre = require("./classes/theatre");
let TheatreFactory = require("./classes/theatreFactory");
let theatre_layout = {
    "123": {
        "section_name": "Front right",
        "sid": "123",
        "layout": [4, 4, 4, 4],
        "col":[1,1,1,1],
        "row":[1,2,3,4]
    },
    "124": {
        "section_name": "Front center",
        "sid": "124",
        "layout": [4, 4, 5, 6],
        "col":[5,5,5,5],
        "row":[1,2,3,4]
    },
    "125": {
        "section_name": "Front left",
        "sid": "125",
        "layout": [4, 4, 4, 4],
        "col":[9,9,10,11],
        "row":[1,2,3,4]
    },
    "126": {
        "section_name": "Main right",
        "sid": "126",
        "layout": [5, 5, 5],
        "col":[1,1,1],
        "row":[5,6,7]
    },
    "127": {
        "section_name": "Main center",
        "sid": "127",
        "layout": [6, 7, 8],
        "col":[6,6,6],
        "row":[5,6,7]
    },
    "128": {
        "section_name": "Main left",
        "sid": "128",
        "layout": [5, 5, 5],
        "col":[12,13,14],
        "row":[5,6,7]
    }

}

let theatre= new Theatre("thalia", theatre_layout, {});
let theatreFactory = new TheatreFactory(theatre);
module.exports = {
    "theatre" : theatre,
    "theatreFactory" : theatreFactory
}