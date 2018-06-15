var double=(value:number):number=>value*2;

var  greet=(name:string="Max"):void=>{
    
    console.log("Hello, " + name);
}

greet();
greet("Anna");

var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

var newArray = [55, 20];
Array.prototype.push(...[newArray +numbers]);
console.log(newArray);


var testResults = [3.89, 2.99, 1.38,99];
var [result1,result2,,result3]=testResults;
console.log(result1, result2,result3);

var scientist = {firstName: "Will", experience: 12};

var {firstName,experience}=scientist;

console.log(firstName, experience);