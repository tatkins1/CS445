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
    getDonatedReport() {
        let shows = this.theatre.getShows();
        let num_shows = shows.length;
        let total_seats = 0;
        let sold_seats = 0;
        let donated_seats = 0;
        let donated_used = 0;
        let donated_used_value = 0;
        shows.forEach(show => {
            total_seats += getTotalSeats(show);
            sold_seats += getSoldSeats(show);
            donated_seats += getDonatedTickets(show);
            donated_used += getDonatedUsedTickets(show);
            donated_used_value += getDonatedUsedValue(show);

        });
        let show_reports = shows.map(show => {
            return this.getDonatedReportByShow(show.id);
        });
        let report = {
            "mrid": "803",
            "name": "Donated tickets report",
            "start_date": "",
            "end_date": "",
            "total_shows": num_shows,
            "total_seats": total_seats,
            "sold_seats": sold_seats,
            "donated_tickets": donated_seats,
            "donated_and_used_tickets": donated_used,
            "donated_and_used_value": donated_used_value,
            "shows": show_reports
        }
        return report;
    }
    getDonatedReportDate(start,end) {
        let start_date = parseInt(start);
        let end_date = parseInt(end);
        let shows = this.theatre.getShows().filter(show=>{return show.date>start_date&&show.date<end_date});
        let num_shows = shows.length;
        let total_seats = 0;
        let sold_seats = 0;
        let donated_seats = 0;
        let donated_used = 0;
        let donated_used_value = 0;
        shows.forEach(show => {
            total_seats += getTotalSeats(show);
            sold_seats += getSoldSeats(show);
            donated_seats += getDonatedTickets(show);
            donated_used += getDonatedUsedTickets(show);
            donated_used_value += getDonatedUsedValue(show);

        });
        let show_reports = shows.map(show => {
            return this.getDonatedReportByShow1(show.id);
        });
        let report = {
            "mrid": "803",
            "name": "Donated tickets report",
            "start_date": "",
            "end_date": "",
            "total_shows": num_shows,
            "total_seats": total_seats,
            "sold_seats": sold_seats,
            "donated_tickets": donated_seats,
            "donated_and_used_tickets": donated_used,
            "donated_and_used_value": donated_used_value,
            "shows": show_reports
        }
        return report;
    }

    getDonatedReportByShow(show_id) {
        let show = this.theatre.getShow(show_id);
        let total_seats = getTotalSeats(show);
        let sold_seats = getSoldSeats(show);
        let donated_seats = getDonatedTickets(show);
        let donated_used = getDonatedUsedTickets(show);
        let donated_used_value = getDonatedUsedValue(show);
        let report = {
            "wid": show_id,
            "show_info": show.show_info,
            "seats_available": total_seats,
            "seats_sold": sold_seats,
            "donated_tickets": donated_seats,
            "donated_and_used_tickets": donated_used,
            "donated_and_used_value": donated_used_value
        }
        return report;

    }
     getDonatedReportByShow1(show_id) {
        let show = this.theatre.getShow(show_id);
        let total_seats = getTotalSeats(show);
        let sold_seats = getSoldSeats(show);
        let donated_seats = getDonatedTickets(show);
        let donated_used = getDonatedUsedTickets(show);
        let donated_used_value = getDonatedUsedValue(show);
        let report = {
            "wid": show_id,
            "show_info": show.show_info,
            "seats_available": total_seats,
            "seats_sold": sold_seats,
            "donated_tickets": donated_seats,
            "donated_and_used_tickets": donated_used,
            "donated_and_used_value": donated_used_value
        }
        return report;

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
            return this.getOccupancyReportByShow1(show.id);
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
    getOccupancyReportByShow1(show_id) {
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
            return this.getRevenueReportByShow1(show.id);
        });
        let report = {
            "mrid": "802",
            "name": "Revenue report",
            "start_date": "",
            "end_date": "",
            "total_shows": num_shows,
            "total_seats": total_seats,
            "total_sold": sold_seats,
            "overall_revenue": total_revenue,
            "shows": show_reports

        }
        console.log(report);
        return report;

    }
    getRevenueReportByShow(show_id) {
        let show = this.theatre.getShow(show_id);
        let total_seats = getTotalSeats(show);
        let sold_seats = getSoldSeats(show);
        let revenue = getShowRevenue(show);
        let sections=show.getSections().map(s=>{
            return {
                "sid": s.sid,
                "section_name":s.name,
                "section_price": s.price,
                "seats_available": s.getNumAvailableSeats(),
                "seats_sold": getSectionSoldSeats(s),
                "section_revenue": getSectionRevenue(s)
            };
        });
        console.log(sections);
        let report = {
    "mrid": "802",
    "name": "Revenue from ticket sales",
    "total_shows": 1,
    "total_seats": total_seats,
    "sold_seats": sold_seats,
    "overall_revenue": revenue,
    "shows": [{
        "wid": show_id,
        "show_info": show.show_info,
        "sections": sections
  
    }]
}
    console.log(report)
        return report;
    }
    getRevenueReportByShow1(show_id) {
        let show = this.theatre.getShow(show_id);
        let total_seats = getTotalSeats(show);
        let sold_seats = getSoldSeats(show);
        let revenue = getShowRevenue(show);
        let report = {
            
            "wid": show_id,
            "show_info": show.show_info,
            "seats_available": total_seats,
            "seats_sold": sold_seats,
            "overall_occupancy": revenue
        }
        return report;
    }

}

function getDonatedTickets(show) {
    return show.getOrders().map(o => {
        return o.tickets.filter(t => t.donated).length
    }).reduce((total, result) => { return total + result }, 0);
}

function getDonatedUsedTickets(show) {
    return show.getOrders().map(o => {
        return o.tickets.filter(t => t.donated && t.status == -1).length
    }).reduce((total, result) => { return total + result }, 0);
}

function getDonatedUsedValue(show) {
    return show.getOrders().map(o => {
        return o.tickets.filter(t => t.donated && t.status == -1).map(t => t.price);
    }).reduce((total, result) => { return total + result }, 0);
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

function getSectionSoldSeats(section) {
   return getSectionTotalSeats(section)-section.getNumAvailableSeats();
}
function getSectionTotalSeats(section) {
    return section.getTotalSeats();
}
function getSectionRevenue(section) {
    return getSectionSoldSeats(section)*section.price;
}

function getShowRevenueDate(show, end, start) {
    let start_date = parseInt(start);
    let end_date = parseInt(end);
    return show.getOrders().filter(o=>{
        return o.date<end_date&&o.date>start_date;
    }).map(o => {
        return o.tickets.map(t => t.price).reduce((total, result) => {
            return total + result;
        }, 0);
    }).reduce((total, result) => {
        return total + result;
    }, 0);
}
module.exports = ReportGenerator;