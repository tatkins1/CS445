class ReportGenerator {
    constructor(theatre) {
        this.theatre = theatre;
    }
    getTotalOccupancy() {
        let shows = this.theatre.getShows();
        let num_shows = shows.length;
        let total_seats = 0;
        let sold_seats = 0;
        shows.forEach(show => {


            total_seats += show.getSections().map(sec => {
                return sec.getTotalSeats();
            }).reduce((total, result) => {
                return total + result;
            });

            sold_seats += show.getSections().map(sec => {
                return sec.getNumAvailableSeats();
            }).reduce((total, result) => {
                return total + result;
            });

        });
        let total_occupancy = sold_seats * 100 / total_seats;
        let report = {
            "total_shows": num_shows,
            "total_seats": total_seats,
            "total_sold": sold_seats,
            "overall_occupancy":total_occupancy
        }
        return total_occupancy;
    }
    getOccupancyByShow(show_id) {

        let total_seats = this.theatre.getShow(show_id).getSections().map(sec => {
            return sec.getTotalSeats();
        }).reduce((total, result) => {
            return total + result;
        });
        let sold_seats = this.theatre.getShow(show_id).getSections().map(sec => {
            return sec.getNumAvailableSeats();
        }).reduce((total, result) => {
            return total + result;
        });
        let total_occupancy = sold_seats * 100 / total_seats;
        return total_occupancy;
    }
    getTotalRevenue() {

    }
    getTotalRevenuebyShow() {

    }
    generateTotalDonatedTicketsReport() {

    }
}
module.exports = ReportGenerator;