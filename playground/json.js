/*const obj ={
    name:'Claudio'
};

const stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/
/*const personString='{"name": "Claudio","edad": 25}';
const person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/
const fs = require('fs');

const originalNote = {
    title:'algun titulo',
    body:'algun cuerpo'
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
//note
console.log(typeof note);
console.log(note.title);