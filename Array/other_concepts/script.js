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
