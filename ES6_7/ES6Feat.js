//Template strings


function doubleMessage(number) {
    return `Your number doubled is ${(2 * number)}`;
}

console.log(doubleMessage(12));

//Fat Arrow functions

const fibonacci = n=> {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const profile = {
    name: 'Alex',
    getName:function () {
        return this.name;
    }
};

console.log(profile.getName());

const red = '#ff0000';
const blue = '#0000ff';

//enhanced object literals
const COLORS = {  red, blue };

const canvasDimensions = function (width, initialHeight) {
    const height = initialHeight * 9 / 16;
    return {
        width,
        height
    };
}

