console.log("Array Destructuring ");
// Before ES6
// const numbers=[1,2,3,4,5,6];
// const first=numbers[0];
// const second=numbers[1];
// const rest=numbers.slice(2);
// console.log(first);
// console.log(second);
// console.log(rest);

// After ES6
const numbers=[1,2,3,4,5,6];
const [first,second,...rest]=numbers;
console.log(first);
console.log(second);
console.log(rest);

console.log("Object Destructuring ");
// const person={name:"Ragu",Age:21,gender:"Male"};
// const name=person.name;
// const age=person.Age;
// const gender=person.gender;
// console.log(name);;
// console.log(age)
// console.log(gender);

// After ES6
const person={name:"Ragu",age:21,gender:"Male"};
const {name,age,gender}=person;
console.log(name);
console.log(age)
console.log(gender);

// Swapping 
let a=1;
let b=2;
[a,b]=[b,a];
console.log(a);
console.log(b);

// Skipping items using Destrructuring
let myarray=[1,2,3,4,5];
let [fir,,,fourth]=myarray;
console.log(myarray);
console.log(fir);
console.log(fourth);

let [f,s,...re]=myarray;
console.log(f);
console.log(s);
console.log(re);

// Nested Objects
const user={na:"Ragu",age:21,gender:"Male",address:{city:"Panrutti",state:"TN"}};
const {na,address:{city,state},}=user;
console.log(na);
console.log(city);
console.log(state);

// Nested Array
let num=[1,2,[3,4,[5,6]]];
const [i,j,[k,l,[m,n]]]=num;
console.log(i,j,k,l,m,n);