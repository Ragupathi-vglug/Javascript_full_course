// Class and Inheritance
// Bofore Es6
function person(name){
    this.name=name;
}
person.prototype.sayHello=function(){
    console.log("Hello my name is "+this.name);
}
var per=new person("Ragu");
console.log(per);
per.sayHello();

// After ES6
class User{
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log("Hello My name is "+this.name);
    }
}
var user=new User("Ragupathi");
console.log(user);
console.log(user.sayHello());

// Inheritance
// Before ES6
function Person(name){
    this.name=name;
}
Person.prototype.sayHello=function(){
    console.log("Hello Iam ",this.name);
}
var p1=new Person("Walter");
console.log(p1);
p1.sayHello();
function Student(name,age){
    Person.call(this,name);
    this.age=age;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.eligibility=function(){
    console.log(this.name+" Age is "+this.age+" "+(this.age>=18?"Eligible":"Not Eligible"))
}
var stud=new Student("Ragu",22);
console.log(stud);
stud.sayHello();
stud.eligibility();

// After ES6
class Person1{
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log("Hello my name is "+this.name);
    }
}
class Stud extends Person{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    eligibility(){
        console.log(this.name+" Age is "+this.age+" "+(this.age>=18?"Eligible":"Not Eligible"))
    }
}
var s=new Stud("Ragu",21);
s.sayHello();
s.eligibility();

// Getter and Setter
const user={firstname:"Ragu",lastname:"Pathi",get fullname(){
    return this.firstname+" "+this.lastname;
},
set fullname(name){
    const parts=name.split("");
    this.firstname=parts[0];
    this.lastname=parts[1];
}}
console.log(user);
console.log(user.firstname);
user.firstname="Ragu";
console.log(user.firstname);

