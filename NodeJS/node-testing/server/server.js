const express=require("express");

let app=express();

app.get("/",(req,resp)=>{
    resp.send("Hello world");
})

app.get("/users",(req,resp)=>{

    resp.send([{
        name:"Mike",
        age:32
    },{
        name:"Himanshu",
        age:26
    },{
        name:"Andrew",
        age:32
    }])
}


)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

module.exports={
    app
}