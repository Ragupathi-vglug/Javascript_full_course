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