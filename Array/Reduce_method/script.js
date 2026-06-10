/*
syntax :
array.reduce(function(accumulator,current_value,index,array){},initial_value);
*/

let numbers=[1,2,3,4,5,6];
let sum=numbers.reduce((accumulator,current_value)=>accumulator+current_value);
console.log(sum);
