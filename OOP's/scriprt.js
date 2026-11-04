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

