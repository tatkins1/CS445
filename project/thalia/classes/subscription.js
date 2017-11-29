class Subscription{
	constructor(id,wid,patron_info,pid,count){
		this.id=id;
		this.wid=wid;
		this.patron_info=patron_info;
		this.pid;
		this.count=count;
		this.status="pending";
		this.tickets =[];

	}
}
module.exports=Subscription;