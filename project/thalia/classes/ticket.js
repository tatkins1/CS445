class Ticket {
    constructor(id, seatid, wid, sectionid,pid, price) {
        this.id = id;
        this.seatid = seatid;
        this.wid = wid;
        this.sid = sectionid
        this.pid=pid;
        this.price = price;
        this.order = null;
        this.donated= false;
        this.status = 0; //0 for new, 1 for donated and -1 for used
    }
    setOrder(order) {
        if (!this.order) {
            this.order = order;
        }
    }
    getId(){
        return this.id;
    }
    getStatus(){
        if (this.status==0){
            return "open";
        }
        if(this.status==1){
            return "donated";
        }
    }
    getOrder() {
        return this.order;
    }

    setStatus(status) {
        this.status = status;
    }
    use() {
        if (this.status != -1) {
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
    isDonatable() {
        if (this.status == 0) {
            return true;
        } else {
            return false;
        }
    }


    donate() {
        var status = this.status;
        if (status == 0) {
            this.setStatus(1);
            this.donated=true;
            return true;
        } else {
            console.log("Cannot be donated. Ticket Already Used Or Donated.");
            return false;
        }
    }




}

module.exports = Ticket;