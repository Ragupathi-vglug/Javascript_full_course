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

