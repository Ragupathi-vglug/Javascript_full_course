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

console.log("\n");
// Two argument
let n2=[1,2,3,4,5,6,7,8,9,0];
console.log("Before ",n2);
let rm_el=n2.splice(2,2);
console.log(rm_el);
console.log("After ",n2);

console.log("\n");
// Three argument
let n3=[1,2,3,4,5,6,7,8,9];
console.log("Before ",n3);
let removed_items=n3.splice(2,2,25,26);
console.log(removed_items);
console.log("After ",n3);

