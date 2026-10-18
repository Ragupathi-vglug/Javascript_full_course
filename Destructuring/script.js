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

