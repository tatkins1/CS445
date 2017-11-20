var array = [1, 2, 3, 4];
let sum = 0;
array.forEach(function(el) {
    sum = sum + el;

});
var z = function() {
    return "z140";
}();
console.log(z);
var x = array.map(e => e.toString());
console.log(x);
console.log(sum);

class TestClass {
	constructor(name){
		this.name = name;
	}
	getName(){
		return this.name;
	}

}



console.log(tc.constructor.name);

var str="HELLOW";
class IDg{
	constructor(seed=""){
		this.seed=seed;
		this.counter=0;
	}
	generate(){
		this.counter+=1;
		return this.seed + this.counter;
	}
}
 var idg = new IDg();
 var idg2 = new IDg("Ticket");
 console.log(idg2.generate());
 console.log(idg.generate());
 idg2.generate();
 idg2.generate();
 idg2.generate();
 console.log(idg2.generate());
 module.exports=TestClass;