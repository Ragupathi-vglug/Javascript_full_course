const numbers=[1,2,3,4,5,6,7,8,9];
let sqrt=numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2);
})
console.log(sqrt);

console.log("\n");

// In complex object map()
let users=[
    {name:"Ragu",age:21,city:"Panrutti"},
    {name:"Jenny",age:20,city:"washington"}
];
console.log(users);
let eleigible_user=users.map((user)=>({
    /*
    name:user.name,
    age:user.age,
    city:user.city,
    */
    ...user,
    status:user.age>=18?"Eligible":"Not eligible"
}));
console.table(eleigible_user);

// map() advance
console.log("\n");
// 1) Simpple transformation
const num=[1,2,3,4,5,6,7,8,9];
let double=num.map(n=>n*2);
console.log(double);

console.log("\n");
// 2)Modifying array elements
const words=["Apple","Orange",];