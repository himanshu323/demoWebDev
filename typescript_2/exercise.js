"use strict";
var double = function (value) { return value * 2; };
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var newArray = [55, 20];
(_a = Array.prototype).push.apply(_a, [newArray + numbers]);
console.log(newArray);
var testResults = [3.89, 2.99, 1.38, 99];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[3];
console.log(result1, result2, result3);
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var _a;
