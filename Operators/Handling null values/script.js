// Using conditional operator
function welcome(name){
    let result=name?name:"No name";
    console.log("Welcome :",result);
}
welcome("Ragu pathi");
welcome();

// Using Objects
let user={name:"Ragu",age:21};
console.log(user);
console.log(user.name);
const greet=(user)=>{
    const name=user.name?user.name:"No name";
    return "Hello"+name;
}
console.log(greet(user));


// Conitional chain
let avg=75;
const res=avg>90?"A grade":avg>80?"B grade":"C grade";
console.log(avg,"Has ",res);