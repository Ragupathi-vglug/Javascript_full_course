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

