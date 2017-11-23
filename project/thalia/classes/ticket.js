class Ticket {
    constructor(id, seatid, wid, sectionid, price) {
        this.id = id;
        this.seatid = seatid;
        this.wid = wid;
        this.sid = sectionid
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
    isValid() {
        if (this.status == -1) {
            return false;
        } else {
            return true;
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