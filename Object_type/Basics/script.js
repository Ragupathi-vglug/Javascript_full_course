/*
Creating Objects in four ways
1)Using Object literals
2)Using the Object Constructor
3)Using the object.create() method
4)Using Class

*/
// Object literals
const person={name:"Ragu",age:21};
console.log(person);

// Object Constructor
const person1=new Object();
person1.name="Ragu";
person1.age=21;
console.log(person1);

// the object.create() method
const person_proto={
    Sayhello:()=>{
        console.log(`Hello My name is ${this.name}`)
    }
}
const person2=Object.create(person_proto);
person2.name="Ragu";
console.log(person2.name);
console.log(person2.Sayhello());

// Using class
class person3{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const person4=new person3("Ragu",21);
console.log(person4);

// Dot Notation
const user={name:"Ragu",age:21};
console.log(user);
console.log("Dot notation :",user.name);
user.name="Ragupathi";
console.log(user.name);

// Bracket Notation
console.log(user["name"]);
user["age"]=20;
console.log(user["age"]);
console.log(user);

// Iteration Through Objects
const user={name:"Ragu",age:21,job:"Backend"};
