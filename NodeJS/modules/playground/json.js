const fs=require("fs");

let note={
    title:'Hello',
    age:34
}

// let stringObj=JSON.stringify(note);

// fs.writeFile("notes.json",stringObj,(err)=>{
//     if (err){throw err}

//     console.log("Succcess")
// })

// let data= fs.readFile("notes.json",(err,data)=>{
//     console.log(JSON.parse(data))
//     return data
// })

// console.log(data);
const {promisfy}=require("promisfy");



async function hello(){

    const readFileAsyn=await promisfy(fs.readFile)
//     let dataValue=await readFileAsyn("notes.json",async(err,data)=>{
//    await console.log(JSON.parse(data));
//         return data
//     })
//      return await dataValue

let dataValue=await readFileAsyn("notes.json");
 console.log(JSON.parse(dataValue));
}


async function mainFunction(){
// let test= hello().then((abc)=>{console.log("hhh",abc)});
// await console.log(test);
// await read(test)

 await hello();
console.log("Bye")
}

async function read(hh){
    await console.log("****",hh)
}

mainFunction();