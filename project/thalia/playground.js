var array = [1,2,3,4];
let sum=0;
array.forEach(function(el) {
	sum=sum+el;

});
var z=function(){
	return "z140";
}();
console.log(z);
var x= array.map(e => e.toString());
console.log(x);
console.log(sum);

class TestClass{

}
let tc= new TestClass();
console.log(tc.constructor.name);

