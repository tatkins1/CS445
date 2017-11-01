class Ticket {
    constructor(id, seat, show, price) {
        this.id = id; //generateId();
        this.seat = seat;
        this.show = show;
        this.price = price;
        this.order = null;
        this.status = 0; //0 for new, 1 for donated and -1 for used
    }
    setOrder(order) {
        if (!this.order) {
            this.order = order;
        }
    }
    getOrder() {
        return this.order;
    }
    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
    use() {
        if (this.getStatus() != -1) {
            this.setStatus(-1);
            return true;

        } else {
            console.log('Cannot be reused. Ticket already used');
            return false;
        }

    }

    donate() {
        var status = this.getStatus();
        if (status == 0) {
            this.setStatus(1);
            return true;
        } else {
            console.log("Cannot be donated. Ticket Already Used Or Donated.");
            return false;
        }
    }




}

module.exports = Ticket;