// Slice() method
const numbers=[1,2,3,4,5,6,7,8,9,0];
console.log(numbers);
console.log(numbers.slice(2));
console.log(numbers.slice(2,5));

// Splice() method
console.log("\n");
// Basic
let n1=[1,2,3,4,5,6,7,8,9,0];
console.log("Before splice :",n1);
let rm_items=n1.splice(2);
console.log("Removed items :",rm_items);
console.log("After splice :",n1);

