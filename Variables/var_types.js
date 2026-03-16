/*
var - Global variable
let - Local variable
const - Constant variable (cannot be reassigned) and also local variable
*/
var msg="It's a message for the var type variable";
if (true){
    let msg="It's a message for the let type variable"
    const msg2="It's a message for the const type variable"
}
console.log(msg);
console.log(msg2);