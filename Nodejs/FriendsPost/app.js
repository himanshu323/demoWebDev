

var express=require("express");
var bodyParser=require("body-parser");



var app=express();

var friends=["Tom","Smith","Ryan","Eoin"];
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/",function (req,resp) {
    resp.render("home");
})

app.get("/friends",function (req,resp) {
    resp.render("friends",{friends:friends});
})


app.post("/addFriend",function (req,resp) {
    var friend=req.body.addFriend;
    friends.push(friend);
    resp.redirect("/friends");
})
app.listen(3000,function () {
    console.log("Server started");
})