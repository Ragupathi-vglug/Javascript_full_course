/*
syntax :
array.reduce(function(accumulator,current_value,index,array){},initial_value);
*/

let numbers=[1,2,3,4,5,6];
let sum=numbers.reduce((accumulator,current_value)=>accumulator+current_value);
console.log(sum);

console.log("\n");
// Flattering an array
let nest=[[1,2],[3,4]];
let flattering=nest.reduce((ac,cur)=>ac.concat(cur));
console.log(nest);
console.log(flattering);

console.log("\n");
// 1) Ex 01
let colors=["red","blue","green","red","red","green"];
let col_count=colors.reduce((ac,cur)=>{
    if(cur in ac){
        ac[cur]++;
    }
    else{
        ac[cur]=1;
    }
    return ac
},{});
console.log(colors);
console.log(col_count);

console.log("\n");
// Ex 02
let people=[
    {name:"Ragupathi",age:21,city:"Panrutti"},
    {name:"stella",age:19,city:"california"},
    {name:"alpha",age:17,city:"california"}
];
let groupbycity=people.reduce((ac,cur)=>{
    if(cur.city in ac){
        ac[cur.city].push(cur);
    }
    else{
        ac[cur.city]=[cur];
    }
    return ac;
},{});
console.log(groupbycity);

