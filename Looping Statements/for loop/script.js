// For loop
// let n=prompt("Enter the range :");
let n=5;
for(i=1;i<=n;i++){
    console.log("*".repeat(i));
}

//Ex 02
let arr=[];
for(i=1;i<100;i++){
    arr.push(i);
}
console.log(arr);
console.log(arr[50]);

// Nested for loop
let nums=[];
for(let i=0;i<3;i++){
    nums.push([]);
    for(let j=0;j<3;j++){
        nums.push(j);
    }
}
console.log(nums);
// console.table(nums);

//