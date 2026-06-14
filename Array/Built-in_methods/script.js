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
console.log("After ",n3)

console.log("\n");
// Concat() method
let a=[10,20,30];
let b=[40,50,60];
let c=[70,80,90];
console.log("A :",a);
console.log("B :",b);
console.log("C :",c);

let d=a.concat(b);
console.log(d);

d=a.concat(b,c);
console.log(d);

d=a.concat(b,c,25,67,48,49,29);
console.log(d);

d=a.concat(b,c,[a,b,c]);
console.table(d);

console.log("\n");
// Sort() method
const names=["Ragu","Bala","pathi","Abilash"];
names.sort();
console.log(names);

const nums=[23,34,75,87,26,96];
console.log("Before :",nums);
nums.sort();
console.log("After :",nums);
nums.sort((a,b)=>{
    return a-b;
})
console.log("Accending order sort :",nums);

console.log("\n");
// Fill() method syn : var_name.fill(value,st,end)
let n=[1,2,3,4,5,6,7,8];
console.log("Before fill :",n);
n.fill("#",2);
console.log("After fill :",n);

console.log("\n");
// Includes() method
const products=["pen","pencil","eraser","box","pen"];
let results=products.includes("pencil");
console.log(products);
console.log(results);
results=products.includes("pencil",2);
console.log(results);

console.log("\n");
// join() method
let things=["Hi","hello"];
console.log(things);
console.log(things.join());
console.log(things.join("+"));

console.log("\n");
// Reverse() method
const num=[1,2,3,4,6,6,7,8];
console.log("Before reverse :",num);
num.reverse()
console.log("After reverse :",num);

console.log("\n");
// Array elements with length properties
const x={0:10,1:20,2:30,3:40,length:4};
console.log(x);
Array.prototype.reverse.call(x);
console.log(x);

console.log("\n");
// Push() method
n=[1,2,3,4];
console.log(n);
console.log(n.push(5,6));
console.log(n);

let users=["Ragu","Pathi"];
let users1=["jeffy","rudy"]
console.log(users);
console.log(users1);
users.push(...users1);
console.log(users);

console.log("\n");
// pop() method
let users2=["jeffy","rudy"]
console.log(users2);
users.pop();
console.log(users2);

console.log("\n");
// shift() method
let students=["Ragu","pathi"];
console.log(students);
students.shift();
console.log(students);

console.log("\n");
//unshift() method 
console.log(students);
students.unshift("mugu");
console.log(students);
