for(let i=10;i<20;i++){
    console.log("Hello");}

// console.log(i);

// const i=12;
// i=13;

const abc=()=> 12*12;

console.log(abc());

// Default param

function add(ab:string,a:number=5,b:number=a-3):string{
    return a+b+ab;
}

console.log(add("dd"));

//Rest and Spread

var arrayNum=[4,5,6,8];

console.log(Math.max(...arrayNum));

function multipleAdd(...ary:number[]){
    return ary;
}

console.log(8,9,10,89)

//Destructure Array and Objects

const colors=["red","yellow","orange"];

const [col1,col2,]=colors;

console.log(col1 + col2);

var person={
    nam:"hi",
    age:32
}

var {nam:id,age:ud}=person;

console.log(id,ud);

var text="kljlkjlj" +col2 + "\n" +
"wdwd";


// Template Literals
var textTemplateLiteral=`jkjldsj
j;j;j;${col2}
klkkl`

console.log(textTemplateLiteral);

console.log(text);


let testArray: {
  name: string;
  age: number
  hasWatched: boolean
  friends: string[],
  printMessag(val:number):void
} = {
  name: "Rohit",
  age: 23,
  hasWatched: true,
  friends: ["Hello", "Test"]
  ,  printMessag:function(value:number) {
         value;
    }, 
};

