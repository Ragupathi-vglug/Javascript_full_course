// Number to String convertion
let a=25.5;
console.log(a,typeof(a));
a=String(a);
console.log(a,typeof(a));

// Boolean to String conversion
a=true;
console.log(a,typeof(a));
a=String(a);
console.log(a,typeof(a));

// Date to String conversion
a=new Date();
console.log(a,typeof(a));
a=String(a);
console.log(a,typeof(a));

// String to Number
a="123";
console.log(a,typeof(a));
a=Number(a);
console.log(a,typeof(a));

// Boolean to Number
a=true;
console.log(a,typeof(a));
a=Number(a); //true = 1 and false = 0
console.log(a,typeof(a));

// Array to Number
a=[1,2,3,4,"Ragu"];
console.log(a,typeof(a));
a=Number(a);
console.log(a,typeof(a)); // NaN (Not a number) we can't convert collection type to Number


// Type correction
let a1="25";
let b1=10;
console.log(a1+b1);
a1=Number(a1);
console.log(a1+b1);