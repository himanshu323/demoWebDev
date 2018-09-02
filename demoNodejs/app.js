var express = require("express");
var faker =require("faker");



var app = express();


app.get("/", function (req, resp) {
    resp.send("This is it");
    
});
/*
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started");
});*/

app.get("/bye",function (req,resp) {
   console.log("Hit Goodbye");
    resp.send("Goodbye");
})

app.get("/dogs",function (req,resp) {
    resp.send("Meow");

})



app.listen(3000, function () {
    console.log("Server has started!!!");
});

