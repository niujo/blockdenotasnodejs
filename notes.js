console.log('Starting app.js');



module.exports.add = (a,b)=>{
   
    return a+b;
};
const addNote=(title, body)=>{
    console.log('aderir nota',title,body)
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