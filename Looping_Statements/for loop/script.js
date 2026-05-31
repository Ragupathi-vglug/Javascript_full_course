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
console.table(nums);

//For of Loop
let names=["Ragu","Pathi","Jane","Mike"];
console.log("\nFor Loop ");
console.log(names);
for(i=0;i<names.length;i++){
    console.log(names[i]);
}
console.log("\nFor of Loop ");
for(let name of names){
    console.log(name);
}

//For in loop
const users={
    name:"Ragu",
    Age:21,
    mob_no:"8667723804"
}
console.log("\n For in loop")
for(let props in users){
    console.log(props+" : "+users[props]);
}

// Looping through Objects
console.log("\n",users)
let arr_keys=Object.keys(users);
let arr_values=Object.values(users);
for(i=0;i<arr_keys.length;i++){
    console.log(arr_keys[i]," : ",arr_values[i]);
}

// Break Statement
for(i=0;i<10;i++){
    console.log(i);
    if(i==5){
        break;
    }
}

// Label Statement
let groups=[
    ["Ragu","Sweety","Kila"],
    ["Rajesh","Stan","Ryuji"],
    ["Nika","Nigga","Kelli"]
];
for(let group of groups){
    inner:
    for(let member of group){
        if(member.startsWith("R")){
            console.log("Found one starts with R :",member);
            break inner;
        }
    }
}