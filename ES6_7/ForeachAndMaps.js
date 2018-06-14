var colors=["red","blue","orange"];
colors.forEach(function (color) {
    console.log(color);
})

function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function (post) {
        savePost(post);
    })
}

var numbers=[1,4,5,8];

var doubles=numbers.map(function (num) {
    return num*2;
})

console.log(doubles);

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights=images.map(function (image) {
    return image.height;
})

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds=trips.map(function(trip){
    return trip.distance/trip.time;
});

console.log(speeds);

function pluck(array,property) {
    var modArray=array.map(function (arr) {
        return arr[property];
    });
    return modArray;
}

console.log(pluck([{color:'red'},{color:'b'},{color:'yellow'}],'color'));


var products=[{name:"Cucumber",type:"vegetable",quantity:10,price:15},
    { name: "Apple", type: "fruit", quantity: 20, price: 12 },
    { name: "Orange", type: "fruit", quantity: 14, price: 23 },
    { name: "Onion", type: "vegetable", quantity: 15, price: 30 }
];

var modFil=products.filter(function (product) {
  return product.type==="fruit" && product.quantity<16 && product.price<25;  
});
console.log(modFil);

var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers = users.filter(function (user) {
    return user.admin === true;
});

var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin=users.find(function (user) {
    return user.admin;
});

var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find(function (account) {
    return account.balance === 12;
});