// Object literal notation
const students={name:"Ragupathi",father:"Jayabalan",age:21,address:"panrutti",about:function(){
return `${this.name} is from ${this.address}`;
}};
console.log(students);
console.log(students.about());

// Factory function
function addstud(fullname,father,age,address,city){
    const user={};
    user.fullname=fullname;
    user.father=father;
    user.age=age;
    user.address=address;
    user.city=city;
    user.about=function(){
        return `${this.fullname} is from ${this.city}`;
    }
    user.eligibility=function(){
        return this.age>=18;
    }
    return user;
}
let u=addstud("Ragu","Jayabalan",21,"214 Abbedhkar street","Panrutti");
console.log(u);
console.log(u.eligibility());
console.log(u.about());

// Prototype Inheritance
const obj1={
    key1:"value1",
    key2:"value2"
}
console.log(obj1);
const obj2=Object.create(obj1);
obj2.key3="value3";;
console.log(obj2);
console.log(obj2.key3);

// Optional Chaining
const user={name:"Ragu",Address:{city:"panrutti"}};
console.log(user.Address?user.Address:undefined);
console.log(user.Address && user.Address.city);
user.Address.city="Cuddalore";
console.log(user.Address?.city);
let key="city";
console.log(user.Address?.[key]);

// Function inside object

// const object={name:"Ragu",age:21,method:function(){
//     console.log("Iam method !");
// }}
// const object={name:"Ragu",age:21,method(){
//     console.log("Iam method !");
// }}
const object={name:"Ragu",age:21,method:()=>{
    console.log("Iam method !");
}}
console.log(object);
console.log(object.method());


// Window object and this keyword
console.log("\n");
console.log("Window object ");
let age=21;
function info(){
    console.log(age);
    console.log(this);
}
info();

// Ex02
age =45;
const user{}