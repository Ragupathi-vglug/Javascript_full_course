function add(a,b){
    return a+b;
}
console.log(add(10,10));

// Function with arbitary argument
function sum(){
    let total=0;
    for(i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9,0));

// Spread Operator
function mul(...args){
    let total=1;
    for(i=1;i<args.length;i++){
        total*=args[i];
        
    }
    return total;
}
console.log(mul(1,2,3,4,5,6,7,8,9));

// Function as Expression
const sub=function(a,b){
    return a-b;
}
console.log(sub(10,5));

// Callback function
function mycallback(){
    console.log("This is a callback function");
}
function higherorderfunction(mycallback){
    return mycallback();
}
higherorderfunction(mycallback);

// Set function Timeout
setTimeout (function(){
    console.log("Hello world !");
},3000);
