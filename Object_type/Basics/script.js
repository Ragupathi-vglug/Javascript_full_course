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
const users={name:"Ragu",age:21,city:"Panrutti"};
console.log(users)
for (let keys in users){
    console.log(`${keys} : ${users[keys]}`)
}

// Using Object.keys()
const keys=Object.keys(users);
console.log(keys);
keys.forEach(key=>{
    console.log(`${key} ${users[key]}`);
});

// Using Object.values()
const values=Object.values(users);
console.log(values);
values.forEach(value=>{
    console.log(value);
});

// Using Object.entries()
const entries=Object.entries(users);
console.log(entries);
entries.forEach(entry=>{
    console.log(entry[0]," : ",entry[1]);
});

// Using Normal forloop
for(i=0;i<entries.length;i++){
    console.log(entries[i][0]," : ",entries[i][1]);
}

// Objects inside in Array
const users1=[
    {name:"Ragu",age:21,city:"Panrutti"},
    {name:"Walter",age:47,city:"Washington"},
    {name:"Jessy",age:26,city:"Washington"}
];
console.log(users1);
for(const user of users1){
    console.log(user.name);
}
const names=users1.filter(name=>name.age>22);
console.log(names);