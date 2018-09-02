const db=require("./db");

module.exports.handleSignUp=(email,password)=>{

    //Check if email exits
    db.saveUser({email,password})
    //Greet with wlecome message
}