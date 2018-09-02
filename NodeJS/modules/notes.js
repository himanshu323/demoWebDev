console.log("Starting Notes .js")
const fs = require("fs")

// function testy(){
//     console.log("InIn");
// }

// module.exports.age=25;

// module.exports.addNumbers=(a,b)=>{

//     return a+b;
// }

//testy();

let fetchAllNotes = () => {

    try {
        let data = fs.readFileSync("notes.json");
        return JSON.parse(data);
    }
    catch{
        return []
    }

}

let saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

let logNote=(note)=>{
    console.log("---");
    console.log("Note Title :", note.title)
    console.log("Note Body:", note.body);
}

let addNote = (title, body) => {
    let notes = fetchAllNotes();

    let note = {
        title, body
    }


    let duplicateArray = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateArray.length === 0) {
        notes.push(note);

        saveNotes(notes);


        return note;
    }




}

let deleteNote = (title) => {
    let notes = fetchAllNotes();
    let filArray = notes.filter((note) => {
        return note.title !== title;
    })
    saveNotes(filArray);

    return notes.length !== filArray.length
}

let getNote = (title) => {
    let notes=fetchAllNotes();
    let filArray=notes.filter((note)=>{
        return note.title==title;
    })
    if(filArray.length!==0){
        return filArray[0];
    }
}

let getAllNotes = () => {
    return fetchAllNotes();
}

module.exports = {
    addNote, deleteNote, getNote, getAllNotes,logNote
}