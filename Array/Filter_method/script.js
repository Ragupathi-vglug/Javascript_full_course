let numbers=[1,2,3,4,5,6];
let odd=numbers.filter(n=>n%2!=0);
console.log(odd);

// Using objects
let users=[
    {Name:"Ragu",age:20},
    {Name:"Jessy",age:25},
    {Name:"Muguel",age:35}
]
let exp_user=users.filter(u=>u.age>=25);
console.log(exp_user);

console.log("\n");
// Ex : 02
let colors=["gray","green","red","orange","violet"];
let col_fil=colors.filter(n=>n.length===3);
console.log(col_fil);
let st_col=colors.filter(n=>n.startsWith("g"));
console.log(st_col);

console.log("\n");
// Ex : 03
let products=[
    {name:"Apple",type:"fruit",price:150},
    {name:"Orange",type:"fruit",price:100},
    {name:"carrot",type:"veg",price:50},
    {name:"onion",type:"veg",price:30},
    {name:"tomato",type:"veg",price:60}
];
let cus=products.filter(product=>product.type==="veg" && product.price>50);
console.log(cus);