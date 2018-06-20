const color = 'red';

const Car = {
    color,
    drive() {
        return 'Vroom!';
    },
    getColor() {
        return this.color;
    }
};


//Default arguments

function sum(a, b) {
    if (a === undefined) {
        a = 0;
    }

    if (b === undefined) {
        b = 0;
    }

    return a + b;
}

function sum(a=0, b=0) {
  
    return a + b;
}

//2nd examp

function addOffset(style) {
    if (!style) {
        style = {};
    }

    style.offset = '10px';

    return style;
}

function addOffset(style={}) {
   

    style.offset = '10px';

    return style;
}

//Rest and spread operators

const MathLib={
    calculateProduct(...array){
        return this.multiply(...array);
    }
,
    multiply(a,b){
        return a*b;
    }
}
console.log(MathLib.calculateProduct(5,6));

function join(array1, array2) {
    return [...array1,...array2];
}

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
}

function unshift(array, ...array2) {
    return [...array,...array2];
}

//Destructure Objects and arrays


function isEngineer(profile) {
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
}

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer({title,department}) {
    
    return title === 'Engineer' && department === 'Engineering';
}

const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject=classes.map(([subject,time,teacher])=>{

    return {subject,time,teacher}

}
    
);

//Generators


function*  colors() {
   const result=yield "red";
   yield "yellow";
   yield "blue";
   return result;

}

const c=colors();
console.log(c.next());
console.log(c.next("Hello"));
console.log(c.next());
console.log(c.next());

console.log(c);

for(let cg of colors()){
    console.log(cg);
}
const testingTeam = {
    testingLead: "Rock",
    testing: "Mock",
    [Symbol.iterator]:function *() {
        yield this.testingLead;
        yield this.testing;
    }
}

const Team={

title:"hhdd",
engineerLead:"John",
teamLead:"Rohit",
engineer:"HH",
testingTeam,
[Symbol.iterator]:function* () {
    yield this.engineerLead;
    yield this.teamLead;
    yield this.engineer;
    yield *this.testingTeam;

}



}



for(let t of Team){
    console.log(t);
}

//Promises

promise=new Promise(()=>
{

});

promise = new Promise((resolved,rejected) => {
    resolved();
});

promise.then(()=>{
console.log("finally finished");
return "Hello"
}).then(test=>console.log(test))
.catch(()=>console.log("Bad","rjected"));

let url ="http://jsonplaceholder.typicode.com/posts";

fetch(url).then((response)=>response.json())
.then(data=>console.log(data))
.catch(()=>console.log("BAD Errror"));