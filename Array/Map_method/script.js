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
console.log(num);
console.log(double);

console.log("\n");
// 2)Modifying array elements
const fruits=["Apple","Orange","Mango"];
let fr=fruits.map(word=>word.toUpperCase());
console.log(fruits);
console.log(fr);

console.log("\n");
// 3) Combining array
const words=["Apple","Mango","Orange"];
let colors=["Red","Yellow","Orange"];
let fr_color=words.map((fruit,index)=>fruit+" - "+colors[index]);
console.log(words);
console.log(colors);
console.log(fr_color);

console.log("\n");
// 4) Filtering an array
const nums=[1,2,3,4,5];
let even=nums.map(n=>num%2==0);
console.log(nums);
console.log(even);

console.log("\n");
// 5) Extracting properties from an array
const students=[
    {name:"Ragu",Age:20},
    {name:"Pathi",Age:19}
];
let std_name=students.map(u=>u.name);
console.log(std_name);
// Update objects
const upd_user=students.map(user=>{
    return {
    name:user.name,
    age:user.Age+2
    }
});
console.log(upd_user);

console.log("\n");
// 6) Three argument Explain
const fruit=["Apple","banana"];
let sheet=fruit.map(function(current_value,index,array){
    return {
        word:current_value,
        lenth:current_value.length,
        position:index,
        tot_words:array.length
    }
})
console.log(sheet);