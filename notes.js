console.log('Starting app.js');

/*
const = cosas fijas
let = cosas que cambian
*/

let fechNotes=()=>{
    try{
        const notesString = fs.readFileSync('notes-data.json');
        return  JSON.parse(notesString);

    }catch(e){
        return[];
    }

};
let saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

const fs = require('fs');
const addNote=(title, body)=>{
    let notes = fechNotes();
    var note = {
      title,
      body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);
  
    if (duplicateNotes.length === 0) {
      notes.push(note);
      saveNotes(notes);
      return note;
    }
};


const getAll = () =>{

    console.log('obtener todas las notas');
};

const getRead=(title)=>{

    console.log('Lee las notas');
};

const getRemove =(tittle)=>{

    console.log('se removieron',tittle);
} ;

module.exports = {
    addNote,
    getAll,
    getRead,
    getRemove
};