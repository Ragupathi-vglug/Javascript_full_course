// Method 1
let student=[101,"Ragupathi",21];
console.log(student);
console.log(student[0]);
console.log(student[1]);
console.log(typeof(student));

console.log("\n");
// Method 2
let a=new Array(1,2,3,4);
console.log(a);
console.log(typeof(student));

console.log("\n");
// 1) Print Each element of an array
const fruits=["Apple","Orange","Banana","Grapes"];
fruits.forEach(fr=>console.log(fr));

console.log("\n");
// 2) Sum of all the elements
const num=[1,2,3,4,5,6,7];
let tot=0;
num.forEach(n=>{
    tot+=n;
});
console.log("Total :",tot);

console.log("\n");
// 3) Create a new array from an excisting array
let n=[1,2,3,4,5];
let double_num=[];
n.forEach(num=>{
    n.push(n*2);
})
console.log(double_num);

console.log("\n");
// 4) Find the maximum element in an array
const numbers=[1,2,4,36,34];
let max=numbers[0];
numbers.forEach(num=>{
    if(num>max){
        max=num;
    }
});
console.log(numbers);
console.log("The maximum number is :",max);

console.log("\n");
// 5) calculate the average of an array
let n1=[1,2,3];
let total=0;
n1.forEach(n=>{
    total+=n;
});
console.log(n1);
console.log("Average is :",total/n1.length);

console.log("\n");
// 6) Filter an array
const n2=[1,2,3,4,5,6,7,8,9,10];
let even=[];
n2.forEach(n=>{
    if(n%2==0){
        even.push(n);
    }
});
console.log(n2);
console.log(even);

console.log("\n");
// 7) Update elements of an array
const names=["Ragu","John","madison"];
console.log(names);
names.forEach((n,val)=>{
    console.log(n,val);
    names[val]=n.toUpperCase();
});
console.log(names);