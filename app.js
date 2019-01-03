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

    
    notes.addNote(argv.title, argv.body);
}else if(command==='list'){
   
    notes.getAll();
}else if(command==='read'){
   notes.getRead(argv.title);
}else if (command === 'remove'){
    notes.getRemove(argv.title);
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

