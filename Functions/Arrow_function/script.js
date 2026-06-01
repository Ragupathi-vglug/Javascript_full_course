const add=(a,b)=>{
    return a+b;
}
console.log(add);
console.log(add(10,20));

// Using arrow function with map() 
let nums=[1,2,3,4,5,6];
const double_nums=nums.map(num=>num*2);
console.log(nums);
console.log(double_nums);

// Using arrow function with filter()
let fruits=["Apple","Mango","Orange","Grapes"];
console.log(fruits);
let fruit_fil=fruits.filter(fr=>fr.length>5);
console.log(fruit_fil);

// Using arrow function with reduce()
let c=[1,2,3,4,5];
console.log(c);
let tot=c.reduce((sum,d)=>sum+d,0);
console.log(tot);

