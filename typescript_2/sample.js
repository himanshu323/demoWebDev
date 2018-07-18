"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
console.log(Color[Color.Red]);
