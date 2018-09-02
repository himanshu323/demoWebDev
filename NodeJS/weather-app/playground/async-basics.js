// console.log("Starting app");

// setTimeout(()=>{
//     console.log("Inside timeout")
// },2000);

// setTimeout(()=>{
//     console.log("Inside Zero")
// },0);

// console.log("ending app");

function getUserData(user,callback){

    let userData={
        user,name:"Test"
    }

    setTimeout(()=>{
        callback(userData)
    },3000);
}

getUserData(34,(data)=>{
    console.log(data);
})