const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs")

const title={
    describe:"title of the note",
    demand:true,
    alias:"t"
};

 const body={
    describe:"Body of the note",
    demand:true,
    alias:"b"
};
const argv=yargs.command(
    "add", "Add a new note",{
        title,
        body
    }
).
command("delete","delete a note",{
    title
}).
command("read","Read a note",{
    title
}).
command("list","List all notes").

help()
.argv;

const notes = require("./notes.js");


let user = os.userInfo();
console.log("Starting appjs")
// fs.appendFile("message.txt",`Hello ${JSON.stringify(user)}`,(error)=>{

//     if(error){throw error}

//     console.log("Success");
// });
// console.log("Hello");

// fs.appendFile("message.txt",`Hello ${JSON.stringify(user)}`,(error)=>{

//     if(error){throw error}

//     console.log("SuccessAAAA");
// });

// console.log(notes.age,"***");

// console.log(notes.addNumbers(6,8));

// console.log(_.isString(212));

// console.log(_.isString("HImanshu"));

// let filArray=_.uniq(["And",5,"And",5,9]);

// console.log(filArray);

console.log("Process", process.argv);

console.log("Yargs", argv);
//let command =process.argv[2];
let command = argv._[0];

if (command === "add") {
    let note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log("Note Added");
       notes.logNote(note);
    }
    else {
        console.log("Note is already taken");
    }
}

else if (command === "delete") {

    let remove = notes.deleteNote(argv.title);
    let message = remove ? "Note was removed" : "Note doesn't exist";
    console.log(message);

}
else if (command === "list") {
    allNotes=notes.getAllNotes();
    console.log(`Printing the ${allNotes.length} note(s)`)
    allNotes.forEach(note => notes.logNote(note));
    

}
else if (command == "read") {
    let getNote=notes.getNote(argv.title);
    if(getNote){
        console.log("Note Found");
       notes.logNote(getNote);
    }
    else {
        console.log("Note not found");
    }
    
}
else {
    console.log("Command not present")
}