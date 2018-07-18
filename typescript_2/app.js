"use strict";
for (var i = 10; i < 20; i++) {
    console.log("Hello");
}
// console.log(i);
// const i=12;
// i=13;
var abc = function () { return 12 * 12; };
console.log(abc());
// Default param
function add(ab, a, b) {
    if (a === void 0) { a = 5; }
    if (b === void 0) { b = a - 3; }
    return a + b + ab;
}
console.log(add("dd"));
//Rest and Spread
var arrayNum = [4, 5, 6, 8];
console.log(Math.max.apply(Math, arrayNum));
function multipleAdd() {
    var ary = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ary[_i] = arguments[_i];
    }
    return ary;
}
console.log(8, 9, 10, 89);
//Destructure Array and Objects
var colors = ["red", "yellow", "orange"];
var col1 = colors[0], col2 = colors[1];
console.log(col1 + col2);
var person = {
    nam: "hi",
    age: 32
};
var id = person.nam, ud = person.age;
console.log(id, ud);
var text = "kljlkjlj" + col2 + "\n" +
    "wdwd";
// Template Literals
var textTemplateLiteral = "jkjldsj\nj;j;j;" + col2 + "\nklkkl";
console.log(textTemplateLiteral);
console.log(text);
var testArray = {
    name: "Rohit",
    age: 23,
    hasWatched: true,
    friends: ["Hello", "Test"],
    printMessag: function (value) {
        value;
    },
};
