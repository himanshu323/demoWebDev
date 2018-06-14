function printReverse(array){

	for(var i=array.length-1;i>=0;i--){
		console.log(array[i]);
	}
}

printReverse([5,4,3]);


function isUniform(array){

	for(var i=0;i<array.length-1;i++){
		if(!(array[i] === array[i+1])){
			return false;
		}
	}

	return true;
}


isUniform([4,5,6]);

function sumOfArray(array){
	var sum=0;
	array.forEach(function(num){

		sum+=num;
	});
	return sum;
}

sumOfArray([5,43,23]);


function max(array){

	var max=array[0];

	for(var i=1;i<array.length;i++){
		if(array[i]>max){
			max=array[i];
		}
	}

	return max;
}

max([76,81,21]);

var raj={
	firstName:"Raj",

	sayHello:function(){
		console.log("Hello " + this.firstName);
	},

	addNumbers:function(a,b,c,d){

		console.log("Sum is " + (a+b+c+d) 
			+"for " + this.firstName);
	},

	dog:{
		sayHi:function(){
			console.log("Say hi " + this.firstName);
		}
	},

	timeHello:function
	(){

		setTimeout(function(){
	console.log("Hello" + this.firstName);
}.bind(this),3000);
	}
}

var elie={

	firstName:"Elie"
}


console.log(raj.firstName);
raj.sayHello();
raj.dog.sayHi();

raj.dog.sayHi.call(raj);

raj.sayHello.call(elie);

raj.addNumbers.call(elie,1,2,3,4);
raj.addNumbers.apply(elie,[12,3,4,4]);

var sp=raj.addNumbers.bind(elie,1,2,3,4);
sp();


var fp=raj.addNumbers.bind(elie,1,2);
fp(91,2);

// setTimeout(function(){
// 	console.log("Hello");
// },3000);

// raj.timeHello();

function Hello(firstName){
this.firstName=firstName;
this.bark=function(){
	console.log("Hello " +this.firstName);
};

}

var hello=new Hello("Raj");

hello.bark();
function Car(make,model,purchase){

	this.make=make;
	this.model=model;
	this.purchase=purchase;

	this.wheels=3;
}

function Motorcycle(make, model,purchase){
	// Car.call(this,make,model,purchase);
	// Car.apply(this,[make,model,purchase]);


	Car.apply(this,arguments);


	
	this.wheels=6;
}


var p1=new Motorcycle("1","2","3");

