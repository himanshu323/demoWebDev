// var firstName=prompt("What is your first name?");
// var lastName=prompt("what is your last name?");
// var age=prompt("what is your age?");
// console.log("Your full name is " + firstName + " " + lastName);
// console.log("Your age is " + age);

// alert("You are alive for " + age*365 + " days");

function even(num){

if(typeof(num) ==="number"){
	if(num % 2 ===0){
		return true;
	}
	else{
		return false;

	}}
	else{
		return "Not Valid Data Type";
	}
}

var test=even("4");
console.log(test);
var test=even(21);
console.log(test);
function  factorial(num){
var f=1;
	for(var i=1;i<=num;i++){
		f=f*i;
	}
	return f;
}


var a=factorial(5);
console.log(a);


function kebabToSnake(n){

	if(n.indexOf("\-")){
		var test=n.replace(/-/g,"_");
	}
	console.log(test);
}

kebabToSnake("hello-world-test");