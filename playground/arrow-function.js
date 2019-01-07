let square = (x)=>{
    let result = x*x;
    return result;
};
console.log(square(5));

let user={
    name:'claudio',
    sayHi:()=>{
        console.log(arguments);
        console.log(`HI. I'm ${this.name}`);
    },
    sayhiAlt () {
        console.log(arguments);
        console.log(`HI. I'm ${this.name}`);
    }
};

user.sayhiAlt(1,2,3);
//user.sayHi(1,2,3);