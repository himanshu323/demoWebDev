const somePromise=new Promise((resolve,reject)=>{

    //resolve("Hello how are you?")

    reject("Stopppp")

})

somePromise.then((data)=>{

    console.log(data);
},(errorMessage)=>{
   console.log(errorMessage) 
})

let asyncAdd=(a,b)=>
{

    return new Promise((resolve,reject)=>{

        if(typeof a ==="number" && typeof b==="number"){
            resolve(a+b);
        }
        else {
            reject("Argument must be number")
        }
    })
}

asyncAdd(5,9).then((res)=>{
    console.log(res);
    return asyncAdd(res,43)
}).then((final)=>{
console.log(final);
}).catch((error)=>{
    console.log(error);
})