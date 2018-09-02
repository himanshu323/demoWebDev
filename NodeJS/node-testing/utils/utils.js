module.exports.addNumbers=(a,b)=> a+b;

module.exports.square=(x)=> x*x;


module.exports.setName=(user,fullName)=>{
    let res=fullName.split(" ")
    user.firstName=res[0];
    user.lastName=res[1];
    return user;
}

module.exports.asyncAdd=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },0.8);
}

module.exports.asyncPromiseSquare=(a)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(a*a);
    },1000)
})
}
