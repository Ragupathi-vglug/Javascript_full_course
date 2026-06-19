// Every and some function
n=[10,2,3,4,5,9];
let res=n.every((value)=>{
    return value%2==0;
});
console.log(res);
res=n.some((value)=>{
    return value%2==0;
})
console.log(res);

console.log("\n");
// Primitive and Reference data type
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3=Object.assign({},obj1,obj2);
/* or
const obj3={...obj1,...obj2};
*/
console.log(obj3);

console.log("\n");
// Multiple ways to clone array
let org=[1,2,3];
let clone=[...org];
console.log(clone);

console.log("\n");
clone=org.slice();
console.log(clone);

console.log("\n");
clone=[].concat(org);
console.log(clone);

console.log("\n");
clone=Array.from(org);
console.log(org);

console.log("\n");
clone=JSON.parse(JSON.stringify(org));
console.log(org);