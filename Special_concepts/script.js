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
let numa=[1,3];
console.log(SayHello(numa));
