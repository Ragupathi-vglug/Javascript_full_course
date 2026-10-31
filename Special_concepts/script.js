// Differeence Between Rest parameter and Spread Operator

// Rest Parameter
function myfunction(first,second,...rest){
    console.log(first);
    console.log(second);
    console.log(rest);
}
myfunction(1,2,3,4,5,6,7,8,9,0);

//Spread Operator
let a=[1,2,3];
let b=[...a,4,5];
console.log(b);

// Parameter Destructuring
function SayHello({name,age}){
    console.log(`Hello ${name}`);
    console.log(`Age is ${age}`);
}
const person={name:"Ragu",age:21};
SayHello(person);

// Using Array
function add([a,b]){
    return a+b;
}
let numa=[92990,1810];
console.log(add(numa));

const user={name:"Ragu",age:21,city:"Panutti",country:"India"};
function Hi({name,age,...rest}){
    console.log(`${name} is ${age} years old and He is a Student`);
    console.log(rest);
}
Hi(user);

// Call Apply and Bind Methods
function ragu(){
    console.log(this);
}
ragu();
console.log(ragu.name);
console.log(ragu.toString);

// Call method
const Student={username:"Ragupathi"};
function welcome(){
    console.log("Welcome :",this.username);
}
function total(eng,math){
    console.log(this.username ,"Got ",(eng+math)," Marks");
}

welcome();
total(50,70);
total.call(Student,50,50);

// Apply Method
let sub=[50,100];
total.apply(Student,sub);

// Bind Method
const fun=total.bind(Student,90,90);
console.log(fun);
fun();

