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
   return fechNotes();
};

const getRead=(title)=>{
    const notes = fechNotes();
    const filterNotes=notes.filter((note)=>note.title === title);
    return filterNotes[0];
    
    //console.log('Lee las notas', title);
};

const getRemove =(title)=>{
    /*
        fechnote
        filter notes,removing la  indicada con el titulo y argumento
        salvar las notas en un nuevo array
    */

    const notes = fechNotes();

    const filtroNOTAS = notes.filter((note) => note.title!== title);
    saveNotes(filtroNOTAS);
    
    return notes.length!==filtroNOTAS.length;
    //console.log('se removieron',title);
} ;

const logNote  =(note)=>{

    debugger

    console.log('------');
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
};
module.exports = {
    addNote,
    getAll,
    getRead,
    getRemove,
    logNote
    
};