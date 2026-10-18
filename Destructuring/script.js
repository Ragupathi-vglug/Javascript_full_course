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
