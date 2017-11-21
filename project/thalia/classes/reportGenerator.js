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


            total_seats += getTotalSeats(show);

            sold_seats += getSoldSeats(show);
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

        let total_seats = getTotalSeats(this.theatre.getShow(show_id));
        let sold_seats = getSoldSeats(this.theatre.getShow(show_id));
        let total_occupancy = sold_seats * 100 / total_seats;
        return total_occupancy;
    }
    getTotalRevenue() {
        let shows=this.theatre.getShows();
        let total_revenue=0;
        shows.forEach(s=>{
            total_revenue+=getShowRevenue(s);
        })
        return total_revenue;

    }
    getTotalRevenuebyShow(show_id) {
        let show =this.theatre.getSection(show_id);
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
        },0);
    }
function getSoldSeats(show) {
    return show.getSections().map(sec => {
            return sec.getNumAvailableSeats();
        }).reduce((total, result) => {
            return total + result;
        },0);
}
function getShowRevenue(show) {
    return show.orders.map(o=>{
       return o.tickets.map(t=>t.price).reduce((total,result)=>{
            return total+result;
        },0);
    }).reduce((total,result)=>{
            return total+result;
        },0);
}
module.exports = ReportGenerator;