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

// 