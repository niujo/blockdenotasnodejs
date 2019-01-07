console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs=require('yargs');


const argv= yargs.argv;
const command = process.argv[2];


console.log('Command', command);
console.log('Process', process.argv);
console.log('Yargs',argv);


if(command === 'add'){
 
   let note = notes.addNote(argv.title, argv.body);
   if(note){
       console.log('Nota creada');
       notes.logNote(note);
   }else{
        console.log('El titulo esta tomado')
   }

}else if(command==='list'){
   
    notes.getAll();
    
}else if(command==='read'){
   
    const note= notes.getRead(argv.title);
   if(note){
        console.log('nota encontrada');
        notes.logNote(note);
   }else{
       console.log('nota no encontrada');
   }

}else if (command === 'remove'){
    const noteRemovida=notes.getRemove(argv.title);
    const mensaje = noteRemovida ?'Nota fue removida' : 'Nota no fue encontrada'
    console.log(mensaje);
}else {
    console.log('comando no reconocido');
}



/*const filteredArray= _.uniq(['Claudio', 1,'Claudio',1,2,3,4]);
console.log(filteredArray);*/

/*console.log(_.isString(true));
console.log(_.isString('lala'));*/

//console.log('Result:', notes.add(9,-3));

//const user = os.userInfo();

/*const res = notes.addNote();

console.log(res);*/

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! Tienes ${notes.age}`);

