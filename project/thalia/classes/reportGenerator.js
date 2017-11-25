class ReportGenerator {
    constructor(theatre) {
        this.theatre = theatre;
        this.reports = [{
                "mrid": "801",
                "name": "Theatre occupancy"
            }, {
                "mrid": "802",
                "name": "Revenue from ticket sales"
            },
            {
                "mrid": "803",
                "name": "Donated tickets report"
            }
        ];
    }
    getTotalOccupancyReport() {
        let shows = this.theatre.getShows();
        let num_shows = shows.length;
        let total_seats = 0;
        let sold_seats = 0;
        shows.forEach(show => {


            total_seats += getTotalSeats(show);

            sold_seats += getSoldSeats(show);
        });
        let total_occupancy = sold_seats * 100 / total_seats;

        let show_reports = shows.map(show => {
            return this.getOccupancyReportByShow(show.id);
        });
        let report = {
            "mrid": "801",
            "name": "Occupancy report",
            "start_date": "",
            "end_date": "",
            "total_shows": num_shows,
            "total_seats": total_seats,
            "total_sold": sold_seats,
            "overall_occupancy": total_occupancy,
            "shows": show_reports

        }
        return report;
    }
    getTotalOccupancy() {
        let shows = this.theatre.getShows();
        let num_shows = shows.length;
        let total_seats = 0;
        let sold_seats = 0;
        shows.forEach(show => {


            total_seats += getTotalSeats(show);

            sold_seats += getSoldSeats(show);
        });
        let total_occupancy = sold_seats * 100 / total_seats;



        let report = {
            "total_shows": num_shows,
            "total_seats": total_seats,
            "total_sold": sold_seats,
            "overall_occupancy": total_occupancy
        }
        return total_occupancy;
    }

    getOccupancyReportByShow(show_id) {
        let show = this.theatre.getShow(show_id);
        let total_seats = getTotalSeats(show);
        let sold_seats = getSoldSeats(show);
        let total_occupancy = sold_seats * 100 / total_seats;
        let report = {
            "wid": show_id,
            "show_info": show.show_info,
            "seats_available": total_seats,
            "seats_sold": sold_seats,
            "occupancy": total_occupancy
        }
        return report;
    }
    getOccupancyByShow(show_id) {

        let total_seats = getTotalSeats(this.theatre.getShow(show_id));
        let sold_seats = getSoldSeats(this.theatre.getShow(show_id));
        let total_occupancy = sold_seats * 100 / total_seats;
        return total_occupancy;
    }
    getTotalRevenue() {
        let shows = this.theatre.getShows();
        let total_revenue = 0;
        shows.forEach(s => {
            total_revenue += getShowRevenue(s);
        })
        return total_revenue;

    }
    getTotalRevenueReport() {
        let shows = this.theatre.getShows();
        let num_shows = shows.length;
        let total_seats = 0;
        let sold_seats = 0;
        let total_revenue = 0;
        shows.forEach(show => {


            total_seats += getTotalSeats(show);

            sold_seats += getSoldSeats(show);
            total_revenue += getShowRevenue(show);
        });

        let show_reports = shows.map(show => {
            return this.getRevenueReportByShow(show.id);
        });
        let report = {
            "mrid": "801",
            "name": "Revenue report",
            "start_date": "",
            "end_date": "",
            "total_shows": num_shows,
            "total_seats": total_seats,
            "total_sold": sold_seats,
            "overall_revenue": total_revenue,
            "shows": show_reports

        }
        return report;

    }
    getRevenueReportByShow(show_id) {
        let show = this.theatre.getShow(show_id);
        let total_seats = getTotalSeats(show);
        let sold_seats = getSoldSeats(show);
        let revenue= getShowRevenue(show);
        let report={
            "wid": show_id,
            "show_info": show.show_info,
            "seats_available": total_seats,
            "seats_sold": sold_seats,
            "occupancy": revenue
        }
        return report;
    }
    getTotalRevenuebyShow(show_id) {
        let show = this.theatre.getSection(show_id);

        return getShowRevenue(show);
    }
    generateTotalDonatedTicketsReport() {

    }
}

function getTotalSeats(show) {
    return show.getSections().map(sec => {
        return sec.getTotalSeats();
    }).reduce((total, result) => {
        return total + result;
    }, 0);
}

function getSoldSeats(show) {
    return getTotalSeats(show) - show.getSections().map(sec => {
        return sec.getNumAvailableSeats();
    }).reduce((total, result) => {
        return total + result;
    }, 0);
}

function getShowRevenue(show) {
    return show.getOrders().map(o => {
        return o.tickets.map(t => t.price).reduce((total, result) => {
            return total + result;
        }, 0);
    }).reduce((total, result) => {
        return total + result;
    }, 0);
}
module.exports = ReportGenerator;