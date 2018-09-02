var express=require("express");

var app=express();

//Routes

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",function (req,resp) {
    resp.send("Hi there,welcome to my assignement");

})

app.get("/dynamic/:text",function (req,resp) {

    var textVal=req.params.text;
console.log(textVal);
    resp.render("home",{varText:textVal});

});

app.get("/getPosts",function (req,resp) {
 var posts=[{title:"Hello",author:"ABC"},{title:"Rain",author:"XYZ"},{title:"Byebye",author:"kjhkj"}];
 
 resp.render("posts",{posts:posts});
});

app.get("/speak/:animal",function (req,resp) {
    var animalVal=(req.params.animal).toLowerCase();
    if(animalVal === "pig"){
        resp.send("Oink");
    }
    else if(animalVal === "cow"){
        resp.send("Moo'");
    }
    else if(animalVal === "dog"){
        resp.send("Woof Woof!");
    }

    else{
        resp.send("Please enter a valid animal");
    }
});

app.get("/repeat/:value/:number",function (req,resp) {
   
    var textVal=req.params.value;
    var count=Number(req.params.number);
    var text="";
    for(var i=0;i<count;i++){
        
        text+=textVal+" "
    }
    resp.send(text.trimRight());

});

app.get("*",function (req,resp) {
    resp.send("Sorry,page not found..Whhat are you doing with your life?");
});

app.listen(3000);